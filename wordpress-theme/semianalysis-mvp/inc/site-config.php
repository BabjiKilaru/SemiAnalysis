<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'SA_MVP_LOGIN_URL', 'https://semianalysis.com/wp-json/passport/v1/oauth/authlogin?signup_redirect_uri=https%3A%2F%2Fsemianalysis.com%2Fverify-your-email%2F' );
define( 'SA_MVP_NEWSLETTER_SUBSCRIBE', 'https://newsletter.semianalysis.com/subscribe' );
define( 'SA_MVP_NEWSLETTER_ARCHIVE', 'https://newsletter.semianalysis.com/archive' );
define( 'SA_MVP_NEWSLETTER_URL', 'https://newsletter.semianalysis.com' );
define( 'SA_MVP_CHIPBOOK_SAMPLE', 'https://semianalysis.com/wp-content/uploads/2026/02/Sample-Chipbook.pdf' );
define( 'SA_MVP_EVENTS_URL', 'https://semianalysis.com/semianalysis-events/' );
define( 'SA_MVP_CAREERS_URL', 'https://semianalysis.com/semianalysis-careers/' );
define( 'SA_MVP_CONTACT_EMAIL', 'sales@semianalysis.com' );

function sa_mvp_contact_sales_url() {
	return home_url( '/contact/' );
}
define( 'SA_MVP_CHIPBOOK_SALES', 'mailto:ChipBookSales@SemiAnalysis.com' );
define( 'SA_MVP_SUBSTACK_FEED', 'https://newsletter.semianalysis.com/feed' );
define( 'SA_MVP_MODELS_RESEARCH_URL', 'https://semianalysis.com/models-research/' );
