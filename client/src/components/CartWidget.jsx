import { useState } from "react";
import Badge from "@mui/material/Badge";
import { MdLocalMall } from "react-icons/md";
import CartDrawerContainer from "./cartDrawer/CartDrawer";

export default function CartWidget() {
  const [openCartDrawer, setOpenCartDrawer] = useState(false);

  const toggleCartDrawer = () => {
    setOpenCartDrawer(!openCartDrawer);
  };

  return (
    <>
      <Badge
        onClick={toggleCartDrawer}
        badgeContent={4}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        color="error"
        style={{ color: "white" }}
      >
        <MdLocalMall />
      </Badge>

      <CartDrawerContainer open={openCartDrawer} onClose={toggleCartDrawer} />
    </>
  );
}
