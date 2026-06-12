<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function sa_mvp_register_product_cpt() {
	register_post_type(
		'sa_product',
		array(
			'labels'       => array(
				'name'          => __( 'Products', 'semianalysis-mvp' ),
				'singular_name' => __( 'Product', 'semianalysis-mvp' ),
				'add_new_item'  => __( 'Add Product', 'semianalysis-mvp' ),
			),
			'public'       => true,
			'has_archive'  => false,
			'show_in_rest' => true,
			'menu_icon'    => 'dashicons-chart-area',
			'supports'     => array( 'title', 'editor', 'excerpt', 'thumbnail', 'custom-fields', 'page-attributes' ),
			'rewrite'      => array( 'slug' => 'products' ),
		)
	);
}
add_action( 'init', 'sa_mvp_register_product_cpt' );

function sa_mvp_register_product_meta() {
	$fields = array(
		'sa_tagline'    => 'string',
		'sa_cta_label'  => 'string',
		'sa_cta_email'  => 'string',
		'sa_featured'   => 'boolean',
		'sa_investors'  => 'string',
		'sa_executives' => 'string',
		'sa_includes'   => 'array',
	);

	foreach ( $fields as $key => $type ) {
		register_post_meta(
			'sa_product',
			$key,
			array(
				'show_in_rest' => true,
				'single'       => true,
				'type'         => $type,
				'auth_callback' => function () {
					return current_user_can( 'edit_posts' );
				},
			)
		);
	}
}
add_action( 'init', 'sa_mvp_register_product_meta' );
