import React, { Fragment } from "react";

import Header from "./Header/Index";
import Container from "@material-ui/core/Container";
import CssBaseLine from "@material-ui/core/CssBaseLine";
import Box from "@material-ui/core/Box";
import { RenderRoutes, ROUTES } from "./../routes";

function App() {
  return (
    <Fragment>
      <CssBaseLine />
      <Header />
      <Container maxWidth={"lg"}>
        <Box mt={9}>
          <RenderRoutes routes={ROUTES} />
        </Box>
      </Container>
    </Fragment>
  );
}

export default App;
