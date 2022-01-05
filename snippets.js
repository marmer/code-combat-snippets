import {hero} from "./definitions";

const arrayIncludes = (someArray, searchElement) => {
  return someArray.filter(element => element === searchElement).length > 0;
};

const numberOfEnemiesInCleaveRange = () => {
  return hero.findEnemies().filter(enemy => hero.distanceTo(enemy) <= 5).length;
};

const tryHeal  = () => {
  let item = hero.findNearestItem();

  if(item && item.type === "potion" && (hero.health *100/ hero.maxHealth) < 30){
    hero.moveXY(item.pos.x, item.pos.y);
  }
};

const findMostValuableItem = () => {
  hero.findItems().filter(it => it.value)
}

const findNearestEnemySmart = () => {
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

const attackAllFromNearest = () => {
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

attackAllFromNearest();
