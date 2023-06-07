<script type="ts">
  import { Button, ExpandableTile } from "carbon-components-svelte";

  import { resources } from "../stores/resources";
  import { payCost } from "../actions/pay-cost";
  import { gatherMana } from "../actions/gather-mana";
  import { buildManaShard } from "../actions/build-mana-shard";
  import { buildManaSpout } from "../actions/build-mana-spout";
  import { buildWarehouse } from "../actions/build-warehouse";

  let actionCategories = [
    {
      name: "Gather",
      actions: [
        {
          name: "Gather Mana",
          content: "Below the fold content here",
          handler: gatherMana,
          unlocked: true,
          canAfford: true,
          unlockCost: {},
          cost: {},
        },
      ],
    },
    {
      name: "Mana",
      actions: [
        {
          name: "Mana Shard",
          content: "Below the fold content here",
          handler: buildManaShard,
          unlocked: false,
          canAfford: false,
          unlockCost: { mana: 50 },
          cost: {
            mana: 5,
            coins: 100,
          },
        },
        {
          name: "Mana Spout",
          content:
            "Automatically generate Mana and refill your supply. <strong>+0.50/sec</strong>",
          handler: buildManaSpout,
          unlocked: false,
          canAfford: false,
          unlockCost: { water: 1 },
          cost: {
            stone: 17,
            water: 4,
          },
        },
      ],
    },
    {
      name: "Storage",
      actions: [
        {
          name: "Warehouse",
          content: "Below the fold content here",
          handler: buildWarehouse,
          unlocked: false,
          canAfford: false,
          unlockCost: { stone: 30 },
          cost: {
            coins: 200,
            stone: 30,
          },
        },
      ],
    },
  ];

  $: unlockedActionCategories = actionCategories.filter((c) =>
    c.actions.some((x) => x.unlocked)
  );

  $: {
    let mana = $resources.mana;

    for (let actionCategory of actionCategories) {
      for (let action of actionCategory.actions) {
        action.unlocked = action.unlocked || canAffordCost(action.unlockCost);
        action.canAfford = canAffordCost(action.cost);
      }
    }

    actionCategories = actionCategories;
  }

  const canAffordCost = (cost) => {
    const { mana, stone, water, coins } = $resources;
    if (cost.mana && mana < cost.mana) return false;
    if (cost.stone && stone < cost.stone) return false;
    if (cost.water && water < cost.water) return false;
    if (cost.coins && coins < cost.coins) return false;
    return true;
  };

  const onActionClick = (e, action) => {
    e.stopPropagation();
    if (!canAffordCost(action.cost)) return;
    payCost(action.cost);
    action.handler();
  };
</script>

<div class="actions-list">
  {#each unlockedActionCategories as actionCategory}
    <h4>{actionCategory.name}</h4>
    <hr />

    {#each actionCategory.actions.filter((x) => x.unlocked) as action}
      <ExpandableTile>
        <div slot="above">
          <Button
            disabled={!action.canAfford}
            on:click={(e) => onActionClick(e, action)}
          >
            {action.name}
          </Button>
        </div>
        <div slot="below">{@html action.content}</div>
      </ExpandableTile>
    {/each}
  {/each}
</div>