<?php
/**
 * SemiAnalysis MVP theme bootstrap.
 *
 * @package SemiAnalysis_MVP
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'SA_MVP_VERSION', '1.0.0' );
define( 'SA_MVP_DIR', get_template_directory() );
define( 'SA_MVP_URI', get_template_directory_uri() );

require_once SA_MVP_DIR . '/inc/enqueue.php';
require_once SA_MVP_DIR . '/inc/register-cpt.php';
require_once SA_MVP_DIR . '/inc/register-blocks.php';
require_once SA_MVP_DIR . '/inc/seed-content.php';
