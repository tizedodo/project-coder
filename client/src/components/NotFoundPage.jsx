import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const NotFoundPage = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>404 - Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/">
        <Button variant="contained" sx={{ marginTop: "10px" }}>
          Back to Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
