import {hero} from "./definitions";

export const arrayIncludes = (someArray, searchElement) => {
  return someArray.filter(element => element === searchElement).length > 0;
};

export const numberOfEnemiesInCleaveRange = () => {
  return hero.findEnemies().filter(enemy => hero.distanceTo(enemy) <= 5).length;
};

export const tryHeal = () => {
  let item = hero.findNearestItem();

  if (item && item.type === "potion" && (hero.health * 100 / hero.maxHealth)
      < 30) {
    hero.moveXY(item.pos.x, item.pos.y);
  }
};

export const findMostValuableItem = () => {
  hero.findItems().filter(it => it.value);
};

export const findNearestEnemySmart = () => {
  if (numberOfEnemiesInCleaveRange() > 1) {
    return hero.findNearestEnemy();
  }

  hero.say(hero.findNearestEnemy().type);
  const enemies = hero.findEnemies()
  .filter(it => it.type === "thrower");

  if (enemies.length > 0) {
    return enemies.reduce(
        (e1, e2) => hero.distanceTo(e1) <= hero.distanceTo(e2) ? e1 : e2);
  }

  return hero.findNearestEnemy();
};

export const attackAllFromNearest = () => {
  let enemy = findNearestEnemySmart();
  while (enemy) {
    tryHeal();
    if (numberOfEnemiesInCleaveRange() > 1 && hero.isReady("cleave")) {
      hero.cleave(enemy);
    } else {
      if (hero.isReady("bash")) {
        hero.bash(enemy);
      } else {
        hero.attack(enemy);
      }
    }
    enemy = hero.findNearestEnemy();
  }
};

export const getNearestMissile = () => {
  return hero.findNearest(hero.findEnemyMissiles());
};

/**
 *
 * @param {number} maxRange
 * @returns {number}
 */
export const missilesInRange = maxRange => {
  let enemyMissiles = hero.findEnemyMissiles();
  return enemyMissiles && enemyMissiles.filter(
      it => hero.distanceTo(it) <= maxRange).length;
};
