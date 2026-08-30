<script>
	import { START_ISO, END_ISO } from '$lib/stops.js';

	const start = new Date(START_ISO).getTime();
	const end = new Date(END_ISO).getTime();

	let now = $state(Date.now());

	$effect(() => {
		const id = setInterval(() => {
			now = Date.now();
		}, 1000);
		return () => clearInterval(id);
	});

	let phase = $derived(now < start ? 'pre' : now < end ? 'live' : 'done');

	let parts = $derived.by(() => {
		const ms = Math.max(0, start - now);
		const s = Math.floor(ms / 1000);
		return {
			d: Math.floor(s / 86400),
			h: Math.floor((s % 86400) / 3600),
			m: Math.floor((s % 3600) / 60),
			s: s % 60
		};
	});

	/** @param {number} v */
	const pad = (v) => String(v).padStart(2, '0');
</script>

<div class="clock" role="timer" aria-live="off">
	{#if phase === 'pre'}
		<span class="label">Gun time in</span>
		<span class="digits">
			{parts.d}<small>d</small>
			{pad(parts.h)}<small>h</small>
			{pad(parts.m)}<small>m</small>
			{pad(parts.s)}<small>s</small>
		</span>
	{:else if phase === 'live'}
		<span class="digits live">RACE IN PROGRESS</span>
		<span class="label">pace yourselves, gentlemen</span>
	{:else}
		<span class="digits">FINISHED</span>
		<span class="label">see you at the wedding</span>
	{/if}
</div>

<style>
	.clock {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.15rem;
	}

	.label {
		font-family: var(--mono);
		font-size: 0.7rem;
		text-transform: uppercase;
		letter-spacing: 0.18em;
		color: var(--pavement);
	}

	.digits {
		font-family: var(--mono);
		font-weight: 600;
		font-size: clamp(1.1rem, 4.5vw, 1.6rem);
		letter-spacing: 0.04em;
		font-variant-numeric: tabular-nums;
	}

	.digits small {
		font-size: 0.6em;
		font-weight: 400;
		color: var(--pavement);
		margin-right: 0.35em;
	}

	.digits.live {
		color: var(--marshal);
	}
</style>
