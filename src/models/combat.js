const { stanceFromName } = require('./stances')

module.exports = {
  combatStats,
  getStats,
}

function combatStats (fighter) {
  var stats = getStats(fighter)
  var combatStats = Object.assign({}, fighter, stats)
  const stance = stanceFromName(fighter.stance)
  if (stance) {
    combatStats = applyBuff(stance.buffs(combatStats), combatStats)
  }
  return combatStats
}

function applyBuff (buffs, stats) {
  Object.keys(buffs).forEach(statName => {
    stats[statName] = buffs[statName]
  })
  return stats
}

function getStats (fighter) {
  return {
    currnentStance: fighter.stance,
    maxHp: 100 + Math.floor(fighter.vit),
    hp:  100 + Math.floor(fighter.vit),
    aspd: fighter.agi * 2 + 50,
    atk: 20 + Math.floor(fighter.str/6) + Math.floor(fighter.stance.mainStat / 4),
    mAtk: 5 + Math.floor(fighter.int/10) + Math.floor(fighter.stance.mainStat / 8),
//allowed primary stats to improve skills
    def: 10 + Math.floor(fighter.vit/8),
    atkVariation: Math.max(0.05, 0.3 - fighter.dex/350),
    skillCast: Math.min(0.9, 0.1 + fighter.dex/600),
    stunChance: 0,
    dropRatio: 1 + fighter.luk/350,
    dodge: Math.min(0.03 + fighter.agi/3000, 0.8),
    critChance: Math.min(fighter.luk/2000, 0.9),
    critDmg: 1.6 + fighter.str/1000 + fighter.luk/1000,
  }
}
