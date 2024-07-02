import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ProductCard from "../productCard/ProductCard";

function ItemList({ items }) {
  return (
    <Container sx={{ marginTop: 5 }}>
      <Grid container spacing={2}>
        {items.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </Grid>
    </Container>
  );
}

export default ItemList;
