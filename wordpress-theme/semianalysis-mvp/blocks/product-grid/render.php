<?php
/**
 * Product grid block render.
 *
 * @package SemiAnalysis_MVP
 */

$featured_only = ! empty( $attributes['featuredOnly'] );
$eyebrow       = $attributes['eyebrow'] ?? '';
$title         = $attributes['title'] ?? '';
$description   = $attributes['description'] ?? '';

$args = array(
	'post_type'      => 'sa_product',
	'posts_per_page' => -1,
	'orderby'        => 'menu_order',
	'order'          => 'ASC',
);

if ( $featured_only ) {
	$args['meta_query'] = array(
		array(
			'key'   => 'sa_featured',
			'value' => '1',
		),
	);
}

$query = new WP_Query( $args );
?>
<section class="sa-section">
	<?php if ( $eyebrow ) : ?>
		<p class="sa-hero__eyebrow"><?php echo esc_html( $eyebrow ); ?></p>
	<?php endif; ?>
	<?php if ( $title ) : ?>
		<h2 class="sa-hero__title" style="font-size:2.25rem;margin-top:0.5rem;"><?php echo esc_html( $title ); ?></h2>
	<?php endif; ?>
	<?php if ( $description ) : ?>
		<p class="sa-hero__desc"><?php echo esc_html( $description ); ?></p>
	<?php endif; ?>

	<div class="sa-card-grid sa-card-grid--3">
		<?php if ( $query->have_posts() ) : ?>
			<?php while ( $query->have_posts() ) : $query->the_post(); ?>
				<?php
				$tagline  = get_post_meta( get_the_ID(), 'sa_tagline', true );
				$featured = get_post_meta( get_the_ID(), 'sa_featured', true );
				$card_class = $featured ? 'sa-product-card sa-product-card--featured' : 'sa-product-card';
				?>
				<article class="<?php echo esc_attr( $card_class ); ?>">
					<?php if ( $featured ) : ?>
						<span class="sa-product-card__badge">Featured</span>
					<?php endif; ?>
					<h3><?php the_title(); ?></h3>
					<?php if ( $tagline ) : ?>
						<p class="sa-product-card__tagline"><?php echo esc_html( $tagline ); ?></p>
					<?php endif; ?>
					<p class="sa-product-card__desc"><?php echo esc_html( get_the_excerpt() ); ?></p>
					<a class="sa-product-card__link" href="<?php the_permalink(); ?>">Learn more →</a>
				</article>
			<?php endwhile; ?>
			<?php wp_reset_postdata(); ?>
		<?php else : ?>
			<p class="sa-hero__desc">Add products under Products in the WordPress admin.</p>
		<?php endif; ?>
	</div>
</section>
