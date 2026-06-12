<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function sa_mvp_block_categories( $categories ) {
	return array_merge(
		array(
			array(
				'slug'  => 'semianalysis',
				'title' => __( 'SemiAnalysis', 'semianalysis-mvp' ),
			),
		),
		$categories
	);
}
add_filter( 'block_categories_all', 'sa_mvp_block_categories' );

function sa_mvp_register_blocks() {
	$blocks_dir = SA_MVP_DIR . '/blocks';
	if ( ! is_dir( $blocks_dir ) ) {
		return;
	}

	foreach ( glob( $blocks_dir . '/*/block.json' ) as $block_json ) {
		register_block_type( dirname( $block_json ) );
	}
}
add_action( 'init', 'sa_mvp_register_blocks' );
