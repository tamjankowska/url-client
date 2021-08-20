import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/ToolBar"
import Typography from "@material-ui/core/Typography"

export default function Navbar() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5"> Url Shortener </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}
