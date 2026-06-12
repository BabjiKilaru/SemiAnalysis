<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function sa_mvp_contact_inquiry_types() {
	return array(
		'models'   => __( 'Industry Models', 'semianalysis-mvp' ),
		'chipbook' => __( 'ChipBook', 'semianalysis-mvp' ),
		'general'  => __( 'General inquiry', 'semianalysis-mvp' ),
		'partners' => __( 'Partnership', 'semianalysis-mvp' ),
	);
}

function sa_mvp_handle_contact_form() {
	if ( 'POST' !== ( $_SERVER['REQUEST_METHOD'] ?? '' ) ) {
		return;
	}

	if ( ! is_page( 'contact' ) ) {
		return;
	}

	$redirect = get_permalink();

	if ( ! isset( $_POST['sa_contact_nonce'] ) || ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['sa_contact_nonce'] ) ), 'sa_contact_form' ) ) {
		wp_safe_redirect( add_query_arg( 'contact', 'error', $redirect ) );
		exit;
	}

	if ( ! empty( $_POST['sa_website'] ) ) {
		wp_safe_redirect( add_query_arg( 'contact', 'sent', $redirect ) );
		exit;
	}

	$name    = isset( $_POST['sa_name'] ) ? sanitize_text_field( wp_unslash( $_POST['sa_name'] ) ) : '';
	$email   = isset( $_POST['sa_email'] ) ? sanitize_email( wp_unslash( $_POST['sa_email'] ) ) : '';
	$company = isset( $_POST['sa_company'] ) ? sanitize_text_field( wp_unslash( $_POST['sa_company'] ) ) : '';
	$type    = isset( $_POST['sa_inquiry'] ) ? sanitize_key( wp_unslash( $_POST['sa_inquiry'] ) ) : '';
	$message = isset( $_POST['sa_message'] ) ? sanitize_textarea_field( wp_unslash( $_POST['sa_message'] ) ) : '';

	$inquiry_types = sa_mvp_contact_inquiry_types();

	if ( '' === $name || '' === $email || '' === $message || ! is_email( $email ) || ! isset( $inquiry_types[ $type ] ) ) {
		wp_safe_redirect( add_query_arg( 'contact', 'error', $redirect ) );
		exit;
	}

	$inquiry_label = $inquiry_types[ $type ];
	$subject       = sprintf(
		/* translators: 1: inquiry type, 2: sender name */
		__( '[SemiAnalysis Contact] %1$s — %2$s', 'semianalysis-mvp' ),
		$inquiry_label,
		$name
	);

	$body_lines = array(
		__( 'New contact form submission', 'semianalysis-mvp' ),
		'',
		sprintf( '%s: %s', __( 'Name', 'semianalysis-mvp' ), $name ),
		sprintf( '%s: %s', __( 'Email', 'semianalysis-mvp' ), $email ),
		sprintf( '%s: %s', __( 'Company', 'semianalysis-mvp' ), $company ? $company : __( 'Not provided', 'semianalysis-mvp' ) ),
		sprintf( '%s: %s', __( 'Inquiry type', 'semianalysis-mvp' ), $inquiry_label ),
		'',
		__( 'Message', 'semianalysis-mvp' ) . ':',
		$message,
	);

	$headers = array(
		'Content-Type: text/plain; charset=UTF-8',
		sprintf( 'Reply-To: %s <%s>', $name, $email ),
	);

	$sent = wp_mail( SA_MVP_CONTACT_EMAIL, $subject, implode( "\n", $body_lines ), $headers );

	wp_safe_redirect( add_query_arg( 'contact', $sent ? 'sent' : 'error', $redirect ) );
	exit;
}
add_action( 'template_redirect', 'sa_mvp_handle_contact_form', 5 );
