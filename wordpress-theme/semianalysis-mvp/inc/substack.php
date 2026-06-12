<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function sa_mvp_substack_decode_xml( $text ) {
	return html_entity_decode(
		(string) $text,
		ENT_QUOTES | ENT_HTML5,
		'UTF-8'
	);
}

function sa_mvp_substack_extract_tag( $item_xml, $tag ) {
	if ( preg_match( '/<' . preg_quote( $tag, '/' ) . '[^>]*><!\[CDATA\[([\s\S]*?)\]\]><\/' . preg_quote( $tag, '/' ) . '>/i', $item_xml, $match ) ) {
		return sa_mvp_substack_decode_xml( trim( $match[1] ) );
	}

	if ( preg_match( '/<' . preg_quote( $tag, '/' ) . '[^>]*>([\s\S]*?)<\/' . preg_quote( $tag, '/' ) . '>/i', $item_xml, $match ) ) {
		return sa_mvp_substack_decode_xml( trim( $match[1] ) );
	}

	return null;
}

function sa_mvp_substack_extract_image( $item_xml ) {
	if ( preg_match( '/<enclosure[^>]+url="([^"]+)"[^>]*type="image[^"]*"/i', $item_xml, $match ) ) {
		return sa_mvp_substack_decode_xml( $match[1] );
	}

	if ( preg_match( '/<enclosure[^>]+url="([^"]+)"[^>]*>/i', $item_xml, $match ) ) {
		$url = sa_mvp_substack_decode_xml( $match[1] );
		if ( str_contains( $url, 'substack' ) || str_contains( $url, 'amazonaws.com' ) ) {
			return $url;
		}
	}

	if ( preg_match( '/<media:content[^>]+url="([^"]+)"[^>]*(?:medium="image"|type="image[^"]*")/i', $item_xml, $match ) ) {
		return sa_mvp_substack_decode_xml( $match[1] );
	}

	$content = sa_mvp_substack_extract_tag( $item_xml, 'content:encoded' ) ?? sa_mvp_substack_extract_tag( $item_xml, 'description' ) ?? '';

	if ( preg_match_all( '/<img[^>]+src="([^"]+)"/i', $content, $matches ) ) {
		foreach ( $matches[1] as $src ) {
			$src = sa_mvp_substack_decode_xml( $src );
			if ( str_contains( $src, 'substack-post-media' ) || str_contains( $src, 'substackcdn.com/image/fetch' ) ) {
				return $src;
			}
		}
	}

	if ( preg_match( '/https:\/\/substack-post-media\.s3\.amazonaws\.com\/public\/images\/[a-f0-9-]+_\d+x\d+\.(?:png|jpe?g|webp)/i', $item_xml, $match ) ) {
		return $match[0];
	}

	return '';
}

function sa_mvp_substack_parse_item( $item_xml ) {
	$title       = sa_mvp_substack_extract_tag( $item_xml, 'title' ) ?? 'Untitled';
	$url         = sa_mvp_substack_extract_tag( $item_xml, 'link' ) ?? SA_MVP_NEWSLETTER_ARCHIVE;
	$raw_excerpt = sa_mvp_substack_extract_tag( $item_xml, 'description' ) ?? '';
	$excerpt     = wp_trim_words( wp_strip_all_tags( $raw_excerpt ), 28, '…' );
	$pub_date    = sa_mvp_substack_extract_tag( $item_xml, 'pubDate' ) ?? '';
	$date        = $pub_date ? gmdate( 'M Y', strtotime( $pub_date ) ) : '';
	$image       = sa_mvp_substack_extract_image( $item_xml );

	return array(
		'title'   => $title,
		'excerpt' => $excerpt,
		'date'    => $date,
		'url'     => $url,
		'image'   => $image,
	);
}

function sa_mvp_fetch_substack_articles( $limit = 8 ) {
	$cache_key = 'sa_mvp_substack_v2_' . $limit;
	$cached    = get_transient( $cache_key );
	if ( false !== $cached && is_array( $cached ) ) {
		return $cached;
	}

	$response = wp_remote_get(
		SA_MVP_SUBSTACK_FEED,
		array(
			'timeout' => 15,
			'headers' => array(
				'Accept'     => 'application/rss+xml, application/xml, text/xml',
				'User-Agent' => 'SemiAnalysis-MVP/1.0',
			),
		)
	);

	if ( is_wp_error( $response ) ) {
		return sa_mvp_substack_fallback();
	}

	$body = wp_remote_retrieve_body( $response );
	if ( empty( $body ) || ! preg_match_all( '/<item>[\s\S]*?<\/item>/i', $body, $matches ) ) {
		return sa_mvp_substack_fallback();
	}

	$articles = array();
	foreach ( array_slice( $matches[0], 0, $limit ) as $item_xml ) {
		$articles[] = sa_mvp_substack_parse_item( $item_xml );
	}

	if ( empty( $articles ) ) {
		return sa_mvp_substack_fallback();
	}

	set_transient( $cache_key, $articles, HOUR_IN_SECONDS );
	return $articles;
}

function sa_mvp_substack_fallback() {
	return array(
		array(
			'title'   => 'Deep Dive: AI Accelerator Supply Chain',
			'excerpt' => 'Analysis of production capacity, lead times, and vendor dynamics.',
			'date'    => 'May 2026',
			'url'     => SA_MVP_NEWSLETTER_ARCHIVE,
			'image'   => '',
		),
		array(
			'title'   => 'Datacenter Power: The Next Bottleneck',
			'excerpt' => 'How critical IT power capacity constraints are reshaping AI infrastructure.',
			'date'    => 'Apr 2026',
			'url'     => SA_MVP_NEWSLETTER_ARCHIVE,
			'image'   => '',
		),
		array(
			'title'   => 'GPU Cloud Benchmarks: ClusterMAX Update',
			'excerpt' => 'Latest benchmark results across leading neocloud providers.',
			'date'    => 'Apr 2026',
			'url'     => SA_MVP_NEWSLETTER_ARCHIVE,
			'image'   => '',
		),
		array(
			'title'   => 'CoWoS and Advanced Packaging Trends',
			'excerpt' => 'Tracking supplier revenue indices and capacity expansion.',
			'date'    => 'Mar 2026',
			'url'     => SA_MVP_NEWSLETTER_ARCHIVE,
			'image'   => '',
		),
	);
}
