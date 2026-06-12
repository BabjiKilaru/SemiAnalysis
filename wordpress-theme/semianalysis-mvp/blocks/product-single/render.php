<?php

$post_id      = get_the_ID();
$post_slug    = get_post_field( 'post_name', $post_id );
$is_chipbook  = 'chipbook' === $post_slug;
$tagline      = get_post_meta( $post_id, 'sa_tagline', true );
$cta_label    = get_post_meta( $post_id, 'sa_cta_label', true ) ?: 'Contact Sales';
$cta_email    = get_post_meta( $post_id, 'sa_cta_email', true ) ?: 'sales@semianalysis.com';
$investors    = get_post_meta( $post_id, 'sa_investors', true );
$executives   = get_post_meta( $post_id, 'sa_executives', true );
$includes     = get_post_meta( $post_id, 'sa_includes', true );
$includes     = is_array( $includes ) ? $includes : array();
$cta_href     = ( 'Contact Sales' === $cta_label ) ? sa_mvp_contact_sales_url() : 'mailto:' . $cta_email;

$chipbook_hero_stats = array(
	array( 'value' => '35–50', 'label' => 'Pages', 'accent' => 'amber' ),
	array( 'value' => '125+', 'label' => 'Datasets', 'accent' => 'cobalt' ),
	array( 'value' => 'Monthly', 'label' => 'Cadence', 'accent' => 'mint' ),
	array( 'value' => 'Included', 'label' => 'Calls', 'accent' => 'coral' ),
);

$chipbook_core_trackers = array(
	'Memory Trackers',
	'Smartphone & PC imports (USD & Units)',
	'WFE imports/exports from key geographies',
	'Auto exports from key geographies',
	'Bare wafer and Boule Imports/Exports',
	'PCB sales and Imports/Exports',
);

$chipbook_timely_datasets = array(
	'China, Taiwan & Korea WFE imports by type (Litho, Etch & Deposition)',
	'Auto exports by type (ICE, Hybrid, PHEV & EV)',
	'Taiwan CoWoS supplier revenue Index',
	'Nvidia server component supplier index',
	'Semiconductor inspection equipment imports/exports from key geographies',
);

$chipbook_benefits = array(
	array(
		'title'  => 'Proprietary model insights',
		'body'   => 'Distilled datasets from the AI Accelerator Model, Datacenter Model, and broader SemiAnalysis offering.',
		'accent' => 'amber',
	),
	array(
		'title'  => 'Monthly analyst calls',
		'body'   => 'Personalized insight sessions with ChipBook analysts included with every subscription.',
		'accent' => 'cobalt',
	),
	array(
		'title'  => 'Full archive access',
		'body'   => '35–50 page monthly deliverable with charts, equity references, and all previous editions.',
		'accent' => 'mint',
	),
);
?>

<?php if ( $is_chipbook ) : ?>
<div class="sa-chipbook-page">
	<div class="sa-chipbook-page__bg" aria-hidden="true">
		<div class="sa-chipbook-page__layers" data-sa-chipbook-layers>
			<div class="sa-chipbook-page__wash"></div>
			<div class="sa-chipbook-page__gradient"></div>
			<div class="sa-chipbook-page__dots"></div>
			<div class="sa-chipbook-page__grid"></div>
			<div class="sa-chipbook-page__orb sa-chipbook-page__orb--amber"></div>
			<div class="sa-chipbook-page__orb sa-chipbook-page__orb--cobalt"></div>
			<div class="sa-chipbook-page__orb sa-chipbook-page__orb--mint"></div>
		</div>
		<div class="sa-chipbook-page__watermark" data-sa-chipbook-watermark>
			<div class="sa-chipbook-page__watermark-glow"></div>
			<p class="sa-chipbook-page__watermark-brand sa-hero-reveal sa-hero-reveal--delay-1">SemiAnalysis</p>
			<p class="sa-chipbook-page__watermark-title sa-hero-reveal sa-hero-reveal--delay-2">ChipBook</p>
		</div>
	</div>

	<div class="sa-chipbook-page__content">
