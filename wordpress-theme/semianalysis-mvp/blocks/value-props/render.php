<?php
/**
 * Value props block render.
 *
 * @package SemiAnalysis_MVP
 */

$eyebrow = $attributes['eyebrow'] ?? 'Why SemiAnalysis';
$title   = $attributes['title'] ?? 'Research-grade, not marketing-grade';

$items = array(
	array(
		'title'  => 'Proprietary Models',
		'body'   => 'Bottoms-up industry models covering accelerators, datacenters, wafer fab, and AI networking.',
		'accent' => 'var(--sa-amber)',
	),
	array(
		'title'  => 'Actionable Data',
		'body'   => 'Thousands of curated data points distilled into clear insights for investment and strategic decisions.',
		'accent' => 'var(--sa-cobalt)',
	),
	array(
		'title'  => 'Trusted by Industry',
		'body'   => 'Read by the C-suite at major semiconductor and AI companies, investment funds, and infrastructure teams.',
		'accent' => 'var(--sa-mint)',
	),
);
?>
<section class="sa-section">
	<p class="sa-hero__eyebrow"><?php echo esc_html( $eyebrow ); ?></p>
	<h2 class="sa-section__title"><?php echo esc_html( $title ); ?></h2>
	<div class="sa-card-grid sa-card-grid--3 sa-value-props">
		<?php foreach ( $items as $item ) : ?>
			<div class="sa-value-card sa-animate-in">
				<div class="sa-value-card__accent" style="background:<?php echo esc_attr( $item['accent'] ); ?>"></div>
				<h3 class="sa-value-card__title"><?php echo esc_html( $item['title'] ); ?></h3>
				<p class="sa-value-card__body"><?php echo esc_html( $item['body'] ); ?></p>
			</div>
		<?php endforeach; ?>
	</div>
</section>
