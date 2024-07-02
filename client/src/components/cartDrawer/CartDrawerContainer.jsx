// src/components/CartDrawerContainer.jsx
import React, { useState } from "react";
import CartDrawer from "./CartDrawer";

function CartDrawerContainer({ openDrawer, onClose }) {
  const [drawerOpen, setDrawerOpen] = useState(openDrawer);
  const [cartItems, setCartItems] = useState([
    {
      name: "Twilight Hybrid Mattress",
      price: 299.99,
      variant: "Full / 10''",
      image:
        "//www.sweetnight.com/cdn/shop/products/11559183277-926412.jpg?v=1713208334&width=80",
    },
  ]);

  const handleRemoveItem = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
  };

  return (
    <CartDrawer
      open={drawerOpen}
      onClose={() => setDrawerOpen(false)}
      cartItems={cartItems}
      onRemoveItem={handleRemoveItem}
    />
  );
}

export default CartDrawerContainer;
