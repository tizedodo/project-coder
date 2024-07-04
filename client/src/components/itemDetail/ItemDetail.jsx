import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Grid, Typography, Button, Container, Paper } from "@mui/material";
import { styled } from "@mui/system";

const ProductImage = styled("img")({
  maxWidth: "100%",
  height: "auto",
  display: "block",
  margin: "auto",
  marginBottom: "20px",
  maxHeight: "300px", // Ajusta la altura máxima de las miniaturas
});

function ItemDetail({ item }) {
  const settings = {
    customPaging: function (i) {
      return (
        <div>
          <img
            src={item.img[i]}
            alt={`Slide ${i}`}
            style={{
              maxHeight: "100%",
              maxWidth: "100%",
              objectFit: "contain",
            }}
          />
        </div>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true, // Centra las miniaturas
    centerPadding: "10px", // Añade espacio alrededor de las miniaturas centradas
  };

  return (
    <Container maxWidth="md">
      <Box mx="auto" mt={4} mb={6} sx={{ bgcolor: "#f0f0f0", p: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box sx={{ maxWidth: 500, mx: "auto" }}>
              <Slider {...settings}>
                {item.img &&
                  Array.isArray(item.img) &&
                  item.img.map((img, index) => (
                    <div key={item.id + "-" + index}>
                      <ProductImage src={img} alt={`Slide ${index}`} />
                    </div>
                  ))}
              </Slider>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h4" gutterBottom>
                {item.title}
              </Typography>
              <Typography variant="h6" gutterBottom>
                ${item.price}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {item.description}
              </Typography>
              <Box mt={4}>
                <Button variant="contained" color="primary" size="large">
                  Add to Cart
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default ItemDetail;
