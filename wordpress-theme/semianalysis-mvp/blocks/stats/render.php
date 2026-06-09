<?php
/**
 * Stats row block render.
 *
 * @package SemiAnalysis_MVP
 */

$stats = array(
	array( 'label' => 'Industry Models', 'value' => '6+' ),
	array( 'label' => 'Tracked Datasets', 'value' => '125+' ),
	array( 'label' => 'Monthly ChipBook', 'value' => '50 pg' ),
	array( 'label' => 'Reader Audience', 'value' => '200K+' ),
);
?>
<dl class="sa-stats">
	<?php foreach ( $stats as $stat ) : ?>
		<div class="sa-stats__item sa-animate-in">
			<dt class="sa-stats__label"><?php echo esc_html( $stat['label'] ); ?></dt>
			<dd class="sa-stats__value"><?php echo esc_html( $stat['value'] ); ?></dd>
		</div>
	<?php endforeach; ?>
</dl>
