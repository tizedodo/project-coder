// src/components/CartDrawer.jsx
import React, { useEffect, useState } from "react";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import {
  Avatar,
  Badge,
  Box,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { products } from "../../products";
import { FaShoppingCart } from "react-icons/fa";

const CartDrawer = ({ open, onClose, onRemoveItem }) => {
  const theme = useTheme();
  const [items, setItems] = useState([]);
  const [error, setError] = useState({});
  // useEffect( ()=>{}, [])

  useEffect(() => {
    // obteniendo el producto
    const getProducts = new Promise((resolve, reject) => {
      let x = true;
      if (x) {
        resolve(products);
      } else {
        reject({ mesage: "error al obtener el producto", codigo: 404 });
      }
    });

    // manejar la repuesta del get
    getProducts
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  const cartItems = items;
  return (
    <Drawer style={{ width: 240 }} anchor="right" open={open} onClose={onClose}>
      <div
        style={{
          width: 300,

          padding: 15,
        }}
      >
        <Grid
          container
          spacing={7}
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item xs={8}>
            <Stack direction="row" spacing={3} alignItems="center">
              <Typography variant="h5">Cart</Typography>

              <Badge
                badgeContent={4}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                color="error"
                style={{ color: "white" }}
              >
                <FaShoppingCart size={25} color="#000" />
              </Badge>
            </Stack>
          </Grid>
          <Grid item xs={2}>
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Grid>
          <Divider />
        </Grid>
        <Divider />

        <div>
          <List
            style={{
              maxHeight: "64vh",
              overflowY: "auto",
            }}
          >
            {cartItems.map((item, index) => (
              <ListItem key={index}>
                <img
                  src={item.img}
                  alt={item.name}
                  width={50}
                  height={50}
                  style={{ marginRight: 16 }}
                />
                <ListItemText
                  primary={item.title}
                  secondary={`${item.variant} - $${item.price}`}
                />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="remove"
                    onClick={() => onRemoveItem(index)}
                  >
                    <CloseIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </div>

        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            bgcolor: "background.paper",
            padding: 2,
            display: "flex",
            justifyContent: "center",
            boxShadow: 3,
          }}
        >
          <Stack spacing={1}>
            <Typography variant="h6">Total: $299.99</Typography>
            <Typography variant="body2" color="textSecondary">
              Taxes and shipping calculated at checkout
            </Typography>
            <Divider />
            <Button
              fullWidth
              variant="contained"
              size="small"
              style={{
                backgroundColor: theme.palette.primary.lightest,
                color: theme.palette.primary.textContrast,
              }}
            >
              checkout
            </Button>

            <Button
              fullWidth
              variant="contained"
              size="small"
              onClick={onClose}
            >
              Continue shopping
            </Button>
          </Stack>
        </Box>
      </div>
    </Drawer>
  );
};

export default CartDrawer;
