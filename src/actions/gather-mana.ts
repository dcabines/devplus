import { resources } from "../stores/resources";

export const gatherMana = () => {
  resources.update(current => ({
    ...current,
    mana: current.mana += 1
  }));
};
