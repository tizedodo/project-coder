import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { FaShoppingCart } from "react-icons/fa";
import Rating from "@mui/material/Rating";
import { IconButton, Stack } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Position } from "@cloudinary/url-gen/qualifiers";
import ShareIcon from "@mui/icons-material/Share";
function ItemList({ items }) {
  return (
    <Container sx={{ marginTop: 5 }}>
      <Grid container spacing={2}>
        {items.map((item) => (
          //  xs: 0px o más (móviles)
          // sm: 600px o más (tablets en vertical)
          // md: 900px o más (tablets en horizontal, laptops pequeñas)
          // lg: 1200px o más (laptops grandes, desktops)
          // xl: 1536px o más (monitores de alta resolución)
          <Grid item xs={6} sm={4} md={3} key={item.id}>
            <Card sx={{ maxWidth: 300, margin: "0 auto" }}>
              <Stack direction="row" sx={{}}>
                <IconButton>
                  <FavoriteBorderIcon
                    sx={{
                      "&:hover": {
                        color: "red",
                      },
                    }}
                  />
                </IconButton>

                <IconButton
                  sx={{
                    "&:hover": {
                      color: "red",
                    },
                  }}
                >
                  <ShareIcon />
                </IconButton>
              </Stack>
              <CardMedia
                image={item.img}
                title={item.title}
                className="mx-auto"
                sx={{
                  height: 170,
                  maxWidth: 280,
                  objectFit: "cover",
                  objectPosition: "center", // Centra la imagen
                }}
              />

              <CardContent sx={{ padding: "5px" }}>
                <Stack direction="row">
                  <Rating
                    name="half-rating"
                    defaultValue={item.randomNumStar}
                    readOnly
                  />
                  <Typography variant="body2" color="text.secondary">
                    {item.randomNum}
                  </Typography>
                </Stack>

                <Typography gutterBottom variant="subtitle2" component="div">
                  {item.category}
                </Typography>
                <Typography
                  variant="h6"
                  component="h1"
                  sx={{
                    margin: "0",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    color: "#050A30",
                    fontWeight: "bold",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  $ {item.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => {
                    alert("clicked");
                  }}
                  startIcon={<FaShoppingCart color="#ffe600" />}
                  sx={{
                    backgroundColor: "black",
                    color: "white",
                    "&:hover": {
                      color: "#FFE6007c",
                      backgroundColor: "#000",
                    },
                  }}
                >
                  ADD TO CART
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ItemList;
