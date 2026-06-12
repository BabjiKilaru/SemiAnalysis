<?php

$models        = sa_mvp_get_models();
$labels        = sa_mvp_model_category_labels();
$category_meta = sa_mvp_model_category_meta();
$stack_layers  = sa_mvp_stack_layers();
$filters       = array_merge( array( 'all' => 'All models' ), $labels );
$featured      = array_values( array_filter( $models, fn( $m ) => ! empty( $m['featured'] ) ) );
$catalog       = array_values( array_filter( $models, fn( $m ) => empty( $m['featured'] ) ) );
$active_slug   = isset( $_GET['model'] ) ? sanitize_title( wp_unslash( $_GET['model'] ) ) : '';

$ticker_terms = array(
	'CUDA', 'CoWoS', 'HBM3e', 'Blackwell', 'TPU v7', 'NVL72',
	'Datacenter', 'Wafer Fab', 'Trainium', 'ROCm', 'InfiniBand',
	'ClusterMAX', '3nm', 'AI Accelerator', 'Neocloud',
);
$ticker_items = array_merge( $ticker_terms, $ticker_terms );

$render_category_icon = function ( $category ) use ( $category_meta ) {
	$icon = $category_meta[ $category ]['icon'] ?? 'M12 34L24 14L36 34';
	?>
	<svg viewBox="0 0 48 48" fill="none" aria-hidden="true" class="sa-model-icon">
		<path d="<?php echo esc_attr( $icon ); ?>" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
	<?php
};
?>
<section class="sa-model-catalog" data-sa-model-catalog data-sa-contact-url="<?php echo esc_url( sa_mvp_contact_sales_url() ); ?>">
	<div class="sa-models-hero">
		<div class="sa-models-hero__bg" aria-hidden="true">
			<div class="sa-models-hero__glow sa-models-hero__glow--left"></div>
			<div class="sa-models-hero__scanline"></div>
		</div>
		<div class="sa-models-hero__inner">
			<p class="sa-models-hero__eyebrow sa-reveal">Institutional offerings</p>
			<h1 class="sa-models-hero__title sa-reveal sa-reveal--delay-1">Proprietary models for <span class="sa-models-hero__title-gradient">the full AI stack</span></h1>
			<p class="sa-models-hero__desc sa-reveal sa-reveal--delay-2">
				From wafer starts to token economics — fourteen institutional models built for investors, hyperscalers, and industry leaders.
				<a href="<?php echo esc_url( SA_MVP_MODELS_RESEARCH_URL ); ?>" target="_blank" rel="noopener noreferrer">Learn more on semianalysis.com</a>
			</p>

			<dl class="sa-stats sa-stats--models sa-reveal sa-reveal--delay-2" data-sa-stats-count>
				<div class="sa-stats__item">
					<dt class="sa-stats__label">Industry models</dt>
					<dd class="sa-stats__value" data-sa-count-to="14">0</dd>
				</div>
				<div class="sa-stats__item">
					<dt class="sa-stats__label">Coverage layers</dt>
					<dd class="sa-stats__value" data-sa-count-to="4">0</dd>
				</div>
				<div class="sa-stats__item">
					<dt class="sa-stats__label">Tracked datasets</dt>
					<dd class="sa-stats__value" data-sa-count-to="125+">0</dd>
				</div>
				<div class="sa-stats__item">
					<dt class="sa-stats__label">Accelerator customers</dt>
					<dd class="sa-stats__value" data-sa-count-to="60+">0</dd>
				</div>
			</dl>

			<div class="sa-models-hero__layers sa-reveal--stagger">
				<?php foreach ( $stack_layers as $layer ) : ?>
					<span class="sa-models-hero__layer">
						<span class="sa-models-hero__layer-dot sa-models-hero__layer-dot--<?php echo esc_attr( $layer['color'] ); ?>" aria-hidden="true"></span>
						<?php echo esc_html( $layer['label'] ); ?>
					</span>
				<?php endforeach; ?>
			</div>
		</div>

		<div class="sa-ticker sa-ticker--models-hero sa-reveal sa-reveal--delay-3" aria-hidden="true">
			<div class="sa-ticker__fade sa-ticker__fade--left"></div>
			<div class="sa-ticker__fade sa-ticker__fade--right"></div>
			<div class="sa-ticker__track">
				<?php foreach ( $ticker_items as $term ) : ?>
					<span class="sa-ticker__item">
						<?php echo esc_html( $term ); ?>
						<span class="sa-ticker__dot"></span>
					</span>
				<?php endforeach; ?>
			</div>
		</div>
	</div>

	<div class="sa-model-catalog__body">
		<?php if ( $featured ) : ?>
			<div class="sa-model-catalog__featured">
				<h2 class="sa-model-catalog__heading sa-reveal">Featured models</h2>
				<p class="sa-model-catalog__subdesc sa-reveal">Our most-requested institutional offerings.</p>
				<div class="sa-model-featured-grid sa-reveal--stagger">
					<?php foreach ( $featured as $model ) : ?>
						<?php
						$meta       = $category_meta[ $model['category'] ] ?? array( 'accent' => 'cobalt', 'icon' => '' );
						$accent     = $meta['accent'];
						$is_chipbook = 'chipbook' === $model['slug'];
						?>
						<button
							type="button"
							class="sa-model-spotlight sa-card-glow<?php echo $is_chipbook ? ' sa-model-spotlight--chipbook' : ''; ?> sa-model-spotlight--<?php echo esc_attr( $accent ); ?>"
							data-sa-model-open="<?php echo esc_attr( $model['slug'] ); ?>"
							data-category="<?php echo esc_attr( $model['category'] ); ?>"
						>
							<div class="sa-model-spotlight__gradient" aria-hidden="true"></div>
							<div class="sa-model-spotlight__accent-orb" aria-hidden="true"></div>
							<div class="sa-model-spotlight__inner">
								<div class="sa-model-spotlight__head">
									<div class="sa-model-spotlight__identity">
										<div class="sa-model-spotlight__icon sa-model-spotlight__icon--<?php echo esc_attr( $accent ); ?>">
											<?php $render_category_icon( $model['category'] ); ?>
										</div>
										<div class="sa-model-spotlight__titles">
											<h3 class="sa-model-spotlight__name"><?php echo esc_html( $model['name'] ); ?></h3>
											<p class="sa-model-spotlight__tagline sa-model-spotlight__tagline--<?php echo esc_attr( $accent ); ?>"><?php echo esc_html( $model['tagline'] ); ?></p>
										</div>
									</div>
									<?php if ( $is_chipbook ) : ?>
										<span class="sa-model-spotlight__badge sa-shimmer">Flagship</span>
									<?php endif; ?>
								</div>
								<p class="sa-model-spotlight__desc"><?php echo esc_html( $model['description'] ); ?></p>
								<span class="sa-model-spotlight__cta">Learn more <span aria-hidden="true">→</span></span>
							</div>
						</button>
					<?php endforeach; ?>
				</div>
			</div>
		<?php endif; ?>

		<div class="sa-model-catalog__catalog">
			<div class="sa-model-catalog__catalog-head sa-reveal">
				<div>
					<h2 class="sa-model-catalog__heading">Full catalog</h2>
					<p class="sa-model-catalog__subdesc">
						Browse <?php echo esc_html( (string) count( $catalog ) ); ?> additional models by coverage area.
					</p>
				</div>
				<div class="sa-model-catalog__filters" role="tablist" aria-label="<?php esc_attr_e( 'Filter models', 'semianalysis-mvp' ); ?>">
					<?php foreach ( $filters as $id => $label ) : ?>
						<?php
						$pool = 'all' === $id
							? $catalog
							: array_values( array_filter( $catalog, fn( $m ) => $m['category'] === $id ) );
						$count = count( $pool );
						if ( 'all' !== $id && 0 === $count ) {
							continue;
						}
						?>
						<button
							type="button"
							class="sa-model-filter<?php echo 'all' === $id ? ' is-active' : ''; ?>"
							data-sa-filter="<?php echo esc_attr( $id ); ?>"
							data-sa-filter-count="<?php echo esc_attr( (string) $count ); ?>"
							role="tab"
							aria-selected="<?php echo 'all' === $id ? 'true' : 'false'; ?>"
						>
							<?php echo esc_html( $label ); ?>
							<span class="sa-model-filter__count">(<?php echo esc_html( (string) $count ); ?>)</span>
						</button>
					<?php endforeach; ?>
				</div>
			</div>

			<div class="sa-model-catalog__grid sa-reveal--stagger">
				<?php foreach ( $catalog as $index => $model ) : ?>
					<?php $meta = $category_meta[ $model['category'] ] ?? array( 'accent' => 'cobalt', 'icon' => '' ); ?>
					<button
						type="button"
						class="sa-model-tile sa-card-glow sa-model-tile--<?php echo esc_attr( $meta['accent'] ); ?>"
						data-sa-model-open="<?php echo esc_attr( $model['slug'] ); ?>"
						data-category="<?php echo esc_attr( $model['category'] ); ?>"
					>
						<div class="sa-model-tile__bar" aria-hidden="true"></div>
						<div class="sa-model-tile__gradient" aria-hidden="true"></div>
						<div class="sa-model-tile__inner">
							<div class="sa-model-tile__meta">
								<span class="sa-model-tile__index"><?php echo esc_html( str_pad( (string) ( $index + 1 ), 2, '0', STR_PAD_LEFT ) ); ?></span>
								<span class="sa-model-tile__badge sa-model-tile__badge--<?php echo esc_attr( $meta['accent'] ); ?>">
									<?php echo esc_html( $labels[ $model['category'] ] ?? '' ); ?>
								</span>
							</div>
							<div class="sa-model-tile__body">
								<div class="sa-model-tile__icon sa-model-tile__icon--<?php echo esc_attr( $meta['accent'] ); ?>">
									<?php $render_category_icon( $model['category'] ); ?>
								</div>
								<div class="sa-model-tile__copy">
									<h3 class="sa-model-tile__name"><?php echo esc_html( $model['name'] ); ?></h3>
									<p class="sa-model-tile__tagline"><?php echo esc_html( $model['tagline'] ); ?></p>
								</div>
							</div>
							<p class="sa-model-tile__desc"><?php echo esc_html( $model['description'] ); ?></p>
							<span class="sa-model-tile__cta">Learn more <span aria-hidden="true">→</span></span>
						</div>
					</button>
				<?php endforeach; ?>
			</div>
		</div>
	</div>

	<script type="application/json" id="sa-models-json"><?php echo wp_json_encode( $models ); ?></script>

	<div class="sa-model-overlay" id="sa-model-overlay" hidden aria-hidden="true">
		<div class="sa-model-overlay__backdrop" data-sa-model-close aria-label="<?php esc_attr_e( 'Close model details', 'semianalysis-mvp' ); ?>"></div>
		<div class="sa-model-overlay__panel" role="dialog" aria-modal="true" aria-labelledby="sa-model-overlay-title">
			<div class="sa-model-overlay__header">
				<p class="sa-model-overlay__header-title" id="sa-model-overlay-title"></p>
				<button type="button" class="sa-model-overlay__close" data-sa-model-close aria-label="<?php esc_attr_e( 'Close', 'semianalysis-mvp' ); ?>">×</button>
			</div>
			<div class="sa-model-overlay__body" id="sa-model-overlay-content"></div>
			<div class="sa-model-overlay__footer">
				<button type="button" class="sa-model-overlay__back" data-sa-model-close><?php esc_html_e( 'Back to Industry Models', 'semianalysis-mvp' ); ?></button>
			</div>
		</div>
	</div>
</section>

<?php if ( $active_slug ) : ?>
	<script>window.saOpenModelSlug = <?php echo wp_json_encode( $active_slug ); ?>;</script>
<?php endif; ?>
