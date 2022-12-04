import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { useState } from "react";
import Modal from "../Model/Model";
import Button from "../Button/Button";

export default function ButtonAppBar() {
  const [showModel, setShowModel] = useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="" style={{height:"80px"}}>
        <Toolbar>
          <Modal
            show={showModel}
            closeModel={() => {
              setShowModel(false);
            }}
          />
          <Button
            onClick={() => {
              setShowModel(true);
            }}
          >
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
