// Single source of truth for the course. Order = schedule order = pin order.
// leg: 'west' = Wellington West walking line, 'downtown' = post-Uber Rideau St line.

export const stops = [
	{
		n: 1,
		time: '3:00 PM',
		name: 'LumberJaxe Axe Throwing Hall',
		address: '250 City Centre Ave #232',
		phone: '(613) 702-8175',
		coords: [45.40935, -75.71925],
		leg: 'west',
		approach: 'Start line',
		details: 'Booked session, ~75 min. Trophy for top thrower.',
		goal: 'Do not injure the groom.',
		split: '0.0 km'
	},
	{
		n: 2,
		time: '4:20 PM',
		name: 'Beyond the Pale Brewing Company',
		address: '250 City Centre Ave, Bay 106',
		coords: [45.40895, -75.71855],
		leg: 'west',
		approach: 'Same building · 30-second walk',
		details: 'One round or a flight. Wheels up at 4:50.',
		goal: 'At least one pitcher for the groom.',
		split: '0.03 km'
	},
	{
		n: 3,
		time: '5:00 PM',
		name: 'Tooth and Nail Brewing Company',
		address: '3 Irving Ave',
		coords: [45.40551, -75.72236],
		leg: 'west',
		approach: '10-minute walk along Wellington',
		details: 'The Fortitude stout is the house legend. Out by 5:40.',
		goal: 'At least two pitchers for the groom.',
		split: '0.9 km'
	},
	{
		n: 4,
		time: '5:50 PM',
		name: 'West Park Bowling',
		address: '1205 Wellington St W',
		phone: '(613) 728-0933',
		coords: [45.40038, -75.73056],
		leg: 'west',
		approach: '12-minute walk',
		details: 'Two lanes at 6:00, ~70 min. Retro alley, full bar.',
		goal: 'At least three pitchers for the groom. The pattern continues.',
		split: '1.9 km'
	},
	{
		n: 5,
		time: '7:15 PM',
		name: 'Elmdale Oyster House & Tavern',
		address: '1084 Wellington St W',
		phone: '(613) 728-2848',
		coords: [45.40301, -75.72519],
		leg: 'west',
		approach: '4-minute walk',
		details: 'Reserved table. Dinner. Bills paid by 8:45.',
		goal: 'At least 18 oysters for the groom.',
		split: '2.4 km'
	},
	{
		n: 6,
		time: '8:45 PM',
		name: 'Moo Shu Ice Cream',
		address: '1130 Wellington St W',
		coords: [45.40182, -75.72659],
		leg: 'west',
		approach: '2-minute walk',
		details: 'Call the Ubers from the line. Departing 9:10.',
		goal: 'Zero pitchers for the groom. One double scoop. He has earned it.',
		split: '2.5 km'
	},
	{
		n: 7,
		time: '9:30 PM',
		name: 'LCBO Rideau',
		address: '275 Rideau St',
		coords: [45.42896, -75.68647],
		leg: 'downtown',
		approach: 'One Uber hop downtown',
		details: 'Chalet haul + ice, into the staged car. Doors close at 10:00 sharp.',
		goal: 'Do not lose the groom in the Vintages cellar.',
		split: 'UBER'
	},
	{
		n: 8,
		time: '10:10 PM',
		name: 'Sandbox VR',
		address: '45 Rideau St #200',
		phone: '(613) 454-7700',
		coords: [45.42586, -75.69337],
		leg: 'downtown',
		approach: '5-minute walk',
		details: 'Pre-booked, ~75 min. Full-body VR. Grand finale.',
		goal: 'The groom dies only in VR.',
		split: '2.9 km'
	}
];

export const finish = {
	time: '11:45 PM',
	name: 'Road Move to the Chalet',
	details: 'Shuttle departs from Rideau St. Cooler loaded. Night phase begins.'
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
