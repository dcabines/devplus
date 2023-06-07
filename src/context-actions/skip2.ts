import { resources } from "../stores/resources";

export const skip2 = () => {
  resources.update(current => ({
    ...current,
    mana: current.mana += 200,
    stone: current.mana += 200,
    coins: current.mana += 200
  }));
};
