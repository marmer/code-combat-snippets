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

export class Enemy extends Thing{
  /**
   * @type {string | "thrower"}
   */
  type
}

export class Item extends Thing{
  /**
   * @type {string | "potion" | "coin" | "gem"}
   */
  type
  /**
   * @type {number}
   */
  value
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
}

default export const hero = new Hero()
