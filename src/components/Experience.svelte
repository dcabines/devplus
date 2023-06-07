<script type="ts">
  import { Grid, Row, Column, Tile } from "carbon-components-svelte";
  import { resources } from "../stores/resources";

  
</script>

<Tile>
  <h4>Schools</h4>
  <hr />

  <Grid>
    <Row>
      <Column>
        <Row>Conjuration</Row>
        <Row>Enchantment</Row>
        <Row>Illusion</Row>
      </Column>
      <Column>
        <Row>Lv1</Row>
        <Row>Lv1</Row>
        <Row>Lv1</Row>
      </Column>
      <Column>
        <Row>000/100</Row>
        <Row>000/100</Row>
        <Row>000/100</Row>
      </Column>
    </Row>
  </Grid>
</Tile>
