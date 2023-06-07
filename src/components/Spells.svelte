<script lang="ts">
  import { Button, ComboBox, ExpandableTile } from "carbon-components-svelte";
  import { resources } from "../stores/resources";
  import { payCost } from "../actions/pay-cost";
  import { createPebble } from "../spells/create-pebble";
  import { createWater } from "../spells/create-water";
  import { magicShow } from "../spells/magic-show";

  const schools = ["Conjuration", "Enchantment", "Illusion"] as const;
  type Schools = typeof schools;
  type School = Schools[number];

  const schoolOptions = schools.map(x => ({ id: x, text: x }));

  interface Cost {
    mana: number;
    stone: number;
    water: number;
    coins: number;
  }

  interface Action {
    name: string;
    content: string;
    cost: Partial<Cost>;
    unlockCost: Partial<Cost>;
    unlocked: boolean;
    canAfford: boolean;
    handler: () => void;
  }

  interface CostCategory {
    school: School;
    actions: Action[];
  }

  const canAffordCost = (cost: Partial<Cost>) => {
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

  let castCategories: CostCategory[] = [
    {
      school: "Conjuration",
      actions: [
        {
          name: "Create Pebble",
          content: "Below the fold content here",
          handler: createPebble,
          unlocked: false,
          canAfford: false,
          unlockCost: {
            mana: 10,
          },
          cost: {
            mana: 5,
          },
        },
        {
          name: "Create Water",
          content: "Below the fold content here",
          handler: createWater,
          unlocked: false,
          canAfford: false,
          unlockCost: { mana: 10 },
          cost: { mana: 20 },
        },
      ],
    },
    {
      school: "Illusion",
      actions: [
        {
          name: "Magic Show",
          content: "Below the fold content here",
          handler: magicShow,
          unlocked: false,
          canAfford: false,
          unlockCost: { mana: 50 },
          cost: { mana: 30 },
        },
      ],
    },
  ];

  let selectedId: School = 'Conjuration';

  $: {
    let mana = $resources.mana;

    for (let castCategory of castCategories) {
      for (let action of castCategory.actions) {
        action.unlocked = action.unlocked || canAffordCost(action.unlockCost);
        action.canAfford = canAffordCost(action.cost);
      }
    }

    castCategories = castCategories;
  }
</script>

<h4>By School</h4>
<hr />
<ComboBox bind:selectedId items={schoolOptions} />

{#each castCategories.filter((c) => c.school === selectedId && c.actions.some((x) => x.unlocked)) as castCategory}
  <h4>{castCategory.school}</h4>
  <hr />

  {#each castCategory.actions.filter((x) => x.unlocked) as action}
    <ExpandableTile>
      <div slot="above">
        <Button
          disabled={!action.canAfford}
          on:click={(e) => onActionClick(e, action)}
        >
          {action.name}
        </Button>
      </div>
      <div slot="below">{action.content}</div>
    </ExpandableTile>
  {/each}
{/each}
