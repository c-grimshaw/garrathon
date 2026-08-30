<script>
	import { stops, mapsUrl } from '$lib/stops.js';
	import 'leaflet/dist/leaflet.css';

	const westLine = stops.filter((s) => s.leg === 'west').map((s) => s.coords);
	const downtownLine = stops.filter((s) => s.leg === 'downtown').map((s) => s.coords);
	// dashed connector: last west stop -> first downtown stop (the Uber hop)
	const uberHop = [westLine[westLine.length - 1], downtownLine[0]];

	/** @type {import('svelte/attachments').Attachment} */
	function leafletMap(node) {
		let map;
		let cancelled = false;

		import('leaflet').then((L) => {
			if (cancelled) return;

			map = L.map(node, { scrollWheelZoom: false });

			L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
				maxZoom: 19,
				attribution:
					'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			}).addTo(map);

			const marshal = getComputedStyle(node).getPropertyValue('--marshal').trim() || '#e8490f';
			const transfer = getComputedStyle(node).getPropertyValue('--transfer').trim() || '#2b50c8';

			L.polyline(westLine, { color: marshal, weight: 4, opacity: 0.9 }).addTo(map);
			L.polyline(uberHop, {
				color: transfer,
				weight: 3,
				opacity: 0.8,
				dashArray: '2 10'
			}).addTo(map);
			L.polyline(downtownLine, { color: marshal, weight: 4, opacity: 0.9 }).addTo(map);

			for (const stop of stops) {
				const icon = L.divIcon({
					className: 'cp-pin',
					html: `<span class="cp-pin-inner${stop.leg === 'downtown' ? ' cp-pin-downtown' : ''}">${stop.n}</span>`,
					iconSize: [30, 30],
					iconAnchor: [15, 15]
				});
				L.marker(stop.coords, { icon, title: stop.name })
					.addTo(map)
					.bindPopup(
						`<strong>${stop.time} — ${stop.name}</strong><br>${stop.tagline}<br><a href="${mapsUrl(stop)}" target="_blank" rel="noopener">${stop.address}</a>`
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
		<span><i class="swatch walk"></i>on foot · 2.9 km</span>
		<span><i class="swatch uber"></i>uber transfer</span>
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

	.swatch.uber {
		border-top: 3px dashed var(--transfer);
	}

	.map :global {
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

		.cp-pin-inner.cp-pin-downtown {
			background: var(--transfer);
		}

		.leaflet-popup-content {
			font-family: var(--display);
			font-size: 0.85rem;
			line-height: 1.45;
		}
	}
</style>
