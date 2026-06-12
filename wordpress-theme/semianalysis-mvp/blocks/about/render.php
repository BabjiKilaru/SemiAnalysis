<?php

$stats = array(
	array( 'label' => 'Newsletter Readers', 'value' => '200K+' ),
	array( 'label' => 'Articles Published', 'value' => '100+' ),
	array( 'label' => 'Conferences / Year', 'value' => '40+' ),
	array( 'label' => 'Institutional Products', 'value' => '4' ),
);

$hero_pillars = array(
	array( 'label' => 'Product-first research', 'color' => 'amber' ),
	array( 'label' => '40+ conferences annually', 'color' => 'cobalt' ),
	array( 'label' => 'Full-stack coverage', 'color' => 'mint' ),
);

$stack_layers = array(
	array( 'label' => 'AI Models & Inference', 'detail' => 'Training infra, performance, cost', 'accent' => 'coral' ),
	array( 'label' => 'Software & EDA', 'detail' => 'Frameworks, tooling, stacks', 'accent' => 'mint' ),
	array( 'label' => 'Datacenters & Systems', 'detail' => 'Server architecture, power, colo', 'accent' => 'cobalt' ),
	array( 'label' => 'Networking & Optics', 'detail' => 'Scale-up, scale-out, transceivers', 'accent' => 'amber' ),
	array( 'label' => 'Chip Design & VLSI', 'detail' => 'Architectures, packaging, yields', 'accent' => 'cobalt' ),
	array( 'label' => 'Foundries & Process', 'detail' => 'Nodes, wafer costs, capacity', 'accent' => 'mint' ),
	array( 'label' => 'Fab & Equipment', 'detail' => 'Litho, etch, materials, packaging', 'accent' => 'amber' ),
);

$audiences = array(
	'Hedge funds & PE',
	'Semiconductor C-suite',
	'Hyperscaler infra',
	'Neocloud operators',
	'Enterprise AI buyers',
	'Equipment vendors',
	'Governments',
);

$coverage = array(
	'Semiconductor Capital Equipment & Materials',
	'Fabrication and Packaging',
	'Foundries, Process Nodes, Wafer Yields, and Costs',
	'Chip Design & VLSI',
	'Networking & Optics',
	'Server-Level System Architecture, Datacenters',
	'Software and EDA',
	'AI Model Frameworks, Training & Inference Infrastructure, Performance, and Cost',
);

$methodology = array(
	array(
		'title'  => 'Supply chain forensics',
		'body'   => 'Wafer-level cost modeling, fab tooling lead times, and cross-border logistics mapping — ground truth from silicon to shipment.',
		'accent' => 'amber',
	),
	array(
		'title'  => 'Technical due diligence',
		'body'   => 'Architectural teardowns of GPUs, TPUs, and ASICs. Reverse-engineered yield analytics and hyperscale ROI forecasts.',
		'accent' => 'cobalt',
	),
	array(
		'title'  => 'Market signal extraction',
		'body'   => 'AI cluster deployment tracking, hyperscaler procurement patterns, and pre-consensus catalysts for public markets.',
		'accent' => 'mint',
	),
);

$service_blocks = array(
	array(
		'label'  => 'Strategic consulting',
		'body'   => 'Strategic and technical consulting and analysis services for organizations in semiconductor industry and institutional.',
		'tags'   => array( 'Technical due diligence', 'Institutional' ),
		'accent' => 'amber',
	),
	array(
		'label'  => 'Tailored engagements',
		'body'   => "Tailored solutions to match our clients' needs with options such as retained advisory engagements, bespoke project work, offering industry and product models for sale and hourly consulting.",
		'tags'   => array( 'Retained advisory', 'Bespoke projects', 'Industry models' ),
		'accent' => 'cobalt',
	),
);

$selling_points = array(
	array(
		'title'  => 'Product first',
		'body'   => 'We focus on technology, trends, and look at it from a tech/product first perspective as opposed to viewing firms in isolation.',
		'accent' => 'amber',
		'icon'   => 'product',
		'wide'   => false,
	),
	array(
		'title'  => 'Conferences',
		'body'   => 'We attend 40+ industry conferences and engage with every layer of the abstraction stack regularly.',
		'accent' => 'cobalt',
		'icon'   => 'conferences',
		'wide'   => false,
	),
	array(
		'title'  => 'Flywheel approach',
		'body'   => "Semiconductors and AI are the most intricate supply chain and nobody knows every step — many specialists in one part of the supply chain would like to gain perspective on many other parts — leading to mutually beneficial engagements. They need to understand the context of what's going on upstream and downstream.",
		'accent' => 'mint',
		'icon'   => 'flywheel',
		'wide'   => true,
	),
);

