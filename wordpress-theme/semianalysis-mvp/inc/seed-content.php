<?php
/**
 * Seed demo products on theme activation.
 *
 * @package SemiAnalysis_MVP
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Create default product posts if none exist.
 */
function sa_mvp_seed_products() {
	if ( get_option( 'sa_mvp_seeded' ) ) {
		return;
	}

	$products = array(
		array(
			'title'      => 'ChipBook',
			'slug'       => 'chipbook',
			'excerpt'    => 'Thousands of unique data points distilled into clear, actionable insights for investors and company decision makers.',
			'tagline'    => 'Monthly AI & semiconductor industry tracker',
			'featured'   => true,
			'cta'        => 'Buy ChipBook',
			'email'      => 'ChipBookSales@SemiAnalysis.com',
			'investors'  => 'Idea generation tool, investment thesis validation, and portfolio position tracking.',
			'executives' => 'Resource allocation optimization, strategic R&D investments, and capacity planning.',
			'includes'   => array(
				'35–50 page monthly deliverable with semiconductor charts and equity references',
				'Core industry trackers updated each month',
				'Timely datasets from 125+ actively-tracked datasets',
				'Distilled insights from SemiAnalysis proprietary models',
				'Monthly analyst calls for personalized insight',
			),
		),
		array(
			'title'      => 'AI Accelerator Industry Model',
			'slug'       => 'accelerator-model',
			'excerpt'    => 'Gauge historical and future accelerator production by company and type across the AI hardware ecosystem.',
			'tagline'    => 'Historical and forecast accelerator production',
			'featured'   => true,
			'cta'        => 'Contact Sales',
			'email'      => 'sales@semianalysis.com',
			'investors'  => 'Model accelerator supply/demand dynamics to validate investment theses across Nvidia, AMD, Google, and custom silicon.',
			'executives' => 'Inform capacity planning, partnership strategy, and product roadmap decisions with bottoms-up production forecasts.',
			'includes'   => array(
				'Historical and forecast accelerator production by company and type',
				'Distilled insights from proprietary SemiAnalysis datasets',
				'Integration with broader industry model ecosystem',
			),
		),
		array(
			'title'      => 'AI Cloud TCO Model',
			'slug'       => 'tco-model',
			'excerpt'    => 'Examine the ownership economics of AI Clouds that purchase accelerators and sell bare metal or cloud GPU compute.',
			'tagline'    => 'Ownership economics of AI Cloud infrastructure',
			'featured'   => true,
			'cta'        => 'Contact Sales',
			'email'      => 'sales@semianalysis.com',
			'investors'  => 'Evaluate neocloud and hyperscaler unit economics, capex intensity, and margin structures across GPU cloud providers.',
			'executives' => 'Optimize build-vs-buy decisions, pricing strategy, and infrastructure investments for AI cloud operations.',
			'includes'   => array(
				'Total cost of ownership analysis for AI cloud operators',
				'Bare metal vs. cloud GPU compute economics',
				'Cross-provider benchmarking capabilities',
			),
		),
		array(
			'title'    => 'AI Datacenter Industry Model',
			'slug'     => 'datacenter-model',
			'excerpt'  => 'Understand current and forecast datacenter critical IT power capacity for colocation and hyperscale datacenters.',
			'tagline'  => 'Critical IT power capacity forecasting',
			'featured' => false,
			'cta'      => 'Contact Sales',
			'email'    => 'sales@semianalysis.com',
			'includes' => array(
				'Current and forecast critical IT power capacity',
				'Colocation and hyperscale datacenter coverage',
				'AI accelerator deployment demand modeling',
			),
		),
		array(
			'title'    => 'Wafer Fab Model',
			'slug'     => 'wafer-fab-model',
			'excerpt'  => 'Bottoms-up wafer capacity and process node requirements driving semiconductor equipment sales.',
			'tagline'  => 'Semiconductor equipment sales forecasting',
			'featured' => false,
			'cta'      => 'Contact Sales',
			'email'    => 'sales@semianalysis.com',
			'includes' => array(
				'Bottoms-up wafer capacity modeling',
				'Process node requirements and equipment sales forecasts',
				'Detailed layer-by-layer flow for advanced logic',
			),
		),
		array(
			'title'    => 'AI Networking Model',
			'slug'     => 'ai-networking-model',
			'excerpt'  => 'Granular visibility into switches, transceivers, cables, and scale-up/out networks for AI infrastructure.',
			'tagline'  => 'Networking layer of AI infrastructure',
			'featured' => false,
			'cta'      => 'Contact Sales',
			'email'    => 'sales@semianalysis.com',
			'includes' => array(
				'Switches, transceivers, cables, AEC/DACs coverage',
				'Scale-up, scale-out, front-end, and out-of-band networks',
				'Vendor dynamics and scaling limit analysis',
			),
		),
	);

	foreach ( $products as $index => $product ) {
		$post_id = wp_insert_post(
			array(
				'post_type'    => 'sa_product',
				'post_title'   => $product['title'],
				'post_name'    => $product['slug'],
				'post_excerpt' => $product['excerpt'],
				'post_status'  => 'publish',
				'menu_order'   => $index,
			)
		);

		if ( $post_id && ! is_wp_error( $post_id ) ) {
			update_post_meta( $post_id, 'sa_tagline', $product['tagline'] );
			update_post_meta( $post_id, 'sa_featured', $product['featured'] ? '1' : '0' );
			update_post_meta( $post_id, 'sa_cta_label', $product['cta'] );
			update_post_meta( $post_id, 'sa_cta_email', $product['email'] );
			if ( ! empty( $product['investors'] ) ) {
				update_post_meta( $post_id, 'sa_investors', $product['investors'] );
			}
			if ( ! empty( $product['executives'] ) ) {
				update_post_meta( $post_id, 'sa_executives', $product['executives'] );
			}
			if ( ! empty( $product['includes'] ) ) {
				update_post_meta( $post_id, 'sa_includes', $product['includes'] );
			}
		}
	}

	// Create Models page.
	$models_page = wp_insert_post(
		array(
			'post_type'    => 'page',
			'post_title'   => 'Industry Models',
			'post_name'    => 'models',
			'post_status'  => 'publish',
			'post_content' => '',
		)
	);

	if ( $models_page && ! is_wp_error( $models_page ) ) {
		update_post_meta( $models_page, '_wp_page_template', 'page-models' );
	}

	// Create Home page and set as front page.
	$home_page = wp_insert_post(
		array(
			'post_type'    => 'page',
			'post_title'   => 'Home',
			'post_name'    => 'home',
			'post_status'  => 'publish',
			'post_content' => '',
		)
	);

	if ( $home_page && ! is_wp_error( $home_page ) ) {
		update_option( 'show_on_front', 'page' );
		update_option( 'page_on_front', $home_page );
	}

	update_option( 'sa_mvp_seeded', 1 );
}
add_action( 'after_switch_theme', 'sa_mvp_seed_products' );