<section class="sa-chipbook-hero" aria-label="<?php esc_attr_e( 'ChipBook', 'semianalysis-mvp' ); ?>">
	<div class="sa-chipbook-hero__inner">
		<div class="sa-chipbook-hero__panel sa-glow-border sa-hero-reveal sa-hero-reveal--delay-3">
			<div class="sa-chipbook-hero__panel-shine" aria-hidden="true"></div>
			<div class="sa-chipbook-hero__panel-body">
				<div class="sa-chipbook-hero__panel-top">
					<div class="sa-chipbook-hero__panel-copy">
						<div class="sa-chipbook-hero__meta">
							<span class="sa-chipbook-hero__badge sa-shimmer">Institutional Product</span>
							<span class="sa-chipbook-hero__volume">Vol. monthly · SemiAnalysis</span>
						</div>
						<h1 class="sa-chipbook-hero__headline">
							The industry&apos;s <span class="sa-text-gradient">monthly intelligence</span> report
						</h1>
					</div>
					<div class="sa-chipbook-hero__panel-cta">
						<div class="sa-chipbook-hero__cta-stack">
							<div class="sa-chipbook-hero__actions">
								<a class="sa-btn sa-btn--primary" href="<?php echo esc_url( SA_MVP_LOGIN_URL ); ?>">Buy ChipBook</a>
								<a class="sa-btn sa-btn--secondary" href="<?php echo esc_url( SA_MVP_CHIPBOOK_SAMPLE ); ?>" target="_blank" rel="noopener noreferrer">Download Sample</a>
							</div>
							<p class="sa-chipbook-hero__support">
								Questions? Reach out to<br>
								<a href="<?php echo esc_url( SA_MVP_CHIPBOOK_SALES ); ?>"><?php echo esc_html( $cta_email ); ?></a>
							</p>
						</div>
					</div>
				</div>

				<div class="sa-chipbook-hero__panel-bottom">
					<p class="sa-chipbook-hero__desc">
						The SemiAnalysis ChipBook is a monthly AI and semiconductor industry tracker
						which provides both timely and targeted insights into the overall state of
						the industry, as well as detailed information about specific sectors and
						trends. ChipBook contains thousands of unique data points, carefully
						selected to distill clear and actionable insights for investors and company
						decision makers.
					</p>
					<div class="sa-chipbook-hero__stats">
						<?php foreach ( $chipbook_hero_stats as $stat ) : ?>
							<div class="sa-chipbook-hero__stat">
								<p class="sa-chipbook-hero__stat-value sa-chipbook-hero__stat-value--<?php echo esc_attr( $stat['accent'] ); ?>">
									<?php echo esc_html( $stat['value'] ); ?>
								</p>
								<p class="sa-chipbook-hero__stat-label"><?php echo esc_html( $stat['label'] ); ?></p>
							</div>
						<?php endforeach; ?>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<?php else : ?>
<section class="sa-product-hero">
	<div class="sa-product-hero__inner">
		<p class="sa-hero__eyebrow" style="color:var(--sa-cobalt);">Institutional Product</p>
		<h1 class="sa-hero__title"><?php the_title(); ?></h1>
		<?php if ( $tagline ) : ?>
			<p class="sa-product-hero__tagline"><?php echo esc_html( $tagline ); ?></p>
		<?php endif; ?>
		<p class="sa-hero__desc"><?php echo esc_html( get_the_excerpt() ); ?></p>
		<div class="sa-hero__actions">
			<a class="sa-btn sa-btn--primary" href="<?php echo esc_url( $cta_href ); ?>">
				<?php echo esc_html( $cta_label ); ?>
			</a>
			<a class="sa-btn sa-btn--secondary" href="<?php echo esc_url( home_url( '/models/' ) ); ?>">
				All Products
			</a>
		</div>
	</div>
</section>
<?php endif; ?>

<?php if ( $is_chipbook ) : ?>

