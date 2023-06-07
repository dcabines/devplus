<script type="ts">
  import { achievements } from "../stores/achievements";
  import { addEvent } from "../stores/events";

  let currentGoalIndex = 0;

  let goals = [
    {
      condition: () => $achievements.builtAManaShard,
      content: "<p><em>Build a Mana Shard!</em></p>",
      onComplete: () => {
        currentGoalIndex += 1;
        addEvent({
          title: "You built a Mana Shard!",
        });
      },
    },
  ];

  $: currentGoal = goals[currentGoalIndex];

  $: {
    const builtAManaShard = $achievements.builtAManaShard;
    const goal = goals[currentGoalIndex];

    if (goal && goal.condition()) {
      goal.onComplete();
      currentGoalIndex += 1;
    }
  }
</script>

{#if currentGoal}
  <hr />
  <h4>Current Goal</h4>
  <hr />
  {@html currentGoal.content}
{/if}
