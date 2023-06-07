<script type="ts">
  import { Modal } from "carbon-components-svelte";
  import { resources } from "../stores/resources";
  import { addEvent } from "../stores/events";

  let open = false;
  let hasOpened = false;
  const title = "Storage Ideas";

  const paragraphs = [
    "Accumulating stone is worthwhile. As you watch your reserves getting closer to full, you start thinking if there might be a way to improve the situation.",
    "Maybe you can use the stone to create more room? It seems like a smart, straightfoward idea... you could build a warehouse.",
    "<strong>You can now build Warehouses!</strong>",
  ];

  const content = `<p>${paragraphs.join("</p><p>")}</p>`;

  $: {
    if(!hasOpened && $resources.stone >= 30) {
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
