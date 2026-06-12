<?php

$chipbook = get_page_by_path( 'chipbook', OBJECT, 'sa_product' );
if ( ! $chipbook ) {
	return;
}

$tagline   = get_post_meta( $chipbook->ID, 'sa_tagline', true );
$includes  = get_post_meta( $chipbook->ID, 'sa_includes', true );
$investors = get_post_meta( $chipbook->ID, 'sa_investors', true );
$executives = get_post_meta( $chipbook->ID, 'sa_executives', true );
$cta_label = get_post_meta( $chipbook->ID, 'sa_cta_label', true ) ?: 'Buy ChipBook';

if ( ! is_array( $includes ) ) {
	$includes = array();
}

$metrics = array(
	array( 'value' => '35–50 pg', 'label' => 'Monthly deliverable' ),
	array( 'value' => '125+', 'label' => 'Active datasets' ),
	array( 'value' => 'Monthly', 'label' => 'Analyst calls' ),
);
?>
<section class="sa-section sa-section--elevated sa-chipbook-feature">
	<div class="sa-chipbook-feature__grid sa-reveal--stagger">
		<div class="sa-chipbook-mockup" aria-hidden="true">
			<div class="sa-chipbook-mockup__glow"></div>
			<div class="sa-chipbook-mockup__cover">
				<div class="sa-chipbook-mockup__shine" aria-hidden="true"></div>
				<div class="sa-chipbook-mockup__inner">
					<div class="sa-chipbook-mockup__header">
						<span class="sa-chipbook-mockup__badge sa-shimmer">May 2026</span>
						<span class="sa-chipbook-mockup__volume">Vol. 24</span>
					</div>
					<p class="sa-chipbook-mockup__brand">SemiAnalysis</p>
					<h3 class="sa-chipbook-mockup__title">Chip<span>Book</span></h3>
					<p class="sa-chipbook-mockup__sub">AI &amp; semiconductor industry tracker</p>
					<div class="sa-chipbook-mockup__chart-block">
						<div class="sa-chipbook-mockup__chart">
							<?php foreach ( array( 40, 65, 48, 80, 55, 72, 90, 58 ) as $h ) : ?>
								<span style="height:<?php echo (int) $h; ?>%"></span>
							<?php endforeach; ?>
						</div>
						<p class="sa-chipbook-mockup__chart-caption">Accelerator shipments · Foundry mix · Power demand</p>
					</div>
				</div>
			</div>
		</div>

		<div class="sa-chipbook-feature__content">
			<p class="sa-hero__eyebrow">Featured Product</p>
			<h2 class="sa-chipbook-feature__title">ChipBook</h2>
			<?php if ( $tagline ) : ?>
				<p class="sa-chipbook-feature__tagline"><?php echo esc_html( $tagline ); ?></p>
			<?php endif; ?>
			<p class="sa-chipbook-feature__desc"><?php echo esc_html( $chipbook->post_excerpt ); ?></p>

			<div class="sa-chipbook-metrics">
				<?php foreach ( $metrics as $m ) : ?>
					<div class="sa-chipbook-metrics__item">
						<p class="sa-chipbook-metrics__value"><?php echo esc_html( $m['value'] ); ?></p>
						<p class="sa-chipbook-metrics__label"><?php echo esc_html( $m['label'] ); ?></p>
					</div>
				<?php endforeach; ?>
			</div>

			<?php if ( $includes ) : ?>
				<ul class="sa-includes-list">
					<?php foreach ( $includes as $item ) : ?>
						<li class="sa-includes-list__item">
							<span class="sa-includes-list__check" aria-hidden="true">✓</span>
							<?php echo esc_html( $item ); ?>
						</li>
					<?php endforeach; ?>
				</ul>
			<?php endif; ?>

			<?php if ( $investors || $executives ) : ?>
				<div class="sa-chipbook-audience">
					<?php if ( $investors ) : ?>
						<div class="sa-audience-card">
							<p class="sa-audience-card__label sa-audience-card__label--amber">For investors</p>
							<p class="sa-audience-card__body"><?php echo esc_html( $investors ); ?></p>
						</div>
					<?php endif; ?>
					<?php if ( $executives ) : ?>
						<div class="sa-audience-card">
							<p class="sa-audience-card__label sa-audience-card__label--mint">For executives</p>
							<p class="sa-audience-card__body"><?php echo esc_html( $executives ); ?></p>
						</div>
					<?php endif; ?>
				</div>
			<?php endif; ?>

			<div class="sa-hero__actions sa-chipbook-feature__actions">
				<a class="sa-btn sa-btn--primary" href="<?php echo esc_url( SA_MVP_CHIPBOOK_SALES ); ?>"><?php echo esc_html( $cta_label ); ?></a>
				<a class="sa-btn sa-btn--secondary" href="<?php echo esc_url( SA_MVP_CHIPBOOK_SAMPLE ); ?>" target="_blank" rel="noopener noreferrer">Download Sample</a>
				<a class="sa-model-card__link" style="margin-left:0.5rem;" href="<?php echo esc_url( get_permalink( $chipbook ) ); ?>">See full product details →</a>
			</div>
		</div>
	</div>
</section>
