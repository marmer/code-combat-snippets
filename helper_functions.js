import {hero} from "./definitions";

const arrayIncludes = (someArray, searchElement) => {
  return someArray.filter(element => element === searchElement).length > 0;
};

const numberOfEnemiesInCleaveRange = () => {
  return hero.findEnemies().filter(enemy => hero.distanceTo(enemy) <= 5).length;
};

const findPotions = () => hero.findItems().filter(
    it => it.type === "potion");

const isHealthBelow = healthInPercentage => (hero.health * 100
        / hero.maxHealth)
    < healthInPercentage;

/** *
 * @param {Position} [healPos]
 */
const tryHeal = (healPos) => {
  const potions = findPotions();
  const nearestPotion = hero.findNearest(potions);

  if (isHealthBelow(50)) {
    if (potions.length && healPos) {

      if (hero.distanceTo(nearestPotion) <= hero.distanceTo(healPos)) {
        hero.moveXY(nearestPotion.pos.x, nearestPotion.pos.y);
      } else {
        while (isHealthBelow(90)) {
          hero.moveXY(healPos.x, healPos.y);
        }
      }
    } else if (healPos) {
      while (isHealthBelow(90)) {
        hero.moveXY(healPos.x, healPos.y);
      }
    } else if (potions.length) {
      hero.moveXY(nearestPotion.pos.x, nearestPotion.pos.y);
    }
  }

};

const findMostValuableItem = () => {
  hero.findItems().filter(it => it.value);
};

/**
 *
 * @returns {Enemy}
 */
const findNearestEnemySmart = () => {
  if (numberOfEnemiesInCleaveRange() > 1) {
    return hero.findNearestEnemy();
  }

  const enemies = hero.findEnemies()
  .filter(it => hero.isPathClear(hero, it))
  .filter(it => it.type === "thrower");

  if (enemies.length > 0) {
    return enemies.reduce(
        (e1, e2) => hero.distanceTo(e1) <= hero.distanceTo(e2) ? e1 : e2);
  }

  return hero.findNearest(hero.findEnemies()
  .filter(it => hero.isPathClear(hero, it)));
};

const attack = enemy => {
  tryHeal();
  if (numberOfEnemiesInCleaveRange() > 1 && hero.isReady("cleave")) {
    hero.cleave(enemy);
  } else {
    hero.attack(enemy);
  }
};

const attackAllFromNearest = () => {
  let enemy = findNearestEnemySmart();
  while (enemy) {
    attack(enemy);
    enemy = hero.findNearestEnemy();
  }
};

const getNearestMissile = () => {
  return hero.findNearest(hero.findEnemyMissiles());
};

/**
 *
 * @param {number} maxRange
 * @returns {number}
 */
const missilesInRange = maxRange => {
  return hero.findEnemyMissiles().filter(
      it => hero.distanceTo(it) <= maxRange).length;
};

const initialPosition = {x: hero.pos.x, y: hero.pos.y};

module.exports = {
  arrayIncludes,
  numberOfEnemiesInCleaveRange,
  findPotions,
  isHealthBelow,
  tryHeal,
  findMostValuableItem,
  findNearestEnemySmart,
  attack,
  attackAllFromNearest,
  getNearestMissile,
  missilesInRange,
  initialPosition
};