$icon_svg = static function ( $type ) {
	switch ( $type ) {
		case 'product':
			return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 18V6l8-3 8 3v12l-8 3-8-3Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M12 9v12M4 6l8 3 8-3" stroke="currentColor" stroke-width="1.5"/></svg>';
		case 'conferences':
			return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="1.5"/><path d="M12 13v8M8 21h8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M6 6a6 6 0 0 1 12 0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>';
		default:
			return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 4v4M12 16v4M4 12h4M16 12h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.5"/><path d="M8.5 8.5l2 2M13.5 13.5l2 2M15.5 8.5l-2 2M10.5 13.5l-2 2" stroke="currentColor" stroke-width="1.25" stroke-linecap="round"/></svg>';
	}
};
?>
<section class="sa-about-hero" aria-label="<?php esc_attr_e( 'About SemiAnalysis', 'semianalysis-mvp' ); ?>">
	<div class="sa-about-hero__wash" aria-hidden="true"></div>
	<div class="sa-about-hero__watermark" aria-hidden="true">
		<span>SemiAnalysis</span>
	</div>

	<div class="sa-about-hero__inner">
		<div class="sa-about-hero__content">
			<p class="sa-about-hero__badge sa-hero-reveal"><?php esc_html_e( 'About us', 'semianalysis-mvp' ); ?></p>

			<h1 class="sa-about-hero__title sa-hero-reveal sa-hero-reveal--delay-1">
				<?php esc_html_e( 'Bridging the gap between', 'semianalysis-mvp' ); ?>
				<span class="sa-text-gradient"><?php esc_html_e( 'business', 'semianalysis-mvp' ); ?></span><br class="sa-about-hero__title-break" aria-hidden="true">
				<span class="sa-about-hero__title-muted"><?php esc_html_e( 'and the ', 'semianalysis-mvp' ); ?></span>
				<?php esc_html_e( "world's most important industry", 'semianalysis-mvp' ); ?>
			</h1>

			<p class="sa-about-hero__desc sa-hero-reveal sa-hero-reveal--delay-2">
				<?php esc_html_e( 'Independent research on semiconductors and AI — from fabrication and packaging to datacenters, models, and infrastructure. Built for investors, enterprises, and governments who need clarity, not noise.', 'semianalysis-mvp' ); ?>
			</p>

			<div class="sa-about-hero__actions sa-hero-reveal sa-hero-reveal--delay-3">
				<a class="sa-btn sa-btn--primary sa-btn-lift" href="<?php echo esc_url( sa_mvp_contact_sales_url() ); ?>"><?php esc_html_e( 'Contact Sales', 'semianalysis-mvp' ); ?></a>
				<a class="sa-btn sa-btn--secondary sa-btn-lift" href="<?php echo esc_url( SA_MVP_CAREERS_URL ); ?>" target="_blank" rel="noopener noreferrer"><?php esc_html_e( 'Careers', 'semianalysis-mvp' ); ?></a>
				<a class="sa-btn sa-btn--ghost" href="<?php echo esc_url( SA_MVP_NEWSLETTER_SUBSCRIBE ); ?>" target="_blank" rel="noopener noreferrer"><?php esc_html_e( 'Subscribe free →', 'semianalysis-mvp' ); ?></a>
			</div>

			<div class="sa-about-hero__pillars sa-hero-reveal sa-hero-reveal--delay-4">
				<?php foreach ( $hero_pillars as $pillar ) : ?>
					<span class="sa-about-hero__pillar">
						<span class="sa-about-hero__pillar-dot sa-about-hero__pillar-dot--<?php echo esc_attr( $pillar['color'] ); ?>" aria-hidden="true"></span>
						<?php echo esc_html( $pillar['label'] ); ?>
					</span>
				<?php endforeach; ?>
			</div>
		</div>

		<dl class="sa-about-hero__stats sa-hero-reveal sa-hero-reveal--delay-5">
			<?php foreach ( $stats as $stat ) : ?>
				<div class="sa-about-hero__stat">
					<dt class="sa-about-hero__stat-label"><?php echo esc_html( $stat['label'] ); ?></dt>
					<dd class="sa-about-hero__stat-value"><?php echo esc_html( $stat['value'] ); ?></dd>
				</div>
			<?php endforeach; ?>
		</dl>
	</div>
