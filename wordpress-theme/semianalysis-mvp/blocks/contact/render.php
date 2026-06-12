<?php

$inquiry_types = sa_mvp_contact_inquiry_types();

$status = isset( $_GET['contact'] ) ? sanitize_key( wp_unslash( $_GET['contact'] ) ) : '';

$info_cards = array(
	array(
		'title' => __( 'Sales & subscriptions', 'semianalysis-mvp' ),
		'body'  => __( 'Pricing, demos, and institutional access to industry models and ChipBook.', 'semianalysis-mvp' ),
		'email' => SA_MVP_CONTACT_EMAIL,
	),
	array(
		'title' => __( 'ChipBook', 'semianalysis-mvp' ),
		'body'  => __( 'Monthly AI and semiconductor tracker for investors and executives.', 'semianalysis-mvp' ),
		'email' => 'ChipBookSales@SemiAnalysis.com',
	),
);
?>
<section class="sa-contact-hero" aria-label="<?php esc_attr_e( 'Contact SemiAnalysis', 'semianalysis-mvp' ); ?>">
	<div class="sa-contact-hero__wash" aria-hidden="true"></div>
	<div class="sa-contact-hero__watermark" aria-hidden="true">
		<span><?php esc_html_e( 'Contact', 'semianalysis-mvp' ); ?></span>
	</div>

	<div class="sa-contact-hero__inner">
		<div class="sa-contact-hero__content">
			<p class="sa-contact-hero__badge sa-hero-reveal"><?php esc_html_e( 'Get in touch', 'semianalysis-mvp' ); ?></p>

			<h1 class="sa-contact-hero__title sa-hero-reveal sa-hero-reveal--delay-1">
				<?php esc_html_e( 'Talk with our ', 'semianalysis-mvp' ); ?>
				<span class="sa-text-gradient"><?php esc_html_e( 'research team', 'semianalysis-mvp' ); ?></span>
			</h1>

			<p class="sa-contact-hero__desc sa-hero-reveal sa-hero-reveal--delay-2">
				<?php esc_html_e( 'Questions about industry models, ChipBook, or institutional research? Send us a message and we will follow up within one business day.', 'semianalysis-mvp' ); ?>
			</p>
		</div>
	</div>
</section>

