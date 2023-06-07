import { buildings } from "../stores/buildings";

export const buildManaSpout = () => {
  buildings.update(current => ({
    ...current,
    manaSpout: current.manaSpout += 1
  }));
};
