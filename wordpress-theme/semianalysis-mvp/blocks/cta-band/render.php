<?php
/**
 * CTA band block render.
 *
 * @package SemiAnalysis_MVP
 */

$title           = $attributes['title'] ?? '';
$description     = $attributes['description'] ?? '';
$primary_label   = $attributes['primaryLabel'] ?? '';
$primary_url     = $attributes['primaryUrl'] ?? '#';
$secondary_label = $attributes['secondaryLabel'] ?? '';
$secondary_url   = $attributes['secondaryUrl'] ?? '';
$tertiary_label  = $attributes['tertiaryLabel'] ?? '';
$tertiary_url    = $attributes['tertiaryUrl'] ?? '';
?>
<section class="sa-section">
	<div class="sa-cta-band">
		<?php if ( $title ) : ?>
			<p class="sa-hero__eyebrow"><?php esc_html_e( 'Institutional access', 'semianalysis-mvp' ); ?></p>
			<h2 style="font-size:1.875rem;font-weight:700;margin-top:0.5rem;"><?php echo esc_html( $title ); ?></h2>
		<?php endif; ?>
		<?php if ( $description ) : ?>
			<p class="sa-hero__desc" style="max-width:36rem;"><?php echo esc_html( $description ); ?></p>
		<?php endif; ?>
		<div class="sa-hero__actions">
			<?php if ( $primary_label ) : ?>
				<a class="sa-btn sa-btn--primary" href="<?php echo esc_url( $primary_url ); ?>">
					<?php echo esc_html( $primary_label ); ?>
				</a>
			<?php endif; ?>
			<?php if ( $secondary_label && $secondary_url ) : ?>
				<a class="sa-btn sa-btn--secondary" href="<?php echo esc_url( $secondary_url ); ?>">
					<?php echo esc_html( $secondary_label ); ?>
				</a>
			<?php endif; ?>
			<?php if ( $tertiary_label && $tertiary_url ) : ?>
				<a class="sa-btn sa-btn--secondary" href="<?php echo esc_url( $tertiary_url ); ?>">
					<?php echo esc_html( $tertiary_label ); ?>
				</a>
			<?php endif; ?>
		</div>
	</div>
</section>
