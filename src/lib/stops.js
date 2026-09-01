// Single source of truth for the course. Order = schedule order = pin order.

export const stops = [
	{
		n: 1,
		time: '3:00 PM',
		name: 'LumberJaxe Axe Throwing Hall',
		address: '250 City Centre Ave #232',
		phone: '(613) 702-8175',
		coords: [45.40935, -75.71925],
		approach: 'Start line',
		details: 'Booked session, ~75 min.',
		goal: 'Do not injure the groom.',
		split: '0.0 km'
	},
	{
		n: 2,
		time: '4:20 PM',
		name: 'Beyond the Pale Brewing Company',
		address: '250 City Centre Ave, Bay 106',
		coords: [45.40895, -75.71855],
		approach: 'Same building · 30-second walk',
		details: 'One round or a flight. Wheels up at 4:50.',
		goal: 'At least one pitcher for the groom.',
		split: '0.03 km'
	},
	{
		n: 3,
		time: '5:00 PM',
		name: 'LCBO Wellington & Somerset',
		address: '981 Wellington St W',
		phone: '(613) 729-1275',
		coords: [45.40582, -75.72291],
		approach: '10-minute walk along Wellington',
		details: "Chalet haul + ice. Charlie's car is staged immediately nearby. Load it and go.",
		goal: 'Do not lose the groom.',
		split: '0.8 km'
	},
	{
		n: 4,
		time: '5:15 PM',
		name: 'Tooth and Nail Brewing Company',
		address: '3 Irving Ave',
		coords: [45.40551, -75.72236],
		approach: '1-minute walk around the corner',
		details: 'The Fortitude stout is the house legend. Out by 5:40.',
		goal: 'At least two pitchers for the groom.',
		split: '0.9 km'
	},
	{
		n: 5,
		time: '5:50 PM',
		name: 'West Park Bowling',
		address: '1205 Wellington St W',
		phone: '(613) 728-0933',
		coords: [45.40038, -75.73056],
		approach: '12-minute walk',
		details: 'Two lanes at 6:00, ~70 min. Retro alley, full bar.',
		goal: 'At least three pitchers for the groom. The pattern continues.',
		split: '1.9 km'
	},
	{
		n: 6,
		time: '7:15 PM',
		name: 'Elmdale Oyster House & Tavern',
		address: '1084 Wellington St W',
		phone: '(613) 728-2848',
		coords: [45.40301, -75.72519],
		approach: '4-minute walk',
		details: 'Reserved table. Dinner. Bills paid by 8:45.',
		goal: 'At least 18 oysters for the groom.',
		split: '2.4 km'
	},
	{
		n: 7,
		time: '8:45 PM',
		name: 'Moo Shu Ice Cream',
		address: '1130 Wellington St W',
		coords: [45.40182, -75.72659],
		approach: '2-minute walk',
		details: 'Cars load from the line. Wheels up at 9:10.',
		goal: 'Zero pitchers for the groom. One double scoop. He has earned it.',
		split: '2.5 km'
	}
];

export const finish = {
	name: 'Road Move to the Chalet',
	details:
		'Convoy departs Wellington West. Cooler loaded. Convene with enemy forces: the bridesmaids. Night phase begins.'
};

// Race start: Sept 9, 3:00 PM Eastern (EDT, UTC-4)
export const START_ISO = '2026-09-09T15:00:00-04:00';
export const END_ISO = '2026-09-09T23:45:00-04:00';

// Replace the phone with Brook's real number before the big day.
export const bestMan = {
	name: 'Brook Willis',
	phone: '+16135550199' // BEST_MAN_PHONE placeholder
};

export const roster = [
	{ name: 'Garrett McDonald', role: 'The Bachelor', bachelor: true },
	{ name: 'Brook Willis', role: 'Best Man' },
	{ name: 'Will Hamilton', role: 'Runner' },
	{ name: 'Charlie Grimshaw', role: 'Runner' },
	{ name: 'Brodie OBP', role: 'Runner' },
	{ name: 'Pat Couisineau', role: 'Tech Support' },
	{ name: 'Rachael Machnee', role: 'Woo Girl' }
];

/** @param {{ name: string, address: string }} stop */
export function mapsUrl(stop) {
	return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(stop.name + ', ' + stop.address + ', Ottawa')}`;
}

// House rules. Add more as they get invented on the course.
export const rules = [
	{
		n: 1,
		name: 'Rooftop Goat',
		text: 'Spot a goat on a roof, call it out loud. The spotter picks who does a shot.'
	}
];
