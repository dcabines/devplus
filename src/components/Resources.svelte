<script type="ts">
  import { Grid, Row, Column, Tile } from "carbon-components-svelte";
  import { resources } from "../stores/resources";
  import { resourceLimits } from "../stores/resource-limits";

  $: showMana = showMana || $resources.mana > 0;
  $: showStone = showStone || $resources.stone > 0;
  $: showWater = showWater || $resources.water > 0;
  $: showCoins = showCoins || $resources.coins > 0;
</script>

<Tile>
  <h4>Resources</h4>
  <hr />

  <Grid>
    {#if showMana}
      <Row>
        <Column>Mana:</Column>
        <Column>{$resources.mana}/{$resourceLimits.mana}</Column>
      </Row>
    {/if}
    {#if showStone}
      <Row>
        <Column>Stone:</Column>
        <Column>{$resources.stone}/{$resourceLimits.stone}</Column>
      </Row>
    {/if}
    {#if showWater}
      <Row>
        <Column>Water:</Column>
        <Column>{$resources.water}/{$resourceLimits.water}</Column>
      </Row>
    {/if}
    {#if showCoins}
      <Row>
        <Column>Coins:</Column>
        <Column>{$resources.coins}/{$resourceLimits.coins}</Column>
      </Row>
    {/if}
  </Grid>
</Tile>
