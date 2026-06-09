<?php
/**
 * Hero block render.
 *
 * @package SemiAnalysis_MVP
 */

$eyebrow        = $attributes['eyebrow'] ?? 'Independent Research';
$title          = $attributes['title'] ?? 'Bridging semiconductors and business';
$accent_word    = $attributes['accentWord'] ?? ' and business';
$description    = $attributes['description'] ?? '';
$primary_label  = $attributes['primaryLabel'] ?? 'Explore Industry Models';
$primary_url    = $attributes['primaryUrl'] ?? '/models/';
$secondary_label = $attributes['secondaryLabel'] ?? 'View ChipBook';
$secondary_url  = $attributes['secondaryUrl'] ?? '/products/chipbook/';

$title_main = str_replace( $accent_word, '', $title );
?>
<section class="sa-hero">
	<div class="sa-hero__orb" style="left:-8rem;top:5rem;width:24rem;height:24rem;background:color-mix(in srgb, var(--sa-amber) 10%, transparent);" aria-hidden="true"></div>
	<div class="sa-hero__orb" style="right:-6rem;top:10rem;width:20rem;height:20rem;background:color-mix(in srgb, var(--sa-cobalt) 10%, transparent);animation-delay:-4s;" aria-hidden="true"></div>
	<div class="sa-hero__glow" aria-hidden="true"></div>
	<div class="sa-hero__inner sa-animate-in">
		<p class="sa-hero__eyebrow"><?php echo esc_html( $eyebrow ); ?></p>
		<h1 class="sa-hero__title">
			<?php echo esc_html( $title_main ); ?>
			<span class="sa-hero__accent"><?php echo esc_html( $accent_word ); ?></span>
		</h1>
		<?php if ( $description ) : ?>
			<p class="sa-hero__desc"><?php echo esc_html( $description ); ?></p>
		<?php endif; ?>
		<div class="sa-hero__actions">
			<a class="sa-btn sa-btn--primary" href="<?php echo esc_url( $primary_url ); ?>">
				<?php echo esc_html( $primary_label ); ?>
			</a>
			<a class="sa-btn sa-btn--secondary" href="<?php echo esc_url( $secondary_url ); ?>">
				<?php echo esc_html( $secondary_label ); ?>
			</a>
		</div>
		<p class="sa-hero__hint">
			<?php esc_html_e( 'New here?', 'semianalysis-mvp' ); ?>
			<a href="https://newsletter.semianalysis.com/subscribe" target="_blank" rel="noopener noreferrer">
				<?php esc_html_e( 'Subscribe free', 'semianalysis-mvp' ); ?>
			</a>
			<?php esc_html_e( 'to the newsletter first.', 'semianalysis-mvp' ); ?>
		</p>
	</div>
</section>
