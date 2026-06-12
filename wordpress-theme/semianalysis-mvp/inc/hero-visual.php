<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function sa_mvp_render_hero_visual( $args = array() ) {
	$class    = $args['class'] ?? 'sa-hero-visual';
	$id       = $args['id'] ?? '';
	$icon_url = SA_MVP_URI . '/assets/images/site-icon.png';

	$ring_nodes = array(
		array( 'angle' => -70, 'orbit' => 1, 'color' => 'cobalt', 'size' => 9 ),
		array( 'angle' => 10, 'orbit' => 1, 'color' => 'cobalt', 'size' => 7 ),
		array( 'angle' => 55, 'orbit' => 2, 'color' => 'amber', 'size' => 8 ),
		array( 'angle' => 130, 'orbit' => 2, 'color' => 'mint', 'size' => 7 ),
		array( 'angle' => 195, 'orbit' => 2, 'color' => 'amber', 'size' => 7 ),
		array( 'angle' => 250, 'orbit' => 1, 'color' => 'cobalt', 'size' => 7 ),
		array( 'angle' => 310, 'orbit' => 3, 'color' => 'coral', 'size' => 6 ),
	);

	$orbit_radii  = array( 1 => 34, 2 => 42, 3 => 48 );
	$orbit_speeds = array( 1 => 140, 2 => 95, 3 => 65 );
	$orbit_groups = array( 1 => array(), 2 => array(), 3 => array() );

	foreach ( $ring_nodes as $node ) {
		$orbit_groups[ $node['orbit'] ][] = $node;
	}
	?>
	<div
		class="<?php echo esc_attr( $class ); ?>"
		<?php echo $id ? 'id="' . esc_attr( $id ) . '"' : ''; ?>
		data-sa-hero-visual
		aria-hidden="true"
	>
		<div class="sa-hero-visual__stage">
			<div class="sa-hero-visual__perimeter"></div>
			<div class="sa-hero-visual__glow"></div>

			<div class="sa-hero-visual__inflow">
				<?php
				$dot_colors = array( 'amber', 'cobalt', 'mint', 'coral' );
				for ( $i = 0; $i < 48; $i++ ) :
					$angle    = ( $i / 48 ) * 360;
					$delay    = ( $i / 48 ) * 3.2;
					$duration = 2.8 + ( $i % 5 ) * 0.35;
					$color    = $dot_colors[ $i % 4 ];
					$size     = 2 + ( $i % 3 );
					?>
					<div class="sa-hero-visual__inflow-arm" style="transform: rotate(<?php echo esc_attr( (string) $angle ); ?>deg)">
						<span
							class="sa-hero-visual__dot sa-hero-visual__dot--<?php echo esc_attr( $color ); ?>"
							style="
								--sa-size: <?php echo esc_attr( (string) $size ); ?>px;
								animation-duration: <?php echo esc_attr( (string) $duration ); ?>s;
								animation-delay: <?php echo esc_attr( (string) $delay ); ?>s;
							"
						></span>
					</div>
				<?php endfor; ?>
			</div>

			<div class="sa-hero-visual__ripple"></div>
			<div class="sa-hero-visual__ripple sa-hero-visual__ripple--2"></div>
			<div class="sa-hero-visual__ripple sa-hero-visual__ripple--3"></div>

			<div class="sa-hero-visual__ring sa-hero-visual__ring--outer"></div>
			<div class="sa-hero-visual__ring sa-hero-visual__ring--mid"></div>
			<div class="sa-hero-visual__ring sa-hero-visual__ring--inner"></div>
			<div class="sa-hero-visual__sweep"></div>

			<svg class="sa-hero-visual__spokes" viewBox="0 0 100 100" aria-hidden="true">
				<?php foreach ( $ring_nodes as $node ) : ?>
					<?php
					$rad   = deg2rad( $node['angle'] );
					$orbit = $orbit_radii[ $node['orbit'] ];
					$x2    = 50 + $orbit * cos( $rad );
					$y2    = 50 + $orbit * sin( $rad );
					?>
					<line
						x1="50"
						y1="50"
						x2="<?php echo esc_attr( (string) round( $x2, 2 ) ); ?>"
						y2="<?php echo esc_attr( (string) round( $y2, 2 ) ); ?>"
						class="sa-hero-visual__spoke sa-hero-visual__spoke--<?php echo esc_attr( $node['color'] ); ?>"
					/>
				<?php endforeach; ?>
			</svg>

			<?php foreach ( $orbit_groups as $orbit_id => $nodes ) : ?>
				<?php if ( empty( $nodes ) ) : continue; endif; ?>
				<div
					class="sa-hero-visual__orbit sa-hero-visual__orbit--<?php echo esc_attr( (string) $orbit_id ); ?><?php echo 2 === $orbit_id ? ' sa-hero-visual__orbit--reverse' : ''; ?>"
					style="--sa-orbit-dur: <?php echo esc_attr( (string) $orbit_speeds[ $orbit_id ] ); ?>s"
				>
					<?php foreach ( $nodes as $node ) : ?>
						<div
							class="sa-hero-visual__orbit-node"
							style="height: <?php echo esc_attr( (string) $orbit_radii[ $node['orbit'] ] ); ?>%; transform: rotate(<?php echo esc_attr( (string) $node['angle'] ); ?>deg)"
						>
							<span
								class="sa-hero-visual__orbit-dot sa-hero-visual__orbit-dot--<?php echo esc_attr( $node['color'] ); ?>"
								style="width: <?php echo esc_attr( (string) $node['size'] ); ?>px; height: <?php echo esc_attr( (string) $node['size'] ); ?>px"
							></span>
						</div>
					<?php endforeach; ?>
				</div>
			<?php endforeach; ?>

			<div class="sa-hero-visual__core-ring"></div>
			<div class="sa-hero-visual__core">
				<img src="<?php echo esc_url( $icon_url ); ?>" alt="" width="96" height="96" loading="eager" />
			</div>
		</div>
	</div>
	<?php
}
