<?php
/**
 * Industry ticker block render.
 *
 * @package SemiAnalysis_MVP
 */

$terms = array(
	'CUDA', 'CoWoS', 'HBM3e', 'Blackwell', 'TPU v7', 'NVL72',
	'Datacenter', 'Wafer Fab', 'Trainium', 'ROCm', 'InfiniBand',
	'ClusterMAX', '3nm', 'AI Accelerator', 'Neocloud',
);
$items = array_merge( $terms, $terms );
?>
<div class="sa-ticker" aria-hidden="true">
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
