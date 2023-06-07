import { buildings } from "../stores/buildings";

export const buildWarehouse = () => {
  buildings.update(current => ({
    ...current,
    warehouse: current.warehouse += 1
  }));
};
