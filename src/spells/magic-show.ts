import { resources } from "../stores/resources";

export const magicShow = () => {
  resources.update(current => ({
    ...current,
    coins: current.coins += 20
  }));
};
