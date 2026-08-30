<ul class="rules">
	<li>Short stints at the bars — the schedule is the pace car. Pace yourselves, gentlemen.</li>
	<li>Arrive sober for the axes. This one is not negotiable.</li>
	<li>Eat the pinsa. Drink the water. Dinner is the main event, not the finish line.</li>
	<li>LCBO doors close at 10:00 sharp. No stragglers.</li>
	<li>Nobody tells the groom what the VR game is. Grand finale means surprise.</li>
</ul>

<style>
	.rules {
		list-style: none;
		margin: 0;
		padding: 0;
		counter-reset: rule;
	}

	.rules li {
		counter-increment: rule;
		display: flex;
		gap: 0.85rem;
		align-items: baseline;
		padding: 0.7rem 0;
		border-bottom: 1px solid var(--hairline);
		font-size: 0.95rem;
	}

	.rules li::before {
		content: 'R' counter(rule);
		font-family: var(--mono);
		font-size: 0.7rem;
		font-weight: 600;
		color: var(--marshal);
		letter-spacing: 0.08em;
		flex-shrink: 0;
	}
</style>
