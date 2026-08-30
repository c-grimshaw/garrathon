<script>
	import { stops, finish, mapsUrl } from '$lib/stops.js';
</script>

<ol class="course">
	{#each stops as stop (stop.n)}
		<li class="cp" class:downtown={stop.leg === 'downtown'}>
			<div class="marker">
				<span class="num">{stop.n}</span>
			</div>
			<div class="body">
				<p class="meta">
					<span class="time">{stop.time}</span>
					<span class="split">{stop.split === 'UBER' ? '⇅ UBER' : stop.split}</span>
				</p>
				<h3>{stop.name}</h3>
				<p class="goal"><span>Goal</span>{stop.goal}</p>
				<p class="details">{stop.details}</p>
				<p class="fine">
					<a href={mapsUrl(stop)} target="_blank" rel="noopener">{stop.address}</a>
					{#if stop.phone}
						· <a href="tel:+1{stop.phone.replace(/\D/g, '')}">{stop.phone}</a>
					{/if}
					· {stop.approach}
				</p>
			</div>
		</li>
	{/each}
	<li class="cp finish">
		<div class="marker"><span class="num">🏁</span></div>
		<div class="body">
			<h3>{finish.name}</h3>
			<p class="details">{finish.details}</p>
		</div>
	</li>
</ol>

<style>
	.course {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.cp {
		display: grid;
		grid-template-columns: 2.5rem 1fr;
		gap: 1rem;
		position: relative;
		padding-bottom: 2.25rem;
	}

	/* the course line */
	.cp::before {
		content: '';
		position: absolute;
		left: calc(1.25rem - 2px);
		top: 2.5rem;
		bottom: -0.25rem;
		width: 4px;
		background: var(--marshal);
	}

	/* the Uber hop into checkpoint 7 is a transfer, not a walk */
	.cp:nth-child(6)::before {
		background: repeating-linear-gradient(
			to bottom,
			var(--transfer) 0 6px,
			transparent 6px 14px
		);
		width: 3px;
		left: calc(1.25rem - 1.5px);
	}

	.cp.finish::before {
		display: none;
	}

	.marker {
		position: relative;
		z-index: 1;
	}

	.num {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 50%;
		background: var(--marshal);
		color: #fff;
		font-family: var(--mono);
		font-weight: 600;
		font-size: 1.05rem;
	}

	.downtown .num {
		background: var(--transfer);
	}

	.finish .num {
		background: var(--ink);
		font-size: 1.2rem;
	}

	.meta {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		margin: 0 0 0.1rem;
		font-family: var(--mono);
		font-size: 0.75rem;
		letter-spacing: 0.08em;
	}

	.time {
		font-weight: 600;
		color: var(--marshal);
	}

	.downtown .time {
		color: var(--transfer);
	}

	.finish .time {
		color: var(--ink);
	}

	.split {
		color: var(--pavement);
	}

	h3 {
		margin: 0;
		font-size: clamp(1.25rem, 4vw, 1.6rem);
		font-weight: 800;
		font-variation-settings: 'wdth' 75;
		text-transform: uppercase;
		letter-spacing: 0.01em;
		line-height: 1.1;
	}

	.goal {
		margin: 0.4rem 0 0;
		font-size: 0.95rem;
		font-weight: 600;
	}

	.goal span {
		font-family: var(--mono);
		font-size: 0.65rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.14em;
		color: var(--marshal);
		margin-right: 0.5rem;
	}

	.downtown .goal span {
		color: var(--transfer);
	}

	.details {
		margin: 0.35rem 0 0;
		font-size: 0.92rem;
		color: var(--pavement);
	}

	.fine {
		margin: 0.45rem 0 0;
		font-family: var(--mono);
		font-size: 0.72rem;
		color: var(--pavement);
	}

	.fine a {
		color: inherit;
		text-underline-offset: 2px;
	}
</style>
