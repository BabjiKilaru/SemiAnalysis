<?php

$eyebrow     = $attributes['eyebrow'] ?? 'Free Research';
$title       = $attributes['title'] ?? 'Latest from the newsletter';
$description = $attributes['description'] ?? 'High-quality analysis on Substack — your entry point into SemiAnalysis research.';
$articles    = sa_mvp_fetch_substack_articles( 8 );
$count       = count( $articles );
$looped      = $count > 0 ? array_merge( $articles, $articles, $articles ) : array();
?>
<section class="sa-section sa-section--elevated sa-articles-section">
	<div class="sa-articles-section__header sa-reveal">
		<p class="sa-hero__eyebrow"><?php echo esc_html( $eyebrow ); ?></p>
		<?php if ( $title ) : ?>
			<h2 class="sa-articles-section__title"><?php echo esc_html( $title ); ?></h2>
		<?php endif; ?>
		<?php if ( $description ) : ?>
			<p class="sa-articles-section__desc"><?php echo esc_html( $description ); ?></p>
		<?php endif; ?>
	</div>

	<?php if ( $count > 0 ) : ?>
		<div
			class="sa-articles-carousel sa-reveal sa-reveal--delay-1"
			data-sa-articles-carousel
			data-article-count="<?php echo esc_attr( (string) $count ); ?>"
			role="region"
			aria-roledescription="carousel"
			aria-label="<?php esc_attr_e( 'Latest newsletter articles', 'semianalysis-mvp' ); ?>"
		>
			<div class="sa-articles-carousel__controls">
				<button type="button" class="sa-articles-carousel__arrow sa-btn-lift" data-sa-articles-prev aria-label="<?php esc_attr_e( 'Previous article', 'semianalysis-mvp' ); ?>">
					<svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M11 4L6 9L11 14" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg>
				</button>

				<div class="sa-articles-carousel__viewport">
					<div class="sa-articles-carousel__fade sa-articles-carousel__fade--left" aria-hidden="true"></div>
					<div class="sa-articles-carousel__fade sa-articles-carousel__fade--right" aria-hidden="true"></div>
					<div class="sa-articles-carousel__track" data-sa-articles-track>
						<?php foreach ( $looped as $index => $article ) : ?>
							<div
								class="sa-articles-carousel__slide<?php echo $index === $count ? ' is-active' : ''; ?>"
								data-sa-article-slide
								aria-hidden="<?php echo $index === $count ? 'false' : 'true'; ?>"
							>
								<a
									class="sa-article-card sa-article-card--carousel"
									href="<?php echo esc_url( $article['url'] ); ?>"
									target="_blank"
									rel="noopener noreferrer"
								>
									<div class="sa-article-card__media<?php echo ! empty( $article['image'] ) ? ' sa-article-card__media--has-image' : ''; ?>" aria-hidden="true">
										<?php if ( ! empty( $article['image'] ) ) : ?>
											<img
												class="sa-article-card__image"
												src="<?php echo esc_url( $article['image'] ); ?>"
												alt=""
												loading="lazy"
												decoding="async"
											/>
											<div class="sa-article-card__media-overlay" aria-hidden="true"></div>
										<?php else : ?>
											<div class="sa-article-card__media-glow"></div>
										<?php endif; ?>
									</div>
									<div class="sa-article-card__body">
										<span class="sa-article-card__label">
											<span class="sa-article-card__label-dot" aria-hidden="true"></span>
											Free Research
										</span>
										<h3 class="sa-article-card__title"><?php echo esc_html( $article['title'] ); ?></h3>
										<p class="sa-article-card__excerpt"><?php echo esc_html( $article['excerpt'] ); ?></p>
										<span class="sa-article-card__meta">
											<span><?php echo esc_html( $article['date'] ); ?></span>
											<span class="sa-article-card__cta">Read on Substack →</span>
										</span>
									</div>
								</a>
							</div>
						<?php endforeach; ?>
					</div>
				</div>

				<button type="button" class="sa-articles-carousel__arrow sa-btn-lift" data-sa-articles-next aria-label="<?php esc_attr_e( 'Next article', 'semianalysis-mvp' ); ?>">
					<svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M7 4L12 9L7 14" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg>
				</button>
			</div>

			<div class="sa-articles-carousel__dots" role="tablist" aria-label="<?php esc_attr_e( 'Article slides', 'semianalysis-mvp' ); ?>">
				<?php foreach ( $articles as $index => $article ) : ?>
					<button
						type="button"
						class="sa-articles-carousel__dot<?php echo 0 === $index ? ' is-active' : ''; ?>"
						data-sa-article-dot
						data-index="<?php echo esc_attr( (string) $index ); ?>"
						aria-label="<?php echo esc_attr( sprintf( __( 'Go to article %1$d: %2$s', 'semianalysis-mvp' ), $index + 1, $article['title'] ) ); ?>"
						<?php echo 0 === $index ? ' aria-current="true"' : ''; ?>
					></button>
				<?php endforeach; ?>
			</div>

			<div class="sa-articles-carousel__more">
				<a class="sa-btn sa-btn--secondary" href="<?php echo esc_url( SA_MVP_NEWSLETTER_ARCHIVE ); ?>" target="_blank" rel="noopener noreferrer">View More</a>
			</div>
		</div>
	<?php endif; ?>

	<div class="sa-newsletter-band sa-glow-border sa-reveal sa-reveal--delay-2">
		<div class="sa-newsletter-band__glow" aria-hidden="true"></div>
		<div class="sa-newsletter-band__content">
			<p class="sa-newsletter-band__eyebrow">200K+ readers</p>
			<h3 class="sa-newsletter-band__title">Get free semiconductor &amp; AI analysis weekly</h3>
			<p class="sa-newsletter-band__desc">Join the newsletter for research-grade insights — your entry point into SemiAnalysis.</p>
		</div>
		<a class="sa-btn sa-btn--primary sa-newsletter-band__cta" href="<?php echo esc_url( SA_MVP_NEWSLETTER_SUBSCRIBE ); ?>" target="_blank" rel="noopener noreferrer">Subscribe Free</a>
	</div>
</section>