</section>

<section class="sa-about-section">
	<div class="sa-about-section__inner sa-about-mission">
		<div class="sa-about-mission__copy sa-reveal">
			<p class="sa-about-eyebrow sa-about-eyebrow--amber">
				<span class="sa-about-eyebrow__line" aria-hidden="true"></span>
				<?php esc_html_e( 'Our mission', 'semianalysis-mvp' ); ?>
			</p>
			<h2 class="sa-about-heading">
				<?php esc_html_e( 'Research-grade intelligence for the', 'semianalysis-mvp' ); ?>
				<span class="sa-text-gradient"><?php esc_html_e( 'semiconductor & AI', 'semianalysis-mvp' ); ?></span>
				<?php esc_html_e( 'ecosystem', 'semianalysis-mvp' ); ?>
			</h2>
			<p class="sa-about-body">
				<?php esc_html_e( 'SemiAnalysis is a boutique intelligence platform — proprietary datasets, strategic advisory, and deep technical coverage across the full stack. What began as a newsletter is now essential reading for multi-million dollar decisions in silicon and AI.', 'semianalysis-mvp' ); ?>
			</p>
			<div class="sa-about-trusted">
				<p class="sa-about-trusted__label"><?php esc_html_e( 'Trusted by', 'semianalysis-mvp' ); ?></p>
				<div class="sa-about-trusted__tags">
					<?php foreach ( $audiences as $audience ) : ?>
						<span class="sa-about-trusted__tag"><?php echo esc_html( $audience ); ?></span>
					<?php endforeach; ?>
				</div>
			</div>
		</div>

		<div class="sa-about-stack sa-reveal sa-reveal--delay-1" data-sa-about-stack>
			<div class="sa-about-stack__glow" aria-hidden="true"></div>
			<p class="sa-about-stack__label"><?php esc_html_e( 'Abstraction stack', 'semianalysis-mvp' ); ?></p>
			<p class="sa-about-stack__desc"><?php esc_html_e( 'One unified view from transistor to training cluster.', 'semianalysis-mvp' ); ?></p>
			<div class="sa-about-stack__layers">
				<?php foreach ( $stack_layers as $index => $layer ) : ?>
					<button
						type="button"
						class="sa-about-stack__layer sa-about-stack__layer--<?php echo esc_attr( $layer['accent'] ); ?><?php echo 0 === $index ? ' is-active' : ''; ?>"
						data-sa-stack-layer
						aria-pressed="<?php echo 0 === $index ? 'true' : 'false'; ?>"
					>
						<span class="sa-about-stack__bar" aria-hidden="true"></span>
						<span class="sa-about-stack__copy">
							<span class="sa-about-stack__name"><?php echo esc_html( $layer['label'] ); ?></span>
							<span class="sa-about-stack__detail"><?php echo esc_html( $layer['detail'] ); ?></span>
						</span>
						<span class="sa-about-stack__index">L<?php echo esc_html( (string) ( $index + 1 ) ); ?></span>
					</button>
				<?php endforeach; ?>
			</div>
		</div>
	</div>
</section>

<section class="sa-about-section sa-about-section--elevated">
	<div class="sa-about-section__inner">
		<div class="sa-reveal">
			<p class="sa-about-eyebrow sa-about-eyebrow--cobalt"><?php esc_html_e( 'What we cover', 'semianalysis-mvp' ); ?></p>
			<h2 class="sa-about-heading"><?php esc_html_e( 'Every layer. One coherent narrative.', 'semianalysis-mvp' ); ?></h2>
		</div>
		<ol class="sa-about-coverage sa-reveal sa-reveal--delay-1">
			<?php foreach ( $coverage as $index => $area ) : ?>
				<li class="sa-about-coverage__item">
					<span class="sa-about-coverage__num"><?php echo esc_html( (string) ( $index + 1 ) ); ?>.</span>
					<span><?php echo esc_html( $area ); ?></span>
				</li>
			<?php endforeach; ?>
		</ol>
	</div>
</section>

