import { writable } from 'svelte/store'

export const events = writable([]);

export const addEvent = (event) => {
  events.update(current => [event, ...current]);
};
