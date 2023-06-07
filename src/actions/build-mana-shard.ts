import { buildings } from "../stores/buildings";
import { achievements } from "../stores/achievements";

export const buildManaShard = () => {
  buildings.update(current => ({
    ...current,
    manaShard: current.manaShard += 1
  }));

  achievements.update(current => ({
    ...current,
    builtAManaShard: true
  }));
};
