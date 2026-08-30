// Single source of truth for the course. Order = schedule order = pin order.
// leg: 'west' = Wellington West walking line, 'downtown' = post-Uber Rideau St line.

export const stops = [
	{
		n: 1,
		time: '3:00 PM',
		name: 'LumberJaxe Axe Throwing Hall',
		tagline: 'Arrive sober, leave a legend.',
		address: '250 City Centre Ave #232',
		phone: '(613) 702-8175',
		coords: [45.40935, -75.71925],
		leg: 'west',
		approach: 'Start line',
		details:
			'One booked session, ~75 minutes. Trophy ceremony for top thrower.',
		split: '0.0 km'
	},
	{
		n: 2,
		time: '4:20 PM',
		name: 'Beyond the Pale Brewing Company',
		tagline: 'First aid station.',
		address: '250 City Centre Ave, Bay 106',
		coords: [45.40895, -75.71855],
		leg: 'west',
		approach: 'Same building · 30-second walk',
		details: 'One round or a beer flight. 30 minutes. Wheels up at 4:50.',
		split: '0.03 km'
	},
	{
		n: 3,
		time: '5:00 PM',
		name: 'Tooth and Nail Brewing Company',
		tagline: 'The Fortitude stout is the house legend.',
		address: '3 Irving Ave',
		coords: [45.40551, -75.72236],
		leg: 'west',
		approach: '10-minute walk along Wellington',
		details: 'One pint. Pinsas available if anyone needs ballast. Out by 5:40.',
		split: '0.9 km'
	},
	{
		n: 4,
		time: '5:50 PM',
		name: 'West Park Bowling',
		tagline: 'Loser buys the first chalet round.',
		address: '1205 Wellington St W',
		phone: '(613) 728-0933',
		coords: [45.40038, -75.73056],
		leg: 'west',
		approach: '12-minute walk',
		details: 'Two lanes booked for 6:00, ~70 minutes. Retro alley, full bar.',
		split: '1.9 km'
	},
	{
		n: 5,
		time: '7:15 PM',
		name: 'Elmdale Oyster House & Tavern',
		tagline: 'Dinner — the main event.',
		address: '1084 Wellington St W',
		phone: '(613) 728-2848',
		coords: [45.40301, -75.72519],
		leg: 'west',
		approach: '4-minute walk',
		details:
			'Reserved table. Oysters, fried chicken, steaks. Ninety minutes; bills paid by 8:45.',
		split: '2.4 km'
	},
	{
		n: 6,
		time: '8:45 PM',
		name: 'Moo Shu Ice Cream',
		tagline: 'Cones in hand.',
		address: '1130 Wellington St W',
		coords: [45.40182, -75.72659],
		leg: 'west',
		approach: '2-minute walk',
		details: 'Call the Ubers from the line. Departing 9:10.',
		split: '2.5 km'
	},
	{
		n: 7,
		time: '9:30 PM',
		name: 'LCBO Rideau',
		tagline: 'The supply run.',
		address: '275 Rideau St',
		coords: [45.42896, -75.68647],
		leg: 'downtown',
		approach: 'One Uber hop downtown',
		details:
			'The big one with the Vintages cellar. Full chalet haul + ice, straight into the staged car. Doors close at 10:00 sharp — no stragglers.',
		split: 'UBER'
	},
	{
		n: 8,
		time: '10:10 PM',
		name: 'Sandbox VR',
		tagline: 'Grand finale.',
		address: '45 Rideau St #200',
		phone: '(613) 454-7700',
		coords: [45.42586, -75.69337],
		leg: 'downtown',
		approach: '5-minute walk',
		details:
			'Pre-booked session, ~75 minutes. Full-body VR — zombies, deadwood, or space marines.',
		split: '2.9 km'
	}
];

export const finish = {
	time: '11:45 PM',
	name: 'Road Move to the Chalet',
	details:
		'Shuttle / designated driver departs from Rideau St. Cooler loaded. Night phase begins.'
};

// Race start: Sept 9, 3:00 PM Eastern (EDT, UTC-4)
export const START_ISO = '2026-09-09T15:00:00-04:00';
export const END_ISO = '2026-09-09T23:45:00-04:00';

// Replace with the real best man before the big day.
export const bestMan = {
	name: 'THE BEST MAN', // BEST_MAN_NAME placeholder
	phone: '+16135550199' // BEST_MAN_PHONE placeholder
};

/** @param {{ name: string, address: string }} stop */
export function mapsUrl(stop) {
	return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(stop.name + ', ' + stop.address + ', Ottawa')}`;
}
