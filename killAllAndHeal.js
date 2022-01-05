import {
  attackAllFromNearest,
  missilesInRange,
  tryHeal
} from "./helper_functions";
import {hero} from "./definitions";

const initialPos = {x: hero.pos.x, y: hero.pos.y};

while (true) {
  let enemy = hero.findNearestEnemy();

  tryHeal();
  if (hero.isReady("shield") && missilesInRange(10)) {
    hero.shield();
  } else if (hero.canElectrocute(enemy) && hero.distanceTo(enemy) <= 20
      && hero.isReady("electrocute")) {
    hero.electrocute(enemy);
  } else if (hero.findNearestEnemy()) {
    attackAllFromNearest();
  } else {
    let item = hero.findNearestItem();
    if (item && item.type === "potion") {
      hero.moveXY(item.pos.x, item.pos.y);
    } else {
      hero.move(initialPos);
    }
  }
}
