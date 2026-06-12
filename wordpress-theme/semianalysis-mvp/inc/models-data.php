<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function sa_mvp_get_models() {
	$default_includes = array(
		'Historical time series with exportable charts and tables',
		'Forecast scenarios with quarterly and annual roll-ups',
		'Analyst commentary distilled from proprietary SemiAnalysis models',
		'Integration with broader industry model ecosystem',
	);

	$models = array(
		array(
			'slug'        => 'accelerator-model',
			'name'        => 'Accelerator & HBM',
			'tagline'     => 'Historical and forecast accelerator production',
			'description' => 'Gauge historical and future accelerator production by company and type, including HBM supply chain and customer shipments.',
			'category'    => 'compute',
			'featured'    => true,
			'specs'       => array(
				'dateRange'      => '2019 – 2030E',
				'granularity'    => 'Quarterly',
				'accessLevel'    => 'Institutional',
				'updateCadence'  => 'Monthly',
				'coverage'       => 'Accelerator production and HBM supply chain dynamics.',
				'entities'       => 'Nvidia, AMD, Google TPU, custom ASIC programs, and HBM suppliers.',
			),
		),
		array(
			'slug'        => 'tco-model',
			'name'        => 'AI Cloud TCO',
			'tagline'     => 'Ownership economics of AI Cloud infrastructure',
			'description' => 'Examine the ownership economics of AI Clouds that purchase accelerators and sell bare metal or cloud GPU compute.',
			'category'    => 'compute',
			'featured'    => true,
			'specs'       => array(
				'dateRange'     => '2018 – 2028E',
				'granularity'   => 'Quarterly & annual',
				'accessLevel'   => 'Institutional',
				'updateCadence' => 'Monthly',
				'coverage'      => 'AI cloud ownership economics and GPU compute pricing.',
				'entities'      => 'Neocloud operators, hyperscalers, and bare-metal GPU providers.',
			),
		),
		array(
			'slug'        => 'ai-networking-model',
			'name'        => 'AI Networking',
			'tagline'     => 'Networking layer of AI infrastructure',
			'description' => 'Granular visibility into switches, transceivers, cables, and scale-up/out networks for AI infrastructure.',
			'category'    => 'compute',
			'specs'       => array(
				'dateRange'     => '2018 – 2028E',
				'granularity'   => 'Quarterly',
				'accessLevel'   => 'Institutional',
				'updateCadence' => 'Monthly',
				'coverage'      => 'AI networking stack from switch to transceiver.',
				'entities'      => 'Switches, transceivers, DAC/AEC vendors, and rack-scale network topologies.',
			),
		),
		array(
			'slug'        => 'chipbook',
			'name'        => 'ChipBook',
			'tagline'     => 'Monthly AI & semiconductor industry tracker',
			'description' => 'Thousands of unique data points distilled into clear, actionable insights for investors and company decision makers.',
			'category'    => 'research',
			'featured'    => true,
			'href'        => '/products/chipbook/',
			'specs'       => array(
				'dateRange'     => 'Rolling 36 months',
				'granularity'   => 'Monthly',
				'accessLevel'   => 'Subscription',
				'updateCadence' => 'Monthly',
				'coverage'      => 'Cross-sector semiconductor and AI industry trackers.',
				'entities'      => '125+ actively tracked datasets across memory, logic, equipment, and end markets.',
			),
		),
		array(
			'slug'        => 'core-research',
			'name'        => 'Core Research',
			'tagline'     => 'Institutional semiconductor & AI research',
			'description' => 'Deep-dive analysis and subscription research across the semiconductor and AI supply chain.',
			'category'    => 'research',
			'specs'       => array(
				'dateRange'     => '2018 – present',
				'granularity'   => 'Article-level',
				'accessLevel'   => 'Subscription',
				'updateCadence' => 'Weekly',
				'coverage'      => 'Full-stack semiconductor and AI supply chain research.',
				'entities'      => 'OEMs, suppliers, hyperscalers, and equipment vendors.',
			),
		),
		array(
			'slug'        => 'datacenter-model',
			'name'        => 'Datacenter Industry',
			'tagline'     => 'Critical IT power capacity forecasting',
			'description' => 'Understand current and forecast datacenter critical IT power capacity for colocation and hyperscale datacenters.',
			'category'    => 'infrastructure',
			'specs'       => array(
				'dateRange'     => '2018 – 2028E',
				'granularity'   => 'Quarterly',
				'accessLevel'   => 'Institutional',
				'updateCadence' => 'Monthly',
				'coverage'      => 'Datacenter critical IT power capacity buildouts.',
				'entities'      => 'Colocation, hyperscale, and neocloud critical IT power buildouts.',
			),
		),
		array(
			'slug'        => 'energy-model',
			'name'        => 'Energy Model',
			'tagline'     => 'Power and energy demand forecasting',
			'description' => 'Model energy requirements driven by AI accelerator deployments and datacenter buildouts.',
			'category'    => 'infrastructure',
			'specs'       => array(
				'dateRange'     => '2018 – 2035E',
				'granularity'   => 'Annual',
				'accessLevel'   => 'Institutional',
				'updateCadence' => 'Quarterly',
				'coverage'      => 'Energy demand from AI infrastructure growth.',
				'entities'      => 'Grid interconnects, on-site generation, and regional power constraints.',
			),
		),
		array(
			'slug'        => 'foundry-industry-model',
			'name'        => 'Foundry Industry',
			'tagline'     => 'Foundry capacity and node transitions',
			'description' => 'Bottoms-up visibility into foundry capacity, process nodes, and wafer supply across leading manufacturers.',
			'category'    => 'supply-chain',
			'specs'       => array(
				'dateRange'     => '2018 – 2028E',
				'granularity'   => 'Quarterly',
				'accessLevel'   => 'Institutional',
				'updateCadence' => 'Monthly',
				'coverage'      => 'Foundry capacity and advanced node transitions.',
				'entities'      => 'TSMC, Samsung, Intel Foundry, and advanced node transition timelines.',
			),
		),
		array(
			'slug'        => 'industrials-model',
			'name'        => 'Industrials Model',
			'tagline'     => 'Industrial semiconductor demand',
			'description' => 'Track semiconductor content and demand across industrial end markets and applications.',
			'category'    => 'supply-chain',
			'specs'       => array(
				'dateRange'     => '2018 – 2028E',
				'granularity'   => 'Quarterly',
				'accessLevel'   => 'Institutional',
				'updateCadence' => 'Monthly',
				'coverage'      => 'Industrial semiconductor content and demand.',
				'entities'      => 'Industrial OEMs and end-market applications.',
			),
		),
		array(
			'slug'        => 'memory-model',
			'name'        => 'Memory Model',
			'tagline'     => 'Memory market supply and demand',
			'description' => 'Forecast memory bit demand, pricing, and supply across DRAM, NAND, and HBM.',
			'category'    => 'supply-chain',
			'specs'       => array(
				'dateRange'     => '2018 – 2028E',
				'granularity'   => 'Quarterly',
				'accessLevel'   => 'Institutional',
				'updateCadence' => 'Monthly',
				'coverage'      => 'Memory bit supply/demand balances.',
				'entities'      => 'DRAM, NAND, and HBM suppliers.',
			),
		),
		array(
			'slug'        => 'space-dc-tco-model',
			'name'        => 'Space DC TCO Model',
			'tagline'     => 'Space datacenter economics',
			'description' => 'Analyze total cost of ownership for space-based and next-generation datacenter concepts.',
			'category'    => 'infrastructure',
			'specs'       => array(
				'dateRange'     => '2026 – 2040E',
				'granularity'   => 'Annual',
				'accessLevel'   => 'Institutional',
				'updateCadence' => 'Quarterly',
				'coverage'      => 'Space and next-gen datacenter TCO scenarios.',
				'entities'      => 'Space DC concepts and orbital compute economics.',
			),
		),
		array(
			'slug'        => 'tokenomics-model',
			'name'        => 'Tokenomics Model',
			'tagline'     => 'AI inference economics',
			'description' => 'Model token economics, inference costs, and unit economics across AI deployment scenarios.',
			'category'    => 'compute',
			'specs'       => array(
				'dateRange'     => '2022 – 2028E',
				'granularity'   => 'Monthly',
				'accessLevel'   => 'Institutional',
				'updateCadence' => 'Monthly',
				'coverage'      => 'Inference cost and token economics.',
				'entities'      => 'Frontier model providers, inference APIs, and GPU-hour economics.',
			),
		),
		array(
			'slug'        => 'vr-nvl72-model',
			'name'        => 'VR NVL72 BoM & Power Model',
			'tagline'     => 'Rack-level bill of materials and power',
			'description' => 'Detailed bill of materials and power analysis for next-generation AI rack architectures.',
			'category'    => 'compute',
			'specs'       => array(
				'dateRange'     => '2024 – 2028E',
				'granularity'   => 'SKU-level',
				'accessLevel'   => 'Institutional',
				'updateCadence' => 'Quarterly',
				'coverage'      => 'Rack-level BoM and power for AI systems.',
				'entities'      => 'NVL72-class rack architectures and component suppliers.',
			),
		),
		array(
			'slug'        => 'wafer-fab-model',
			'name'        => 'Wafer Fab Equipment',
			'tagline'     => 'Semiconductor equipment sales forecasting',
			'description' => 'Bottoms-up layer-by-layer flow to accurately forecast semiconductor equipment sales.',
			'category'    => 'supply-chain',
			'specs'       => array(
				'dateRange'     => '2018 – 2028E',
				'granularity'   => 'Quarterly',
				'accessLevel'   => 'Institutional',
				'updateCadence' => 'Monthly',
				'coverage'      => 'Semiconductor equipment demand by fab layer.',
				'entities'      => 'Lithography, etch, deposition, and inspection tool demand.',
			),
		),
	);

	$default_overview = 'This institutional model combines proprietary datasets, forecast scenarios, and analyst commentary to support investment and operational decisions across the semiconductor and AI stack.';

	$audience_by_slug = array(
		'accelerator-model' => array(
			'investors'  => 'Model accelerator supply/demand dynamics to validate investment theses across Nvidia, AMD, Google, and custom silicon.',
			'executives' => 'Inform capacity planning, partnership strategy, and product roadmap decisions with bottoms-up production forecasts.',
		),
		'tco-model'         => array(
			'investors'  => 'Evaluate neocloud and hyperscaler unit economics, capex intensity, and margin structures across GPU cloud providers.',
			'executives' => 'Optimize build-vs-buy decisions, pricing strategy, and infrastructure investments for AI cloud operations.',
		),
		'chipbook'          => array(
			'investors'  => 'Idea generation tool, investment thesis validation, and portfolio position tracking.',
			'executives' => 'Resource allocation optimization, strategic R&D investments, and capacity planning.',
		),
	);

	foreach ( $models as &$model ) {
		if ( empty( $model['includes'] ) ) {
			$model['includes'] = $default_includes;
		}
		if ( empty( $model['overview'] ) ) {
			$model['overview'] = $default_overview;
		}
		if ( empty( $model['audience'] ) && isset( $audience_by_slug[ $model['slug'] ] ) ) {
			$model['audience'] = $audience_by_slug[ $model['slug'] ];
		}
		if ( empty( $model['href'] ) ) {
			$model['href'] = home_url( '/models/?model=' . $model['slug'] );
		}
	}
	unset( $model );

	return $models;
}

