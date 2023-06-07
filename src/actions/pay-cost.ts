import { resources } from "../stores/resources";

export const payCost = (cost) => {
  resources.update((current) => {
    let { mana, stone, water, coins } = current;
console.log(cost);
    if (cost.mana) mana -= cost.mana;
    if (cost.stone) stone -= cost.stone;
    if (cost.water) water -= cost.water;
    if (cost.coins) coins -= cost.coins;

    return {
      ...current,
      mana,
      stone,
      water,
      coins,
    };
  });
};
