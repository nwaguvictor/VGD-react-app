import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      h="200px"
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={"nav"} bg={"red"}></GridItem>
      <Show when="lg">
        <GridItem area={"aside"} bg={"orange"}></GridItem>
      </Show>
      <GridItem area={"main"} bg={"blue"}></GridItem>
    </Grid>
  );
}

export default App;
