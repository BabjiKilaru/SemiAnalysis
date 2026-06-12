<?php

$eyebrow         = $attributes['eyebrow'] ?? 'Independent Research';
$description     = $attributes['description'] ?? 'Institutional-grade models and research for investors, AI infrastructure teams, enterprise buyers, and researchers navigating the semiconductor and AI landscape.';
$legacy_desc     = 'Institutional-grade models and research for investors, AI infrastructure teams, enterprise buyers, and researchers.';
if ( $description === $legacy_desc ) {
	$description = 'Institutional-grade models and research for investors, AI infrastructure teams, enterprise buyers, and researchers navigating the semiconductor and AI landscape.';
}
$primary_label   = $attributes['primaryLabel'] ?? 'Explore Industry Models';
$primary_url     = $attributes['primaryUrl'] ?? home_url( '/models/' );
$secondary_label = $attributes['secondaryLabel'] ?? 'View ChipBook';
$secondary_url   = $attributes['secondaryUrl'] ?? home_url( '/products/chipbook/' );

$rotating_words = array(
	array( 'text' => 'semiconductors', 'class' => 'sa-hero__word--gradient' ),
	array( 'text' => 'datacenters', 'class' => 'sa-hero__word--cobalt' ),
	array( 'text' => 'AI infrastructure', 'class' => 'sa-hero__word--mint' ),
);

$stats = array(
	array( 'label' => 'Industry Models', 'value' => '14' ),
	array( 'label' => 'Tracked Datasets', 'value' => '125+' ),
	array( 'label' => 'Monthly ChipBook', 'value' => '50 pg' ),
	array( 'label' => 'Reader Audience', 'value' => '200K+' ),
);

?>
<section class="sa-hero-shell" aria-label="Hero">
	<div class="sa-hero-shell__body">
	<div class="sa-hero-shell__bg" aria-hidden="true">
		<div class="sa-hero-shell__orb sa-hero-shell__orb--amber"></div>
		<div class="sa-hero-shell__orb sa-hero-shell__orb--cobalt"></div>
		<div class="sa-hero-shell__orb sa-hero-shell__orb--mint"></div>
		<div class="sa-hero-shell__dots"></div>
		<div class="sa-hero-shell__scanline"></div>
		<div class="sa-hero-shell__fade-left"></div>
		<div class="sa-hero-shell__fade-bottom"></div>
		<?php sa_mvp_render_hero_visual( array( 'id' => 'sa-hero-visual' ) ); ?>
	</div>

	<div class="sa-hero-shell__content">
		<div class="sa-hero-shell__main sa-animate-in">
			<p class="sa-hero__eyebrow">
				<span class="sa-hero__pulse-dot" aria-hidden="true"></span>
				<?php echo esc_html( $eyebrow ); ?>
			</p>
			<h1 class="sa-hero__title sa-hero__title--large">
				Bridging
				<span class="sa-hero__rotator sa-hero__rotator--css" data-sa-word-rotator>
					<?php foreach ( $rotating_words as $word ) : ?>
						<span class="sa-hero__word <?php echo esc_attr( $word['class'] ); ?>" data-sa-word>
							<?php echo esc_html( $word['text'] ); ?>
						</span>
					<?php endforeach; ?>
				</span><br />
				<span class="sa-hero__muted">and </span><span class="sa-hero__accent">business</span>
			</h1>
			<p class="sa-hero__desc"><?php echo esc_html( $description ); ?></p>
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
				<a href="<?php echo esc_url( SA_MVP_NEWSLETTER_SUBSCRIBE ); ?>" target="_blank" rel="noopener noreferrer">
					<?php esc_html_e( 'Subscribe free', 'semianalysis-mvp' ); ?>
				</a>
				<?php esc_html_e( 'to the newsletter first.', 'semianalysis-mvp' ); ?>
			</p>
		</div>

		<dl class="sa-stats sa-stats--hero" data-sa-stats-count>
			<?php foreach ( $stats as $stat ) : ?>
				<div class="sa-stats__item">
					<dt class="sa-stats__label"><?php echo esc_html( $stat['label'] ); ?></dt>
					<dd class="sa-stats__value" data-sa-count-to="<?php echo esc_attr( $stat['value'] ); ?>">0</dd>
				</div>
			<?php endforeach; ?>
		</dl>
	</div>
	</div>

	<?php
	$terms = array(
		'CUDA', 'CoWoS', 'HBM3e', 'Blackwell', 'TPU v7', 'NVL72',
		'Datacenter', 'Wafer Fab', 'Trainium', 'ROCm', 'InfiniBand',
		'ClusterMAX', '3nm', 'AI Accelerator', 'Neocloud',
	);
	$items = array_merge( $terms, $terms );
	?>
	<div class="sa-ticker sa-ticker--hero" aria-hidden="true">
		<div class="sa-ticker__fade sa-ticker__fade--left"></div>
		<div class="sa-ticker__fade sa-ticker__fade--right"></div>
		<div class="sa-ticker__track">
			<?php foreach ( $items as $term ) : ?>
				<span class="sa-ticker__item">
					<?php echo esc_html( $term ); ?>
					<span class="sa-ticker__dot"></span>
				</span>
			<?php endforeach; ?>
		</div>
	</div>
</section>