<section class="sa-about-section">
	<div class="sa-about-section__inner">
		<div class="sa-reveal">
			<p class="sa-about-eyebrow sa-about-eyebrow--mint"><?php esc_html_e( 'How we work', 'semianalysis-mvp' ); ?></p>
			<h2 class="sa-about-heading"><?php esc_html_e( 'Analysis, models, and advisory', 'semianalysis-mvp' ); ?></h2>
		</div>
		<div class="sa-about-methodology sa-reveal--stagger">
			<?php foreach ( $methodology as $index => $item ) : ?>
				<article class="sa-about-method sa-card-glow sa-about-method--<?php echo esc_attr( $item['accent'] ); ?>">
					<span class="sa-about-method__bar" aria-hidden="true"></span>
					<span class="sa-about-method__num"><?php echo esc_html( (string) ( $index + 1 ) ); ?></span>
					<h3 class="sa-about-method__title"><?php echo esc_html( $item['title'] ); ?></h3>
					<p class="sa-about-method__body"><?php echo esc_html( $item['body'] ); ?></p>
				</article>
			<?php endforeach; ?>
		</div>
	</div>
</section>

<section class="sa-about-section sa-about-section--services">
	<div class="sa-about-section__inner sa-about-section__inner--stack">
		<div class="sa-about-panel sa-about-panel--services sa-glow-border sa-reveal">
			<div class="sa-about-panel__shine sa-about-panel__shine--amber" aria-hidden="true"></div>
			<div class="sa-about-panel__layout">
				<div class="sa-about-panel__aside">
					<div class="sa-about-panel__aside-glow sa-about-panel__aside-glow--amber" aria-hidden="true"></div>
					<p class="sa-about-eyebrow sa-about-eyebrow--amber"><?php esc_html_e( 'For clients', 'semianalysis-mvp' ); ?></p>
					<h2 class="sa-about-panel__title"><?php esc_html_e( 'Services we offer', 'semianalysis-mvp' ); ?></h2>
					<div class="sa-about-panel__accent sa-about-panel__accent--amber" aria-hidden="true"></div>
				</div>
				<div class="sa-about-panel__cards">
					<?php foreach ( $service_blocks as $block ) : ?>
						<article class="sa-about-service sa-card-glow sa-about-service--<?php echo esc_attr( $block['accent'] ); ?>">
							<div class="sa-about-service__orb" aria-hidden="true"></div>
							<span class="sa-about-service__line" aria-hidden="true"></span>
							<h3 class="sa-about-service__title"><?php echo esc_html( $block['label'] ); ?></h3>
							<p class="sa-about-service__body"><?php echo esc_html( $block['body'] ); ?></p>
							<div class="sa-about-service__tags">
								<?php foreach ( $block['tags'] as $tag ) : ?>
									<span class="sa-about-service__tag"><?php echo esc_html( $tag ); ?></span>
								<?php endforeach; ?>
							</div>
						</article>
					<?php endforeach; ?>
				</div>
			</div>
		</div>

		<div class="sa-about-panel sa-about-panel--points sa-reveal sa-reveal--delay-1">
			<div class="sa-about-panel__shine sa-about-panel__shine--mint" aria-hidden="true"></div>
			<div class="sa-about-panel__layout">
				<div class="sa-about-panel__aside">
					<p class="sa-about-eyebrow sa-about-eyebrow--mint"><?php esc_html_e( 'Why us', 'semianalysis-mvp' ); ?></p>
					<h2 class="sa-about-panel__title"><?php esc_html_e( 'Unique selling points', 'semianalysis-mvp' ); ?></h2>
					<div class="sa-about-panel__accent sa-about-panel__accent--mint" aria-hidden="true"></div>
				</div>
				<div class="sa-about-panel__cards sa-about-panel__cards--points">
					<?php foreach ( $selling_points as $point ) : ?>
						<article class="sa-about-point sa-card-glow sa-about-point--<?php echo esc_attr( $point['accent'] ); ?><?php echo $point['wide'] ? ' sa-about-point--wide' : ''; ?>">
							<span class="sa-about-point__bar" aria-hidden="true"></span>
							<div class="sa-about-point__row">
								<div class="sa-about-point__icon"><?php echo $icon_svg( $point['icon'] ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></div>
								<div class="sa-about-point__copy">
									<h3 class="sa-about-point__title"><?php echo esc_html( $point['title'] ); ?></h3>
									<p class="sa-about-point__body"><?php echo esc_html( $point['body'] ); ?></p>
								</div>
							</div>
						</article>
					<?php endforeach; ?>
				</div>
			</div>
		</div>
	</div>
</section>
