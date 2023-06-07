<script type="ts">
  import { Modal } from "carbon-components-svelte";
  import { resources } from "../stores/resources";
  import { addEvent } from "../stores/events";

  let open = false;
  let hasOpened = false;
  const title = "The Mana Shard";

  const paragraphs = [
    "The mana reserves of the school are building up. Lookin at them, you realize they may soon hit their maximum.",
    "If only you had a way to store more mana... Then you remember what you had learned as an apprentice, that Mana Shards can increase capacity.",
    "We could buy some if we had enough coins... maybe with some Illusion spell?",
    "<strong>You can now build Mana Shards!</strong>",
  ];

  const content = `<p>${paragraphs.join("</p><p>")}</p>`;

  $: {
    if(!hasOpened && $resources.mana >= 50) {
      hasOpened = true;
      open = true;
      addEvent({ title, content });
    }
  }
</script>

<Modal
  size="xs"
  preventCloseOnClickOutside
  bind:open={open}
  modalHeading={title}
  primaryButtonText="Close"
  on:click:button--primary={() => (open = false)}
  >
  <p>{@html content}</p>
</Modal>
