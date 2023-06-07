import { derived } from 'svelte/store'
import { buildings } from "./buildings";

export const resourceLimits = derived(buildings, store => ({
  mana: 100,
  stone: 50 + (store.warehouse * 400),
  water: 100,
  coins: 100
}));
