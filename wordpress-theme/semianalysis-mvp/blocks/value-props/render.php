<?php

$supply_chain = array(
	array( 'label' => 'Fab & Equipment', 'detail' => 'Litho, etch, materials', 'accent' => 'var(--sa-cobalt)' ),
	array( 'label' => 'Chip Design', 'detail' => 'VLSI, EDA, packaging', 'accent' => 'var(--sa-amber)' ),
	array( 'label' => 'Systems & DC', 'detail' => 'Servers, power, colo', 'accent' => 'var(--sa-mint)' ),
	array( 'label' => 'AI & Software', 'detail' => 'Training, inference, cost', 'accent' => 'var(--sa-coral)' ),
);

$pillars = array(
	array(
		'title'  => 'Product-first research',
		'body'   => 'We analyze technology and trends from a product lens — not firm-by-firm marketing narratives. Our analysts have hands-on industry experience across the stack.',
		'accent' => 'var(--sa-amber)',
		'icon'   => 'cube',
	),
	array(
		'title'  => 'Field intelligence',
		'body'   => '40+ industry conferences annually. Regular engagement with every layer of the abstraction stack — from fabs and equipment vendors to hyperscaler infra teams.',
		'accent' => 'var(--sa-cobalt)',
		'icon'   => 'field',
	),
	array(
		'title'  => 'Flywheel coverage',
		'body'   => 'Semiconductors and AI form the world\'s most intricate supply chain. Specialists in one layer need upstream and downstream context — we connect the full picture.',
		'accent' => 'var(--sa-mint)',
		'icon'   => 'flywheel',
	),
);

$model_links = array(
	array( 'name' => 'Accelerator', 'slug' => 'accelerator-model' ),
	array( 'name' => 'AI Cloud TCO', 'slug' => 'tco-model' ),
	array( 'name' => 'Datacenter', 'slug' => 'datacenter-model' ),
	array( 'name' => 'Wafer Fab', 'slug' => 'wafer-fab-model' ),
	array( 'name' => 'AI Networking', 'slug' => 'ai-networking-model' ),
);

$audiences = array(
	'Hedge funds & PE',
	'Semiconductor C-suite',
	'Hyperscaler infra',
	'Neocloud operators',
	'Enterprise AI buyers',
	'Equipment vendors',
);

