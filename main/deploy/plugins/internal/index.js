const {getInstructor} = kb2abot.helpers;
const childs = [
	'adduser',
	'adminbot',
	'boy',
	'cadao',
	'girl',
	'calendar',
	'cosplay',
	'fox',
	'item',
	'jimmy',
	'setbag',
	'slot',
	'tinhtam',
	'trade',
	'uid',
	'voice',
	'work',
	'slut',
	'crime',
	'console'
];

module.exports = {
	keywords: ['ℂ𝕀𝕋ℕ𝕌𝕋', 'CITNUT', 'citnut'],

	name: 'Citnut plugins',

	description: 'Official Citnut plugins',

	guide: '',

	childs,

	permission: {
		'*': '*'
	},

	datastoreDesign: {
		account: {
			global: {},
			local: {}
		},
		thread: {
			global: {},
			local: {}
		}
	},

	async onLoad() {},

	hookType: 'none',

	async onMessage(message, reply) {
	},

	async onCall(message, reply) {
		reply(getInstructor('CITNUT ⭐', childs));
	}
};
