<script type="ts">
  import { Tile, ExpandableTile } from "carbon-components-svelte";
  import { events } from "../stores/events";
</script>

{#each $events as event}
  {#if event.content}
    <ExpandableTile>
      <div slot="above">{@html event.title}</div>
      <div slot="below">{@html event.content}</div>
    </ExpandableTile>
  {:else}
    <Tile>
      {@html event.title}
    </Tile>
  {/if}
{/each}