function sa_mvp_model_category_labels() {
	return array(
		'compute'       => 'AI compute',
		'infrastructure' => 'Infrastructure',
		'supply-chain'  => 'Supply chain',
		'research'      => 'Research',
	);
}

function sa_mvp_model_category_meta() {
	return array(
		'compute'        => array(
			'accent' => 'cobalt',
			'icon'   => 'M8 36L16 12L24 28L32 8L40 32',
		),
		'infrastructure' => array(
			'accent' => 'mint',
			'icon'   => 'M10 38V18L24 10L38 18V38H10Z',
		),
		'supply-chain'   => array(
			'accent' => 'amber',
			'icon'   => 'M24 10V38M10 24H38',
		),
		'research'       => array(
			'accent' => 'coral',
			'icon'   => 'M12 34L24 14L36 34',
		),
	);
}

function sa_mvp_homepage_carousel_models() {
	$slugs  = array(
		'accelerator-model',
		'tco-model',
		'datacenter-model',
		'wafer-fab-model',
		'ai-networking-model',
	);
	$models = sa_mvp_get_models();
	$by_slug = array();

	foreach ( $models as $model ) {
		$by_slug[ $model['slug'] ] = $model;
	}

	$carousel = array();
	foreach ( $slugs as $slug ) {
		if ( isset( $by_slug[ $slug ] ) ) {
			$carousel[] = $by_slug[ $slug ];
		}
	}

	return $carousel;
}

