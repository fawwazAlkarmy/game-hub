import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, // 1024px
      }}
    >
      <GridItem bg="orange.300" area={"nav"}>
        nav
      </GridItem>
      <Show above="lg">
        <GridItem bg="pink.300" area={"aside"}>
          aside
        </GridItem>
      </Show>
      <GridItem bg="yellow.300" area={"main"}>
        main
      </GridItem>
    </Grid>
  );
}

export default App;
