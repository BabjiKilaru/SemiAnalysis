<?php
/**
 * Product single block — full sales landing layout.
 *
 * @package SemiAnalysis_MVP
 */

$post_id     = get_the_ID();
$tagline     = get_post_meta( $post_id, 'sa_tagline', true );
$cta_label   = get_post_meta( $post_id, 'sa_cta_label', true ) ?: 'Contact Sales';
$cta_email   = get_post_meta( $post_id, 'sa_cta_email', true ) ?: 'sales@semianalysis.com';
$investors   = get_post_meta( $post_id, 'sa_investors', true );
$executives  = get_post_meta( $post_id, 'sa_executives', true );
$includes    = get_post_meta( $post_id, 'sa_includes', true );
$includes    = is_array( $includes ) ? $includes : array();
?>
<section class="sa-product-hero">
	<div class="sa-product-hero__inner">
		<p class="sa-hero__eyebrow" style="color:var(--sa-cobalt);">Institutional Product</p>
		<h1 class="sa-hero__title"><?php the_title(); ?></h1>
		<?php if ( $tagline ) : ?>
			<p class="sa-product-hero__tagline"><?php echo esc_html( $tagline ); ?></p>
		<?php endif; ?>
		<p class="sa-hero__desc"><?php echo esc_html( get_the_excerpt() ); ?></p>
		<div class="sa-hero__actions">
			<a class="sa-btn sa-btn--primary" href="<?php echo esc_url( 'mailto:' . $cta_email ); ?>">
				<?php echo esc_html( $cta_label ); ?>
			</a>
			<a class="sa-btn sa-btn--secondary" href="<?php echo esc_url( home_url( '/models/' ) ); ?>">
				All Products
			</a>
		</div>
	</div>
</section>

<?php if ( $investors || $executives ) : ?>
<section class="sa-section">
	<h2 class="sa-section__title">Built for your team</h2>
	<div class="sa-card-grid sa-card-grid--2">
		<?php if ( $investors ) : ?>
		<div class="sa-audience-card">
			<p class="sa-audience-card__label sa-audience-card__label--amber">For Investors</p>
			<p class="sa-audience-card__body"><?php echo esc_html( $investors ); ?></p>
		</div>
		<?php endif; ?>
		<?php if ( $executives ) : ?>
		<div class="sa-audience-card">
			<p class="sa-audience-card__label sa-audience-card__label--mint">For Executives</p>
			<p class="sa-audience-card__body"><?php echo esc_html( $executives ); ?></p>
		</div>
		<?php endif; ?>
	</div>
</section>
<?php endif; ?>

<?php if ( ! empty( $includes ) ) : ?>
<section class="sa-section sa-section--elevated">
	<div class="sa-section__inner">
		<h2 class="sa-section__title">What&apos;s included</h2>
		<ul class="sa-includes-list">
			<?php foreach ( $includes as $item ) : ?>
				<li class="sa-includes-list__item">
					<span class="sa-includes-list__check" aria-hidden="true">✓</span>
					<?php echo esc_html( $item ); ?>
				</li>
			<?php endforeach; ?>
		</ul>
	</div>
</section>
<?php endif; ?>

<?php if ( get_the_content() ) : ?>
<section class="sa-section">
	<div class="sa-section__inner sa-prose">
		<?php the_content(); ?>
	</div>
</section>
<?php endif; ?>

<section class="sa-section">
	<div class="sa-cta-band">
		<h2 class="sa-cta-band__title">Get started with <?php the_title(); ?></h2>
		<p class="sa-hero__desc">
			Reach out to <?php echo esc_html( $cta_email ); ?> to learn about pricing and subscription options.
		</p>
		<div class="sa-hero__actions">
			<a class="sa-btn sa-btn--primary" href="<?php echo esc_url( 'mailto:' . $cta_email ); ?>">
				<?php echo esc_html( $cta_label ); ?>
			</a>
		</div>
	</div>
</section>
