import { writable } from 'svelte/store'

export const resources = writable({
  mana: 0,
  stone: 0,
  water: 0,
  coins: 0
});