<section class="sa-chipbook-section sa-chipbook-section--audience">
	<div class="sa-chipbook-section__inner">
		<div class="sa-chipbook-block sa-reveal">
			<p class="sa-chipbook-eyebrow sa-chipbook-eyebrow--cobalt"><?php esc_html_e( 'Built for decision-makers', 'semianalysis-mvp' ); ?></p>
			<h2 class="sa-chipbook-section__title"><?php esc_html_e( 'Value across the ecosystem', 'semianalysis-mvp' ); ?></h2>
			<div class="sa-chipbook-audience-grid sa-reveal--stagger">
				<div class="sa-chipbook-audience-card sa-card-glow">
					<div class="sa-chipbook-audience-card__head">
						<span class="sa-chipbook-audience-card__icon sa-chipbook-audience-card__icon--amber" aria-hidden="true">
							<svg viewBox="0 0 24 24" fill="none"><path d="M4 18V6l8-3 8 3v12l-8 3-8-3Z" stroke="currentColor" stroke-width="1.5"/></svg>
						</span>
						<h3 class="sa-chipbook-audience-card__title"><?php esc_html_e( 'For investors', 'semianalysis-mvp' ); ?></h3>
					</div>
					<p class="sa-chipbook-audience-card__body">
						<?php echo esc_html( $investors ?: 'Idea generation tool, investment thesis validation, and portfolio position tracking across the semiconductor and AI cycle.' ); ?>
					</p>
				</div>
				<div class="sa-chipbook-audience-card sa-card-glow">
					<div class="sa-chipbook-audience-card__head">
						<span class="sa-chipbook-audience-card__icon sa-chipbook-audience-card__icon--mint" aria-hidden="true">
							<svg viewBox="0 0 24 24" fill="none"><path d="M10 38V18L24 10L38 18V38H10Z" stroke="currentColor" stroke-width="1.5"/></svg>
						</span>
						<h3 class="sa-chipbook-audience-card__title"><?php esc_html_e( 'For executives', 'semianalysis-mvp' ); ?></h3>
					</div>
					<p class="sa-chipbook-audience-card__body">
						<?php echo esc_html( $executives ?: 'Resource allocation optimization, strategic R&D investments, and knowing when to adapt capacity as the industry shifts.' ); ?>
					</p>
				</div>
			</div>
		</div>

		<div class="sa-chipbook-block sa-chipbook-block--trackers sa-reveal sa-reveal--delay-1">
			<p class="sa-chipbook-eyebrow sa-chipbook-eyebrow--amber"><?php esc_html_e( 'Inside every issue', 'semianalysis-mvp' ); ?></p>
			<h2 class="sa-chipbook-section__title"><?php esc_html_e( 'Core trackers & timely datasets', 'semianalysis-mvp' ); ?></h2>
			<div class="sa-chipbook-trackers" data-sa-chipbook-trackers>
				<button type="button" class="sa-chipbook-tracker sa-card-glow is-active" data-sa-tracker-panel data-tracker="core" aria-pressed="true">
					<span class="sa-chipbook-tracker__glow sa-chipbook-tracker__glow--amber" aria-hidden="true"></span>
					<span class="sa-chipbook-tracker__accent sa-chipbook-tracker__accent--amber" aria-hidden="true"></span>
					<h3 class="sa-chipbook-tracker__title"><?php esc_html_e( 'Core industry trackers', 'semianalysis-mvp' ); ?></h3>
					<p class="sa-chipbook-tracker__subtitle"><?php esc_html_e( 'Consistent slides updated each month — monitor the overall semiconductor value chain and broader semi-cycle.', 'semianalysis-mvp' ); ?></p>
					<ul class="sa-chipbook-tracker__list">
						<?php foreach ( $chipbook_core_trackers as $index => $item ) : ?>
							<li>
								<span class="sa-chipbook-tracker__index sa-chipbook-tracker__index--amber"><?php echo esc_html( str_pad( (string) ( $index + 1 ), 2, '0', STR_PAD_LEFT ) ); ?></span>
								<?php echo esc_html( $item ); ?>
							</li>
						<?php endforeach; ?>
					</ul>
				</button>
				<button type="button" class="sa-chipbook-tracker sa-card-glow" data-sa-tracker-panel data-tracker="timely" aria-pressed="false">
					<span class="sa-chipbook-tracker__glow sa-chipbook-tracker__glow--cobalt" aria-hidden="true"></span>
					<span class="sa-chipbook-tracker__accent sa-chipbook-tracker__accent--cobalt" aria-hidden="true"></span>
					<h3 class="sa-chipbook-tracker__title"><?php esc_html_e( 'Timely datasets', 'semianalysis-mvp' ); ?></h3>
					<p class="sa-chipbook-tracker__subtitle"><?php esc_html_e( 'Rotating slides selected for timeliness and actionability from our 125+ dataset library.', 'semianalysis-mvp' ); ?></p>
					<ul class="sa-chipbook-tracker__list">
						<?php foreach ( $chipbook_timely_datasets as $index => $item ) : ?>
							<li>
								<span class="sa-chipbook-tracker__index sa-chipbook-tracker__index--cobalt"><?php echo esc_html( str_pad( (string) ( $index + 1 ), 2, '0', STR_PAD_LEFT ) ); ?></span>
								<?php echo esc_html( $item ); ?>
							</li>
						<?php endforeach; ?>
					</ul>
				</button>
			</div>
		</div>
	</div>
