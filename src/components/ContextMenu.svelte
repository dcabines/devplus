<script>
  import { ContextMenu, ContextMenuOption } from "carbon-components-svelte";
  import { skip1 } from "../context-actions/skip1";
  import { skip2 } from "../context-actions/skip2";
</script>

<ContextMenu>
  <ContextMenuOption labelText="Skip 1" on:click={skip1} />
  <ContextMenuOption labelText="Skip 2" on:click={skip2} />
</ContextMenu>
