import { Grid } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Data from "../Data/data";
import Card from "./Card";

export default function HideAppBar() {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar sx={{ bgcolor: "#ef5350" }}>
        <Toolbar>
          <Typography
            flexGrow={1}
            textAlign={"center"}
            variant="h6"
            component="div"
          >
            My Travel Journal
          </Typography>
        </Toolbar>
      </AppBar>

      <Toolbar />
      <Container>
        <Grid container justifyContent={"center"}>
          {Data.map((data, index) => {
            return <Card key={index} data={data} />;
          })}
        </Grid>
      </Container>
    </React.Fragment>
  );
}
