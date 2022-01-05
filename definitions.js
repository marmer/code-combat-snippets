export class Position {
  /**
   * @type {number}
   */
  x
  /**
   * @type {number}
   */
  y
}

export class Thing{
  /**
   * @returns {Position}
   */
  pos
}

/**
 * @typedef EnemyType
 * @type {string | "thrower"}
 */
export class Enemy extends Thing {
  /**
   * @type {EnemyType}
   */
  type
}

/**
 * @typedef MissleType
 * @type {string | "arrow"}
 */
export class Missile extends Thing {
  /**
   * @type {MissleType}
   */
  type
}

/**
 * @typedef ItemType
 * @type {string | "potion" | "coin" | "gem"}
 */
export class Item extends Thing {
  /**
   * @type {ItemType}
   */
  type
  /**
   * @type {number}
   */
  value
}

/**
 * @typedef Color
 * @type {"green"| "black" | "violet"}
 */
export class Flag extends Thing {
  /**
   * @type {Color}
   */
  color
}

export class Hero extends Thing {
  /**
   * @returns Enemy[]
   */
  findEnemies();

  /**
   * @param {Thing} enemy
   * @returns number
   */
  distanceTo(enemy);

  /**
   * @type {Item}
   */
  findNearestItem();

  /**
   * @type {number}
   */
  health;

  /**
   * @type {number}
   */
  maxHealth;

  /**
   *
   * @param x {number}
   * @param y {number}
   */
  moveXY(x, y);

  /**
   * @param pos {Position}
   */
  move(pos);

  /**
   * @returns {Item[]}
   */
  findItems();

  /**
   * @returns {Enemy}
   */
  findNearestEnemy();

  /**
   *
   * @param {string} message
   */
  say(message);

  /**
   * @param { string | "shield" | "electrocute" | "cleave" | "bash"} [thing]
   */
  isReady(thing);

  shield();

  /**
   *
   * @param enemy {Enemy}
   * @returns {boolean}
   */
  canElectrocute(enemy);

  /**
   *
   * @param enemy {Enemy}
   */
  electrocute(enemy);

  /**
   *
   * @param enemy {Enemy}
   */

  cleave(enemy);

  /**
   *
   * @param enemy {Enemy}
   */
  bash(enemy);

  /**
   *
   * @param enemy {Enemy}
   */
  attack(enemy);

  /**
   * @returns {Missile[]}
   */
  findEnemyMissiles() ;

  /**
   *
   * @param {Thing[]} thing
   * @returns {Thing}
   */
  findNearest(thing) ;

  /**
   * @param {Color} [color]
   * @returns {Flag}
   */
  findFlag(color);

  /**
   * @param {Flag} flag
   */
  pickUpFlag(flag) {

  }
}

default export const hero = new Hero()