</section>

<section class="sa-chipbook-section sa-chipbook-section--subscription">
	<div class="sa-chipbook-section__inner">
		<div class="sa-chipbook-block sa-reveal">
			<p class="sa-chipbook-eyebrow sa-chipbook-eyebrow--mint"><?php esc_html_e( 'Subscription', 'semianalysis-mvp' ); ?></p>
			<h2 class="sa-chipbook-section__title"><?php esc_html_e( 'What\'s included', 'semianalysis-mvp' ); ?></h2>
			<div class="sa-chipbook-benefits sa-reveal--stagger">
				<?php foreach ( $chipbook_benefits as $benefit ) : ?>
					<div class="sa-chipbook-benefit sa-card-glow">
						<span class="sa-chipbook-benefit__bar sa-chipbook-benefit__bar--<?php echo esc_attr( $benefit['accent'] ); ?>" aria-hidden="true"></span>
						<h3 class="sa-chipbook-benefit__title"><?php echo esc_html( $benefit['title'] ); ?></h3>
						<p class="sa-chipbook-benefit__body"><?php echo esc_html( $benefit['body'] ); ?></p>
					</div>
				<?php endforeach; ?>
			</div>
		</div>
	</div>
</section>

<section id="sa-conversion-band" class="sa-section sa-cta-section sa-chipbook-cta sa-reveal">
	<div class="sa-cta-band sa-glow-border">
		<div class="sa-cta-band__glow" aria-hidden="true"></div>
		<div class="sa-cta-band__inner">
			<div class="sa-cta-band__content">
				<p class="sa-cta-band__eyebrow"><?php esc_html_e( 'Institutional access', 'semianalysis-mvp' ); ?></p>
				<h2 class="sa-cta-band__title"><?php esc_html_e( 'Ready to subscribe?', 'semianalysis-mvp' ); ?></h2>
				<p class="sa-cta-band__desc"><?php esc_html_e( 'Get pricing, demos, and access to proprietary models — or start with ChipBook, our monthly industry tracker trusted by leading funds and semiconductor companies.', 'semianalysis-mvp' ); ?></p>
			</div>
			<div class="sa-cta-band__actions">
				<a class="sa-btn sa-btn--primary sa-btn-lift" href="<?php echo esc_url( sa_mvp_contact_sales_url() ); ?>"><?php esc_html_e( 'Contact Sales', 'semianalysis-mvp' ); ?></a>
				<a class="sa-btn sa-btn--secondary sa-btn-lift" href="<?php echo esc_url( SA_MVP_LOGIN_URL ); ?>"><?php esc_html_e( 'Buy ChipBook', 'semianalysis-mvp' ); ?></a>
				<a class="sa-btn sa-btn--secondary sa-btn-lift" href="<?php echo esc_url( home_url( '/models/' ) ); ?>"><?php esc_html_e( 'Browse Models', 'semianalysis-mvp' ); ?></a>
			</div>
		</div>
	</div>
</section>

<?php else : ?>

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
			<?php if ( 'Contact Sales' === $cta_label ) : ?>
				Contact our sales team to learn about pricing and subscription options.
			<?php else : ?>
				Reach out to <?php echo esc_html( $cta_email ); ?> to learn about pricing and subscription options.
			<?php endif; ?>
		</p>
		<div class="sa-hero__actions">
			<a class="sa-btn sa-btn--primary" href="<?php echo esc_url( $cta_href ); ?>">
				<?php echo esc_html( $cta_label ); ?>
			</a>
		</div>
	</div>
</section>

<?php endif; ?>

<?php if ( $is_chipbook ) : ?>
	</div>
</div>
<?php endif; ?>
