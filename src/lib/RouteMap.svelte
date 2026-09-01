<script>
	import { stops, mapsUrl } from '$lib/stops.js';
	import 'leaflet/dist/leaflet.css';

	const courseLine = stops.map((s) => s.coords);

	/** @type {import('svelte/attachments').Attachment} */
	function leafletMap(node) {
		let map;
		let cancelled = false;

		import('leaflet').then((L) => {
			if (cancelled) return;

			map = L.map(node, { scrollWheelZoom: false });

			const dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			L.tileLayer(
				`https://{s}.basemaps.cartocdn.com/${dark ? 'dark_all' : 'light_all'}/{z}/{x}/{y}{r}.png`,
				{
					maxZoom: 19,
					subdomains: 'abcd',
					attribution:
						'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
				}
			).addTo(map);

			const marshal = getComputedStyle(node).getPropertyValue('--marshal').trim() || '#e8490f';

			L.polyline(courseLine, { color: marshal, weight: 4, opacity: 0.9 }).addTo(map);

			for (const stop of stops) {
				const icon = L.divIcon({
					className: 'cp-pin',
					html: `<span class="cp-pin-inner">${stop.n}</span>`,
					iconSize: [30, 30],
					iconAnchor: [15, 15]
				});
				L.marker(stop.coords, { icon, title: stop.name })
					.addTo(map)
					.bindPopup(
						`<strong>${stop.time} · ${stop.name}</strong><br>Goal: ${stop.goal}<br><a href="${mapsUrl(stop)}" target="_blank" rel="noopener">${stop.address}</a>`
					);
			}

			map.fitBounds(L.latLngBounds(stops.map((s) => s.coords)).pad(0.12));
		});

		return () => {
			cancelled = true;
			map?.remove();
		};
	}
</script>

<div class="map-wrap">
	<div class="map" {@attach leafletMap}></div>
	<div class="legend" aria-hidden="true">
		<span><i class="swatch walk"></i>on foot · 2.5 km</span>
	</div>
</div>

<style>
	.map-wrap {
		position: relative;
	}

	.map {
		height: clamp(340px, 55vh, 520px);
		border: 1px solid var(--hairline);
		background: var(--card);
	}

	.legend {
		display: flex;
		gap: 1.25rem;
		padding: 0.5rem 0.125rem;
		font-family: var(--mono);
		font-size: 0.7rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: var(--pavement);
	}

	.legend span {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
	}

	.swatch {
		display: inline-block;
		width: 1.4rem;
		height: 0;
	}

	.swatch.walk {
		border-top: 4px solid var(--marshal);
	}

	.map :global {
		/* warm the grayscale tiles toward the bib paper */
		@media (prefers-color-scheme: light) {
			.leaflet-tile-pane {
				filter: sepia(0.18) saturate(0.85) contrast(1.04);
			}
		}

		.cp-pin-inner {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 30px;
			height: 30px;
			border-radius: 50%;
			background: var(--marshal);
			color: #fff;
			font-family: var(--mono);
			font-weight: 600;
			font-size: 14px;
			border: 2px solid #fff;
			box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
		}

		.leaflet-popup-content {
			font-family: var(--display);
			font-size: 0.85rem;
			line-height: 1.45;
		}
	}
</style>
