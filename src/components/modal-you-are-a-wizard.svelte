<script type="ts">
  import { Modal } from "carbon-components-svelte";
  import { resources } from "../stores/resources";
  import { addEvent } from "../stores/events";

  let open = false;
  let hasOpened = false;
  const title = "You are a Wizard";

  const paragraphs = [
    "Gathering Mana is useful, but why would you do it if you had nothing to use it for?",
    "You slowly recall how to cast spells and rememeber a basic Conjuration spell, <em>Create Pebble</em>. You think of trying it soon!",
    "<strong>You have unlocked the ability to cast spells! You can cast spelly by pressing the wand icon at the top right or bottom right corner of the screen.</strong>",
  ];

  const content = `<p>${paragraphs.join("</p><p>")}</p>`;

  $: {
    if(!hasOpened && $resources.mana >= 10) {
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
