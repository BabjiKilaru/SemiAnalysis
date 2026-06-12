<?php

$title       = $attributes['title'] ?? 'Industry Models';
$description = $attributes['description'] ?? 'Proprietary models for investors and hyperscalers — click a card to view details on SemiAnalysis, or contact sales for institutional access.';

$featured = sa_mvp_homepage_carousel_models();

$card_themes = array(
	'accelerator-model'  => 'cobalt',
	'tco-model'          => 'amber',
	'ai-networking-model' => 'amber',
	'datacenter-model'   => 'mint',
	'wafer-fab-model'    => 'cobalt',
);

$carousel_count = count( $featured );
?>
<section class="sa-section sa-models-showcase">
	<div class="sa-models-showcase__layout">
		<div class="sa-models-showcase__intro sa-reveal">
			<h2 class="sa-models-showcase__title"><?php echo esc_html( $title ); ?></h2>
			<p class="sa-models-showcase__desc"><?php echo esc_html( $description ); ?></p>
			<div class="sa-models-showcase__actions sa-models-showcase__actions--desktop">
				<a class="sa-btn sa-btn--primary sa-btn-lift" href="<?php echo esc_url( home_url( '/models/' ) ); ?>">Explore All Models</a>
				<a class="sa-btn sa-btn--secondary sa-btn-lift" href="<?php echo esc_url( sa_mvp_contact_sales_url() ); ?>">Contact Sales</a>
			</div>
		</div>

		<div class="sa-models-showcase__carousel-col sa-reveal sa-reveal--delay-1">
			<div class="sa-models-carousel" data-sa-models-carousel>
				<button type="button" class="sa-models-carousel__arrow" data-sa-carousel-prev aria-label="<?php esc_attr_e( 'Previous model', 'semianalysis-mvp' ); ?>">
					<svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M11 4L6 9L11 14" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg>
				</button>

				<div class="sa-models-carousel__main">
					<div
						class="sa-models-carousel__stage"
						role="region"
						aria-roledescription="carousel"
						aria-label="<?php esc_attr_e( 'Industry models', 'semianalysis-mvp' ); ?>"
					>
						<?php foreach ( $featured as $index => $model ) : ?>
							<?php
							$theme = $card_themes[ $model['slug'] ] ?? 'cobalt';
							$href  = $model['href'] ?? home_url( '/models/?model=' . $model['slug'] );
							$includes = array_slice( $model['includes'] ?? array(), 0, 2 );
							$offset   = $index;
							if ( $offset > $carousel_count / 2 ) {
								$offset -= $carousel_count;
							}
							if ( $offset < -$carousel_count / 2 ) {
								$offset += $carousel_count;
							}
							?>
							<article
								class="sa-models-carousel__card sa-models-carousel__card--<?php echo esc_attr( $theme ); ?>"
								data-sa-carousel-card
								data-offset="<?php echo esc_attr( (string) $offset ); ?>"
								data-index="<?php echo esc_attr( (string) $index ); ?>"
								<?php echo abs( $offset ) > 2 ? ' hidden' : ''; ?>
							>
								<a class="sa-models-carousel__card-link" href="<?php echo esc_url( $href ); ?>">
									<div class="sa-models-carousel__card-glow" aria-hidden="true"></div>
									<div class="sa-models-carousel__card-body">
										<span class="sa-models-carousel__card-icon" aria-hidden="true">
											<?php sa_mvp_render_model_icon( $model['slug'], $model['category'] ); ?>
										</span>
										<h3 class="sa-models-carousel__card-name"><?php echo esc_html( $model['name'] ); ?></h3>
										<p class="sa-models-carousel__card-tagline"><?php echo esc_html( $model['tagline'] ); ?></p>
										<p class="sa-models-carousel__card-desc"><?php echo esc_html( $model['description'] ); ?></p>
										<?php if ( ! empty( $includes ) ) : ?>
											<ul class="sa-models-carousel__card-includes">
												<?php foreach ( $includes as $item ) : ?>
													<li><?php echo esc_html( $item ); ?></li>
												<?php endforeach; ?>
											</ul>
										<?php endif; ?>
										<span class="sa-models-carousel__card-cta">View model →</span>
									</div>
								</a>
							</article>
						<?php endforeach; ?>
					</div>

					<div class="sa-models-carousel__dots" role="tablist" aria-label="<?php esc_attr_e( 'Model slides', 'semianalysis-mvp' ); ?>">
						<?php foreach ( $featured as $index => $model ) : ?>
							<button
								type="button"
								class="sa-models-carousel__dot<?php echo 0 === $index ? ' is-active' : ''; ?>"
								data-sa-carousel-dot
								data-index="<?php echo esc_attr( (string) $index ); ?>"
								aria-label="<?php echo esc_attr( sprintf( __( 'Go to %s', 'semianalysis-mvp' ), $model['name'] ) ); ?>"
								<?php echo 0 === $index ? ' aria-current="true"' : ''; ?>
							></button>
						<?php endforeach; ?>
					</div>
				</div>

				<button type="button" class="sa-models-carousel__arrow" data-sa-carousel-next aria-label="<?php esc_attr_e( 'Next model', 'semianalysis-mvp' ); ?>">
					<svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M7 4L12 9L7 14" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg>
				</button>
			</div>

			<div class="sa-models-showcase__actions sa-models-showcase__actions--mobile">
				<a class="sa-btn sa-btn--primary sa-btn-lift" href="<?php echo esc_url( home_url( '/models/' ) ); ?>">Explore All Models</a>
				<a class="sa-btn sa-btn--secondary sa-btn-lift" href="<?php echo esc_url( sa_mvp_contact_sales_url() ); ?>">Contact Sales</a>
			</div>
		</div>
	</div>
</section>
