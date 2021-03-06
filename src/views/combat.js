const emoji = require('node-emoji')
const { classFromName } = require('../models/classes')
const { stanceFromName } = require('../models/stances')

module.exports = {
  keyboard: (map, className) => ({
    reply_markup: {
      keyboard: [
        [`:boom: ${map}`, 'My Stats :part_alternation_mark:'],
        classFromName(className).stances
          .map(stance =>
            'Stance: ' + stance + ' ' + stanceFromName(stance).emoji
          ),
        ['Back to overworld :globe_with_meridians:', 'Explore Map :earth_asia:'],
      ].map(row => row.map(el => emoji.emojify(el)))
    }
  }),
  message: (map) => emoji.emojify(`
You started exploring ${map}!

You will only stop if you lose a battle. If you stop, just start exploring again.

Good Luck!
  `.trim()),
  error: `You don't have a character, create one at /start`
}
