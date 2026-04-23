const name = "Zara Darkbane"
const characterClass = "hechicera"
const level = 7

let health = 80
let mana = 120
let attack = 45
let defense = 30

function calculateDamage(attack, defense) {
    const damage = attack - defense;
    return damage < 0 ? 0 : damage;
}

const isAlive = (health) => health > 0;

const canCastSpell = (currentMana, spellCost, isStunned) =>
    currentMana >= spellCost && !isStunned;

function getPresentation(name, characterClass, level) {
    return `${name} — ${characterClass} (Nivel ${level})`;
}


console.log(calculateDamage(attack, defense));
console.log(isAlive(health));
console.log(canCastSpell(mana, 50, false));
console.log(getPresentation(name, characterClass, level));
