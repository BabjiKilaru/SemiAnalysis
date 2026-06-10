<?php
/**
 * Funnel path block render.
 *
 * @package SemiAnalysis_MVP
 */

$title = $attributes['title'] ?? 'From free research to institutional access';

$steps = array(
	array(
		'step'    => '01',
		'title'   => 'Discover',
		'body'    => 'Read free research on Substack — high-signal analysis that builds credibility before you buy.',
		'primary' => array(
			'label' => 'Subscribe Free',
			'url'   => 'https://newsletter.semianalysis.com/subscribe',
			'class' => 'sa-btn--primary',
		),
	),
	array(
		'step'    => '02',
		'title'   => 'Explore',
		'body'    => 'Browse industry models or dive into ChipBook — our monthly institutional tracker.',
		'primary' => array(
			'label' => 'Industry Models',
			'url'   => '/models/',
			'class' => 'sa-btn--primary',
		),
		'secondary' => array(
			'label' => 'View ChipBook',
			'url'   => '/products/chipbook/',
			'class' => 'sa-btn--secondary',
		),
	),
	array(
		'step'    => '03',
		'title'   => 'Convert',
		'body'    => 'Contact sales for model subscriptions, demos, and institutional pricing.',
		'primary' => array(
			'label' => 'Contact Sales',
			'url'   => '#',
			'class' => 'sa-btn--primary',
		),
		'secondary' => array(
			'label' => 'Buy ChipBook',
			'url'   => 'mailto:ChipBookSales@SemiAnalysis.com',
			'class' => 'sa-btn--secondary',
		),
	),
);
?>
<section class="sa-section sa-section--elevated sa-funnel">
	<p class="sa-funnel__eyebrow">How it works</p>
	<h2 class="sa-funnel__title"><?php echo esc_html( $title ); ?></h2>

	<div class="sa-funnel__grid">
		<?php foreach ( $steps as $i => $step ) : ?>
			<article class="sa-funnel__step">
				<?php if ( $i < count( $steps ) - 1 ) : ?>
					<span class="sa-funnel__arrow" aria-hidden="true">→</span>
				<?php endif; ?>
				<span class="sa-funnel__num"><?php echo esc_html( $step['step'] ); ?></span>
				<h3 class="sa-funnel__step-title"><?php echo esc_html( $step['title'] ); ?></h3>
				<p class="sa-funnel__step-body"><?php echo esc_html( $step['body'] ); ?></p>
				<div class="sa-funnel__actions">
					<a class="sa-btn <?php echo esc_attr( $step['primary']['class'] ); ?> sa-btn--sm" href="<?php echo esc_url( $step['primary']['url'] ); ?>"
						<?php echo str_starts_with( $step['primary']['url'], 'http' ) ? ' target="_blank" rel="noopener noreferrer"' : ''; ?>>
						<?php echo esc_html( $step['primary']['label'] ); ?>
					</a>
					<?php if ( ! empty( $step['secondary'] ) ) : ?>
						<a class="sa-btn <?php echo esc_attr( $step['secondary']['class'] ); ?> sa-btn--sm" href="<?php echo esc_url( $step['secondary']['url'] ); ?>">
							<?php echo esc_html( $step['secondary']['label'] ); ?>
						</a>
					<?php endif; ?>
				</div>
			</article>
		<?php endforeach; ?>
	</div>
</section>
