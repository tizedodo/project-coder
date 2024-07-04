import React from "react";
import { Box, Typography, Container, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        textAlign: "center",
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1">
          &copy; {new Date().getFullYear()} Poductos calidad y precios | by
          tizedodo
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
