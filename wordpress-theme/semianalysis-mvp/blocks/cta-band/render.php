<?php

$title           = $attributes['title'] ?? 'Ready to subscribe?';
$description     = $attributes['description'] ?? 'Get pricing, demos, and access to proprietary models — or start with ChipBook, our monthly industry tracker trusted by leading funds and semiconductor companies.';
$primary_label   = $attributes['primaryLabel'] ?? 'Contact Sales';
$primary_url     = $attributes['primaryUrl'] ?? sa_mvp_contact_sales_url();
$secondary_label = $attributes['secondaryLabel'] ?? 'Buy ChipBook';
$secondary_url   = $attributes['secondaryUrl'] ?? SA_MVP_CHIPBOOK_SALES;
$tertiary_label  = $attributes['tertiaryLabel'] ?? 'Browse Models';
$tertiary_url    = $attributes['tertiaryUrl'] ?? home_url( '/models/' );

if ( is_string( $tertiary_url ) && str_starts_with( $tertiary_url, '/' ) ) {
	$tertiary_url = home_url( $tertiary_url );
}
?>
<section id="sa-conversion-band" class="sa-section sa-cta-section sa-reveal">
	<div class="sa-cta-band sa-glow-border">
		<div class="sa-cta-band__glow" aria-hidden="true"></div>
		<div class="sa-cta-band__inner">
			<div class="sa-cta-band__content">
				<p class="sa-cta-band__eyebrow"><?php esc_html_e( 'Institutional access', 'semianalysis-mvp' ); ?></p>
				<?php if ( $title ) : ?>
					<h2 class="sa-cta-band__title"><?php echo esc_html( $title ); ?></h2>
				<?php endif; ?>
				<?php if ( $description ) : ?>
					<p class="sa-cta-band__desc"><?php echo esc_html( $description ); ?></p>
				<?php endif; ?>
			</div>
			<div class="sa-cta-band__actions">
				<?php if ( $primary_label ) : ?>
					<a class="sa-btn sa-btn--primary sa-btn-lift" href="<?php echo esc_url( $primary_url ); ?>">
						<?php echo esc_html( $primary_label ); ?>
					</a>
				<?php endif; ?>
				<?php if ( $secondary_label && $secondary_url ) : ?>
					<a class="sa-btn sa-btn--secondary sa-btn-lift" href="<?php echo esc_url( $secondary_url ); ?>">
						<?php echo esc_html( $secondary_label ); ?>
					</a>
				<?php endif; ?>
				<?php if ( $tertiary_label && $tertiary_url ) : ?>
					<a class="sa-btn sa-btn--secondary sa-btn-lift" href="<?php echo esc_url( $tertiary_url ); ?>">
						<?php echo esc_html( $tertiary_label ); ?>
					</a>
				<?php endif; ?>
			</div>
		</div>
	</div>
</section>