?>
<section class="sa-section sa-why-sa">
	<div class="sa-why-sa__bg" aria-hidden="true"></div>

	<div class="sa-why-sa__inner">
		<div class="sa-why-sa__grid">
			<div class="sa-why-sa__intro sa-reveal">
				<p class="sa-why-sa__eyebrow">
					<span class="sa-why-sa__eyebrow-line" aria-hidden="true"></span>
					Why SemiAnalysis
				</p>
				<h2 class="sa-why-sa__title">
					Research-grade,
					<span class="sa-text-gradient">not marketing-grade</span>
				</h2>
				<p class="sa-why-sa__lead">
					Independent analysis built for investors, AI infrastructure teams, and enterprise buyers navigating the semiconductor and AI landscape — with proprietary models, curated datasets, and deep technical coverage.
				</p>
				<p class="sa-why-sa__sub">
					With a subscription you get full access to all articles, article discussions, and further insight into deep dives.
				</p>

				<div class="sa-why-sa__actions">
					<div class="sa-why-sa__actions-stack">
						<a class="sa-btn sa-btn--primary sa-btn-lift" href="<?php echo esc_url( home_url( '/models/' ) ); ?>">Explore Models</a>
						<a class="sa-btn sa-btn--ghost sa-btn-lift" href="<?php echo esc_url( SA_MVP_NEWSLETTER_SUBSCRIBE ); ?>" target="_blank" rel="noopener noreferrer">Subscribe Free</a>
					</div>
					<a class="sa-btn sa-btn--secondary sa-btn-lift" href="<?php echo esc_url( home_url( '/products/chipbook/' ) ); ?>">View ChipBook</a>
				</div>

				<div class="sa-why-sa__trusted">
					<p class="sa-why-sa__trusted-label">Trusted by</p>
					<div class="sa-why-sa__audiences">
						<?php foreach ( $audiences as $audience ) : ?>
							<span class="sa-why-sa__audience"><?php echo esc_html( $audience ); ?></span>
						<?php endforeach; ?>
					</div>
				</div>
			</div>

			<div class="sa-why-sa__bento sa-reveal--stagger">
				<div class="sa-why-sa__bento-cell sa-why-sa__bento-cell--wide">
				<div class="sa-why-sa__supply sa-card-glow">
					<div class="sa-why-sa__supply-glow" aria-hidden="true"></div>
					<p class="sa-why-sa__card-label">Full-stack coverage</p>
					<p class="sa-why-sa__card-desc">
						From semiconductor fabrication essentials to cutting-edge AI models, software, and infrastructure — one unified view of the supply chain.
					</p>
					<div class="sa-why-sa__supply-grid">
						<?php foreach ( $supply_chain as $node ) : ?>
							<div class="sa-why-sa__supply-node">
								<span class="sa-why-sa__supply-bar" style="background:<?php echo esc_attr( $node['accent'] ); ?>"></span>
								<span class="sa-why-sa__supply-label"><?php echo esc_html( $node['label'] ); ?></span>
								<span class="sa-why-sa__supply-detail"><?php echo esc_html( $node['detail'] ); ?></span>
							</div>
						<?php endforeach; ?>
					</div>
				</div>
				</div>

				<?php foreach ( $pillars as $pillar ) : ?>
				<div class="sa-why-sa__bento-cell">
					<article class="sa-why-sa__pillar sa-card-glow">
						<div
							class="sa-why-sa__pillar-icon"
							style="color:<?php echo esc_attr( $pillar['accent'] ); ?>;background:color-mix(in srgb, <?php echo esc_attr( $pillar['accent'] ); ?> 12%, transparent)"
						>
							<?php if ( 'field' === $pillar['icon'] ) : ?>
								<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="20" height="20">
									<circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="1.5" />
									<path d="M12 13v8M8 21h8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
									<path d="M6 6a6 6 0 0 1 12 0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
								</svg>
							<?php elseif ( 'flywheel' === $pillar['icon'] ) : ?>
								<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="20" height="20">
									<path d="M12 4v4M12 16v4M4 12h4M16 12h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
									<circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.5" />
									<path d="M8.5 8.5l2 2M13.5 13.5l2 2M15.5 8.5l-2 2M10.5 13.5l-2 2" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" />
								</svg>
							<?php else : ?>
								<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="20" height="20">
									<path d="M4 18V6l8-3 8 3v12l-8 3-8-3Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
									<path d="M12 9v12M4 6l8 3 8-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
								</svg>
							<?php endif; ?>
						</div>
						<h3 class="sa-why-sa__pillar-title"><?php echo esc_html( $pillar['title'] ); ?></h3>
						<p class="sa-why-sa__pillar-body"><?php echo esc_html( $pillar['body'] ); ?></p>
					</article>
				</div>
				<?php endforeach; ?>

				<div class="sa-why-sa__bento-cell">
				<div class="sa-why-sa__models sa-glow-border sa-card-glow">
					<div class="sa-why-sa__models-glow" aria-hidden="true"></div>
					<div class="sa-why-sa__models-inner">
						<p class="sa-why-sa__models-label">Proprietary models</p>
						<p class="sa-why-sa__models-desc">
							Bottoms-up industry models covering accelerator production, AI cloud economics, datacenter power, wafer fab equipment, and AI networking — distilled into ChipBook and advisory deliverables.
						</p>
						<div class="sa-why-sa__model-links">
							<?php foreach ( $model_links as $link ) : ?>
								<a
									class="sa-why-sa__model-link"
									href="<?php echo esc_url( home_url( '/models/?model=' . $link['slug'] ) ); ?>"
								>
									<?php echo esc_html( $link['name'] ); ?>
								</a>
							<?php endforeach; ?>
						</div>
					</div>
				</div>
				</div>
			</div>
		</div>
	</div>
</section>