function sa_mvp_render_model_icon( $slug, $category = 'compute' ) {
	$icons = array(
		'accelerator-model' => array(
			'<path d="M8 36L16 12L24 28L32 8L40 32" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />',
			'<path d="M8 24H40M12 18H36M10 30H38" stroke="currentColor" stroke-width="1" stroke-opacity="0.45" />',
		),
		'tco-model' => array(
			'<rect x="10" y="14" width="28" height="20" rx="2" stroke="currentColor" stroke-width="1.5" fill="none" />',
			'<path d="M16 14V10H32V14M20 24H28M20 28H26" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />',
			'<circle cx="34" cy="34" r="6" stroke="currentColor" stroke-width="1.5" fill="none" />',
		),
		'datacenter-model' => array(
			'<path d="M10 38V18L24 10L38 18V38H10Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />',
			'<path d="M18 38V26H30V38M20 22H28" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />',
		),
		'wafer-fab-model' => array(
			'<circle cx="24" cy="24" r="14" stroke="currentColor" stroke-width="1.5" fill="none" />',
			'<circle cx="24" cy="24" r="8" stroke="currentColor" stroke-width="1" stroke-opacity="0.5" fill="none" />',
			'<path d="M24 10V38M10 24H38" stroke="currentColor" stroke-width="1" stroke-opacity="0.35" />',
		),
		'ai-networking-model' => array(
			'<circle cx="24" cy="12" r="4" stroke="currentColor" stroke-width="1.5" fill="none" />',
			'<circle cx="12" cy="34" r="4" stroke="currentColor" stroke-width="1.5" fill="none" />',
			'<circle cx="36" cy="34" r="4" stroke="currentColor" stroke-width="1.5" fill="none" />',
			'<path d="M24 16L12 30M24 16L36 30M12 34H36" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />',
		),
		'chipbook' => array(
			'<path d="M12 34L24 14L36 34" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />',
		),
	);

	$paths = $icons[ $slug ] ?? null;

	if ( ! $paths ) {
		$meta  = sa_mvp_model_category_meta();
		$paths = array(
			'<path d="' . esc_attr( $meta[ $category ]['icon'] ?? 'M12 34L24 14L36 34' ) . '" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />',
		);
	}

	echo '<svg viewBox="0 0 48 48" fill="none" aria-hidden="true" class="sa-model-icon">';
	// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- controlled SVG fragments.
	echo implode( '', $paths );
	echo '</svg>';
}

function sa_mvp_stack_layers() {
	return array(
		array( 'label' => 'Silicon & memory', 'color' => 'amber' ),
		array( 'label' => 'Packaging & networking', 'color' => 'cobalt' ),
		array( 'label' => 'Datacenter & power', 'color' => 'mint' ),
		array( 'label' => 'Economics & tokens', 'color' => 'coral' ),
	);
}
