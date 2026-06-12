<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'SA_MVP_VERSION', '1.19.0' );
define( 'SA_MVP_DIR', get_template_directory() );
define( 'SA_MVP_URI', get_template_directory_uri() );

require_once SA_MVP_DIR . '/inc/site-config.php';
require_once SA_MVP_DIR . '/inc/models-data.php';
require_once SA_MVP_DIR . '/inc/hero-visual.php';
require_once SA_MVP_DIR . '/inc/substack.php';
require_once SA_MVP_DIR . '/inc/enqueue.php';
require_once SA_MVP_DIR . '/inc/register-cpt.php';
require_once SA_MVP_DIR . '/inc/register-blocks.php';
require_once SA_MVP_DIR . '/inc/contact-form.php';
require_once SA_MVP_DIR . '/inc/seed-content.php';
