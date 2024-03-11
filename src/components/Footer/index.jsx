import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import logoImage from "../../assets/images/Logo-1.png";

function Footer() {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="48ox" pt="24px">
        <img src={logoImage} alt="Footer-logo" width="200px" height={"40px"} />
        <Typography variant="h5" mt="20px" pb="40px">
          Shape your Body Now <span>&#10084;</span>
        </Typography>
      </Stack>
    </Box>
  );
}

export default Footer;
