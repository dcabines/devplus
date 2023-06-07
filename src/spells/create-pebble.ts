import { resources } from "../stores/resources";

export const createPebble = () => {
  resources.update(current => ({
    ...current,
    stone: current.stone += 5
  }));
};
