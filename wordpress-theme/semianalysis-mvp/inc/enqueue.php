<?php
/**
 * Enqueue theme assets.
 *
 * @package SemiAnalysis_MVP
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue Google Font and theme stylesheet.
 */
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

	wp_enqueue_style(
		'sa-mvp-custom',
		SA_MVP_URI . '/assets/css/theme.css',
		array( 'sa-mvp-theme' ),
		SA_MVP_VERSION
	);

	wp_enqueue_script(
		'sa-mvp-theme',
		SA_MVP_URI . '/assets/js/theme.js',
		array(),
		SA_MVP_VERSION,
		true
	);
}
add_action( 'wp_enqueue_scripts', 'sa_mvp_enqueue_assets' );

/**
 * Editor styles for block editor parity.
 */
function sa_mvp_editor_assets() {
	add_editor_style( 'assets/css/theme.css' );
}
add_action( 'after_setup_theme', 'sa_mvp_editor_assets' );

/**
 * Theme supports.
 */
function sa_mvp_setup() {
	add_theme_support( 'wp-block-styles' );
	add_theme_support( 'editor-styles' );
	add_theme_support( 'responsive-embeds' );
}
add_action( 'after_setup_theme', 'sa_mvp_setup' );

/**
 * Add theme favicon.
 */
function sa_mvp_site_icon() {
	$icon_url = SA_MVP_URI . '/assets/images/site-icon.png';
	echo '<link rel="icon" href="' . esc_url( $icon_url ) . '" sizes="any" />' . "\n";
	echo '<link rel="apple-touch-icon" href="' . esc_url( $icon_url ) . '" />' . "\n";
}
add_action( 'wp_head', 'sa_mvp_site_icon', 1 );
