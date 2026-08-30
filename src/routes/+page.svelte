<script>
	import '../app.css';
	import Countdown from '$lib/Countdown.svelte';
	import RouteMap from '$lib/RouteMap.svelte';
	import Schedule from '$lib/Schedule.svelte';
	import { bestMan } from '$lib/stops.js';

	const smsHref = `sms:${bestMan.phone}?&body=${encodeURIComponent("I'm in for the Garr-athon 09.09 🏁")}`;
	const telHref = `tel:${bestMan.phone}`;
</script>

<main>
	<!-- ——— The bib ——— -->
	<header class="bib-zone">
		<div class="bib">
			<i class="pin tl"></i><i class="pin tr"></i><i class="pin bl"></i><i class="pin br"></i>
			<div class="sponsor">
				<span>GARR·ATHON</span>
				<span>OTTAWA</span>
			</div>
			<p class="event-line">One groom · 8 checkpoints · 2.9 km on foot</p>
			<p class="bib-number">09.09</p>
			<p class="bib-name">McDonald</p>
			<div class="bib-clock">
				<Countdown />
			</div>
		</div>
		<div class="cta-row">
			<a class="cta" href={smsHref}>RSVP: text the best man</a>
			<a class="cta ghost" href={telHref}>Emergency: call {bestMan.name}</a>
		</div>
		<button class="tracker" disabled>
			<span class="tracker-dot"></span>
			Live Groom Tracker (we bugged his phone)
			<span class="tracker-status">offline until 09.09</span>
		</button>
	</header>

	<!-- ——— The course ——— -->
	<section id="course">
		<h2><span class="kicker">The course</span>Wellington West, then downtown</h2>
		<RouteMap />
	</section>

	<!-- ——— Checkpoints ——— -->
	<section id="checkpoints">
		<h2><span class="kicker">Checkpoints</span>September 9 · gun at 3:00 PM</h2>
		<Schedule />
	</section>

	<!-- ——— Fine print ——— -->
	<footer>
		<h2><span class="kicker">Fine print</span>Rules &amp; logistics</h2>
		<p class="one-rule">One rule: show up sober for the axe throwing.</p>
		<ul>
			<li>One walkable line along Wellington West, axes to ice cream.</li>
			<li>Two paid rides all day: the Uber downtown (~9:15 PM) and the road move.</li>
			<li>Designated driver's car staged near Rideau St, cooler in the trunk.</li>
			<li>Booked in advance: LumberJaxe (3:00), West Park (6:00), Elmdale (7:15), Sandbox VR (~10:15).</li>
			<li>Rain plan: none. Every checkpoint is indoors.</li>
		</ul>
		<p class="colophon">GARR·ATHON 🏁</p>
	</footer>
</main>

<style>
	main {
		max-width: 44rem;
		margin: 0 auto;
		padding: 1.5rem 1.25rem 4rem;
	}

	/* ——— bib ——— */
	.bib-zone {
		padding: 2rem 0 1rem;
	}

	.bib {
		position: relative;
		background: var(--bib);
		color: #141412;
		border: 1px solid rgba(20, 20, 18, 0.25);
		border-radius: 6px;
		padding: 0 1.25rem 1.35rem;
		text-align: center;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
	}

	@media (prefers-color-scheme: dark) {
		.bib {
			box-shadow: 0 14px 40px rgba(0, 0, 0, 0.55);
		}
	}

	.pin {
		position: absolute;
		width: 9px;
		height: 9px;
		border-radius: 50%;
		background: radial-gradient(circle at 35% 35%, #d9d5cc, #8f8a80);
		box-shadow: inset 0 0 0 1.5px rgba(20, 20, 18, 0.45);
	}

	.pin.tl { top: 10px; left: 10px; }
	.pin.tr { top: 10px; right: 10px; }
	.pin.bl { bottom: 10px; left: 10px; }
	.pin.br { bottom: 10px; right: 10px; }

	.sponsor {
		display: flex;
		justify-content: space-between;
		margin: 0 -1.25rem;
		padding: 0.55rem 1.6rem;
		background: var(--marshal);
		color: #fff;
		border-radius: 5px 5px 0 0;
		font-family: var(--mono);
		font-weight: 600;
		font-size: 0.75rem;
		letter-spacing: 0.22em;
	}

	.event-line {
		margin: 1rem 0 0;
		font-family: var(--mono);
		font-size: 0.68rem;
		text-transform: uppercase;
		letter-spacing: 0.16em;
		color: #6e6a62;
	}

	.bib-number {
		margin: 0;
		font-size: clamp(5.5rem, 26vw, 11rem);
		font-weight: 900;
		font-variation-settings: 'wdth' 62;
		line-height: 0.95;
		letter-spacing: 0.01em;
	}

	.bib-name {
		margin: 0 0 0.9rem;
		font-size: clamp(1.3rem, 6vw, 2rem);
		font-weight: 700;
		font-variation-settings: 'wdth' 125;
		text-transform: uppercase;
		letter-spacing: 0.35em;
		text-indent: 0.35em;
	}

	.bib-clock {
		border-top: 1px dashed rgba(20, 20, 18, 0.3);
		padding-top: 0.9rem;
	}

	.cta-row {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.75rem;
		margin-top: 1.5rem;
	}

	.cta {
		font-family: var(--mono);
		font-size: 0.78rem;
		font-weight: 600;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		text-decoration: none;
		padding: 0.8rem 1.3rem;
		background: var(--marshal);
		color: #fff;
		border-radius: 3px;
	}

	.cta.ghost {
		background: transparent;
		color: var(--ink);
		border: 1px solid var(--hairline);
	}

	.tracker {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin: 0.75rem auto 0;
		padding: 0.7rem 1.2rem;
		background: transparent;
		border: 1px dashed var(--hairline);
		border-radius: 3px;
		font-family: var(--mono);
		font-size: 0.72rem;
		font-weight: 600;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--pavement);
		opacity: 0.55;
		cursor: not-allowed;
	}

	.tracker-dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: var(--pavement);
	}

	.tracker-status {
		font-weight: 400;
		letter-spacing: 0.05em;
		text-transform: none;
	}

	.one-rule {
		margin: 0 0 1rem;
		font-size: 1.05rem;
		font-weight: 700;
	}

	/* ——— sections ——— */
	section,
	footer {
		margin-top: 4rem;
	}

	h2 {
		display: flex;
		flex-direction: column;
		gap: 0.3rem;
		margin: 0 0 1.5rem;
		font-size: clamp(1.6rem, 5.5vw, 2.2rem);
		font-weight: 800;
		font-variation-settings: 'wdth' 72;
		text-transform: uppercase;
		line-height: 1.05;
	}

	.kicker {
		font-family: var(--mono);
		font-size: 0.7rem;
		font-weight: 600;
		font-variation-settings: 'wdth' 100;
		letter-spacing: 0.2em;
		color: var(--marshal);
	}

	footer ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	footer li {
		padding: 0.55rem 0;
		border-bottom: 1px solid var(--hairline);
		font-size: 0.9rem;
		color: var(--pavement);
	}

	.colophon {
		margin-top: 2.5rem;
		text-align: center;
		font-family: var(--mono);
		font-size: 0.7rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--pavement);
	}
</style>
