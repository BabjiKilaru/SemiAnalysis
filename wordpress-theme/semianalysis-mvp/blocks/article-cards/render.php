<?php
/**
 * Article cards block render.
 *
 * @package SemiAnalysis_MVP
 */

$eyebrow     = $attributes['eyebrow'] ?? 'Free Research';
$title       = $attributes['title'] ?? '';
$description = $attributes['description'] ?? '';
$articles    = $attributes['articles'] ?? array();
?>
<section class="sa-section sa-section--elevated">
	<p class="sa-hero__eyebrow"><?php echo esc_html( $eyebrow ); ?></p>
	<?php if ( $title ) : ?>
		<h2 class="sa-hero__title" style="font-size:2.25rem;margin-top:0.5rem;"><?php echo esc_html( $title ); ?></h2>
	<?php endif; ?>
	<?php if ( $description ) : ?>
		<p class="sa-hero__desc"><?php echo esc_html( $description ); ?></p>
	<?php endif; ?>

	<div class="sa-card-grid sa-card-grid--2" style="grid-template-columns:repeat(auto-fill,minmax(240px,1fr));">
		<?php foreach ( $articles as $article ) : ?>
			<a
				class="sa-article-card"
				href="<?php echo esc_url( $article['url'] ?? '#' ); ?>"
				target="_blank"
				rel="noopener noreferrer"
			>
				<span class="sa-article-card__label">Free Research</span>
				<h3 class="sa-article-card__title"><?php echo esc_html( $article['title'] ?? '' ); ?></h3>
				<p class="sa-article-card__excerpt"><?php echo esc_html( $article['excerpt'] ?? '' ); ?></p>
				<span style="margin-top:1rem;font-size:0.75rem;color:var(--sa-metal);">
					<?php echo esc_html( $article['date'] ?? '' ); ?> · Read on Substack →
				</span>
			</a>
		<?php endforeach; ?>
	</div>
</section>