<section class="sa-contact-body" aria-label="<?php esc_attr_e( 'Contact form', 'semianalysis-mvp' ); ?>">
	<div class="sa-contact-body__inner">
		<aside class="sa-contact-info">
			<h2 class="sa-contact-info__title"><?php esc_html_e( 'How we can help', 'semianalysis-mvp' ); ?></h2>
			<p class="sa-contact-info__lead">
				<?php esc_html_e( 'Whether you need model subscriptions, ChipBook access, or a tailored engagement, our team routes every inquiry to the right specialist.', 'semianalysis-mvp' ); ?>
			</p>

			<div class="sa-contact-info__cards">
				<?php foreach ( $info_cards as $card ) : ?>
					<article class="sa-contact-info__card">
						<h3 class="sa-contact-info__card-title"><?php echo esc_html( $card['title'] ); ?></h3>
						<p class="sa-contact-info__card-body"><?php echo esc_html( $card['body'] ); ?></p>
						<a class="sa-contact-info__card-email" href="<?php echo esc_url( 'mailto:' . $card['email'] ); ?>"><?php echo esc_html( $card['email'] ); ?></a>
					</article>
				<?php endforeach; ?>
			</div>

			<ul class="sa-contact-info__notes">
				<li><?php esc_html_e( 'Response within one business day', 'semianalysis-mvp' ); ?></li>
				<li><?php esc_html_e( 'Institutional pricing and demos available', 'semianalysis-mvp' ); ?></li>
				<li><?php esc_html_e( 'No spam — your details stay confidential', 'semianalysis-mvp' ); ?></li>
			</ul>
		</aside>

		<div class="sa-contact-form-wrap">
			<?php if ( 'sent' === $status ) : ?>
				<div class="sa-contact-notice sa-contact-notice--success" role="status">
					<p><?php esc_html_e( 'Thank you — your message has been sent. We will be in touch shortly.', 'semianalysis-mvp' ); ?></p>
				</div>
			<?php elseif ( 'error' === $status ) : ?>
				<div class="sa-contact-notice sa-contact-notice--error" role="alert">
					<p><?php esc_html_e( 'Something went wrong. Please check the form and try again, or email us directly.', 'semianalysis-mvp' ); ?></p>
				</div>
			<?php endif; ?>

			<form class="sa-contact-form" novalidate>
				<?php wp_nonce_field( 'sa_contact_form', 'sa_contact_nonce' ); ?>

				<div class="sa-contact-form__honeypot" aria-hidden="true">
					<label for="sa_website"><?php esc_html_e( 'Website', 'semianalysis-mvp' ); ?></label>
					<input type="text" id="sa_website" name="sa_website" tabindex="-1" autocomplete="off" />
				</div>

				<div class="sa-contact-form__grid">
					<div class="sa-contact-form__field">
						<label class="sa-contact-form__label" for="sa_name">
							<?php esc_html_e( 'Name', 'semianalysis-mvp' ); ?>
							<span class="sa-contact-form__required" aria-hidden="true">*</span>
						</label>
						<input
							class="sa-contact-form__input"
							type="text"
							id="sa_name"
							name="sa_name"
							required
							autocomplete="name"
							placeholder="<?php esc_attr_e( 'Your full name', 'semianalysis-mvp' ); ?>"
						/>
					</div>

					<div class="sa-contact-form__field">
						<label class="sa-contact-form__label" for="sa_email">
							<?php esc_html_e( 'Email', 'semianalysis-mvp' ); ?>
							<span class="sa-contact-form__required" aria-hidden="true">*</span>
						</label>
						<input
							class="sa-contact-form__input"
							type="email"
							id="sa_email"
							name="sa_email"
							required
							autocomplete="email"
							placeholder="<?php esc_attr_e( 'you@company.com', 'semianalysis-mvp' ); ?>"
						/>
					</div>
				</div>

				<div class="sa-contact-form__field">
					<label class="sa-contact-form__label" for="sa_company"><?php esc_html_e( 'Company', 'semianalysis-mvp' ); ?></label>
					<input
						class="sa-contact-form__input"
						type="text"
						id="sa_company"
						name="sa_company"
						autocomplete="organization"
						placeholder="<?php esc_attr_e( 'Organization (optional)', 'semianalysis-mvp' ); ?>"
					/>
				</div>

				<div class="sa-contact-form__field">
					<label class="sa-contact-form__label" for="sa_inquiry">
						<?php esc_html_e( 'Inquiry type', 'semianalysis-mvp' ); ?>
						<span class="sa-contact-form__required" aria-hidden="true">*</span>
					</label>
					<div class="sa-contact-form__select-wrap">
						<select class="sa-contact-form__select" id="sa_inquiry" name="sa_inquiry" required>
							<?php foreach ( $inquiry_types as $slug => $label ) : ?>
								<option value="<?php echo esc_attr( $slug ); ?>"><?php echo esc_html( $label ); ?></option>
							<?php endforeach; ?>
						</select>
					</div>
				</div>

				<div class="sa-contact-form__field">
					<label class="sa-contact-form__label" for="sa_message">
						<?php esc_html_e( 'Message', 'semianalysis-mvp' ); ?>
						<span class="sa-contact-form__required" aria-hidden="true">*</span>
					</label>
					<textarea
						class="sa-contact-form__textarea"
						id="sa_message"
						name="sa_message"
						required
						rows="6"
						placeholder="<?php esc_attr_e( 'Tell us what you are looking for — models, ChipBook, pricing, or a custom engagement.', 'semianalysis-mvp' ); ?>"
					></textarea>
				</div>

				<div class="sa-contact-form__actions">
					<button class="sa-btn sa-btn--primary sa-btn-lift sa-contact-form__submit" type="button">
						<?php esc_html_e( 'Send message', 'semianalysis-mvp' ); ?>
					</button>
					<p class="sa-contact-form__fine-print">
						<?php esc_html_e( 'Prefer email?', 'semianalysis-mvp' ); ?>
						<a href="<?php echo esc_url( 'mailto:' . SA_MVP_CONTACT_EMAIL ); ?>"><?php echo esc_html( SA_MVP_CONTACT_EMAIL ); ?></a>
					</p>
				</div>
			</form>
		</div>
	</div>
</section>
