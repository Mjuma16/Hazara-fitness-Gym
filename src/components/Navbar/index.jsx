import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import logo from "../../assets/images/Logo.png";

function Navbar() {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-around"}
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link to={"/"}>
        <img src={logo} className="logo_Image" alt="Logo_Image" />
      </Link>

      <Stack
        direction={"row"}
        gap={"40px"}
        fontSize={"24px"}
        alignItems={"flex-end"}
      >
        <Link className="list_item" to={"/"}>
          Home
        </Link>
        <a href="#exercises" className="list_item_ank">
          Exercises
        </a>
      </Stack>
    </Stack>
  );
}

export default Navbar;
