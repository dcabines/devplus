<script>
  import { ProgressBar } from "carbon-components-svelte";
  import { resources } from "../stores/resources";
  import { resourceLimits } from "../stores/resource-limits";
</script>

<ProgressBar
  labelText="{$resources.mana}/{$resourceLimits.mana}"
  value={$resources.mana}
  />