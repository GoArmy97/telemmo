const classes = [
    {
      className: 'Mage',
      classEmoji: ':crystal_ball:',
      mainStats: ['int', 'dex'],
      stances: ['Arcane', 'Debuff'],
    },
    {
      className: 'Fighter',
      classEmoji: ':muscle:',
      mainStats: ['str', 'vit'],
      stances: ['Tank', 'Berserk'],
    },
    {
      className: 'Thief',
      classEmoji: ':hocho:',
      mainStats: ['agi', 'str'],
      stances: ['Loot', 'Stealth'],
    },
    {
      className: 'Acolyte',
      classEmoji: ':sparkling_heart:',
      mainStats: ['str', 'dex'],
      stances: ['Heretic', 'Priest']
    },
    {
      className: 'Ranger',
      classEmoji: ':trident:',
      mainStats: ['dex', 'agi'],
      stances: ['Sniper', 'Trapper'],
    },
    {
      className: 'Merchant',
      classEmoji: ':moneybag:',
      mainStats: ['luk', 'dex'],
      stances: ['Efficient', 'Breaker'],
    },
]

module.exports = {
  classFromName,
  getAllEmoji,
  isValidClass,
  classHasStance,
}

function classFromName (className) {
  const baseClass = classes.find(c => c.className === className)
  return baseClass
}

function isValidClass (className) {
  return !!classFromName(className)
}

function getAllEmoji () {
  return classes.map(c => c.classEmoji).join(' ')
}

function classHasStance (className, stanceName) {
  const clas = classFromName(className)
  if (clas.stances.indexOf(stanceName) !== -1) {
    return true
  }
  return false
}
