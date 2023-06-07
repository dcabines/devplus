<script type="ts">
  import "carbon-components-svelte/css/g10.css";

  import { Content, Grid, Row, Column } from "carbon-components-svelte";

  import ModalYouAreAWizard from "../../components/modal-you-are-a-wizard.svelte";
  import ModalTheManaShard from "../../components/modal-the-mana-shard.svelte";
  import ModalStorageIdeas from "../../components/modal-storage-ideas.svelte";
  import Resources from "../../components/Resources.svelte";

  import { resources } from "../../stores/resources";
  import { resourceLimits } from "../../stores/resource-limits";
  import { buildings } from "../../stores/buildings";

  import Experience from "../../components/Experience.svelte";
  import ResearchMenu from "../../components/Research-Menu.svelte";
  import Events from "../../components/Events.svelte";
  import Actions from "../../components/Actions.svelte";
  import Goals from "../../components/Goals.svelte";
  import Spells from "../../components/Spells.svelte";
  import Mana from "../../components/Mana.svelte";

  setInterval(() => {
    resources.update((current) => {
      const mana = current.mana + ($buildings.manaSpout * 0.5);

      return {
      ...current,
      mana: Math.min(mana, $resourceLimits.mana),
    };
    });
  }, 1000);
</script>

<ModalYouAreAWizard />
<ModalTheManaShard />
<ModalStorageIdeas />

<Content>
  <Grid>
    <Row>
      <Column>
        <h2>Research</h2>
        <hr />
        <ResearchMenu />
        <Resources />
        <Experience />
      </Column>

      <Column class="actions">
        <h2>Act</h2>
        <hr />
        <Actions />
        <Goals />
      </Column>

      <Column>
        <h2>Cast</h2>
        <hr />
        <Spells />
      </Column>

      <Column>
        <h2>Events</h2>
        <hr />
        <Events />
      </Column>
    </Row>
  </Grid>

  <Mana />
</Content>
