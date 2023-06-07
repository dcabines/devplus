import { resources } from "../stores/resources";

export const createWater = () => {
  resources.update(current => ({
    ...current,
    water: current.water += 2
  }));
};
