import { resources } from "../stores/resources";

export const skip1 = () => {
  resources.update(current => ({
    ...current,
    mana: current.mana += 50
  }));
};
