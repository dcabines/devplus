<script>
  import {
    Header,
    HeaderAction,
    HeaderPanelLink,
    HeaderPanelLinks,
    HeaderUtilities,
  } from "carbon-components-svelte";

  let isOpen = false;
</script>

<Header company="Magic Time">
  <HeaderUtilities>
    <HeaderAction bind:isOpen>
      <HeaderPanelLinks>
        <HeaderPanelLink>
          <a target="_blank" href="https://svelte.dev/docs"> Svelte </a>
        </HeaderPanelLink>
        <HeaderPanelLink>
          <a
            target="_blank"
            href="https://carbon-components-svelte.onrender.com"
          >
            Carbon Components Svelte
          </a>
        </HeaderPanelLink>
        <HeaderPanelLink>
          <a target="_blank" href="https://www.youtube.com/watch?v=0gg7FbOYIDM">
            YouTube Video
          </a>
        </HeaderPanelLink>
      </HeaderPanelLinks>
    </HeaderAction>
  </HeaderUtilities>
</Header>
