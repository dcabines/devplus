import { writable } from 'svelte/store'

export const buildings = writable({
  manaSpout: 0,
  manaShard: 0,
  warehouse: 0
});
