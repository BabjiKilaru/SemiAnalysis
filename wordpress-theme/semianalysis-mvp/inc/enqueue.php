<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function sa_mvp_enqueue_assets() {
	wp_enqueue_style(
		'sa-mvp-outfit',
		'https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap',
		array(),
		null
	);

	wp_enqueue_style(
		'sa-mvp-theme',
		get_stylesheet_uri(),
		array( 'sa-mvp-outfit' ),
		SA_MVP_VERSION
	);

	$js_path  = SA_MVP_DIR . '/assets/js/theme.js';
	$css_path = SA_MVP_DIR . '/assets/css/theme.css';
	$js_ver   = file_exists( $js_path ) ? (string) filemtime( $js_path ) : SA_MVP_VERSION;
	$css_ver  = file_exists( $css_path ) ? (string) filemtime( $css_path ) : SA_MVP_VERSION;

	wp_enqueue_style(
		'sa-mvp-custom',
		SA_MVP_URI . '/assets/css/theme.css',
		array( 'sa-mvp-theme' ),
		$css_ver
	);

	wp_enqueue_script(
		'sa-mvp-theme',
		SA_MVP_URI . '/assets/js/theme.js',
		array(),
		$js_ver,
		array(
			'in_footer' => true,
			'strategy'  => 'defer',
		)
	);
}
add_action( 'wp_enqueue_scripts', 'sa_mvp_enqueue_assets' );

function sa_mvp_editor_assets() {
	add_editor_style( 'assets/css/theme.css' );
}
add_action( 'after_setup_theme', 'sa_mvp_editor_assets' );

function sa_mvp_setup() {
	add_theme_support( 'wp-block-styles' );
	add_theme_support( 'editor-styles' );
	add_theme_support( 'responsive-embeds' );
}
add_action( 'after_setup_theme', 'sa_mvp_setup' );

function sa_mvp_site_icon() {
	$icon_url = SA_MVP_URI . '/assets/images/site-icon.png';
	echo '<link rel="icon" href="' . esc_url( $icon_url ) . '" sizes="any" />' . "\n";
	echo '<link rel="apple-touch-icon" href="' . esc_url( $icon_url ) . '" />' . "\n";
}
add_action( 'wp_head', 'sa_mvp_site_icon', 1 );
