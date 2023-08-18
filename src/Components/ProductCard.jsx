import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Grid, Typography, Button } from "@mui/material";
import { PropTypes } from "prop-types";

function ProductCard({ productId, imageUrl, name, price, imageHeight, category }) {
  // const navigate = useNavigate()
  return (
    <Grid item xs={12} sm={6} md={3.5}>
      <Link to={`/fleets/${productId}`} style={{ textDecoration: "none" }}>
        <Card
          className="product-card"
          style={{ height: "100%", display: "flex", flexDirection: "column" }}
        >
          <CardMedia
            component="img"
            height={imageHeight}
            image={imageUrl}
            alt={name}
            style={{width: "auto"}}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {category} {/* Display the category */}
            </Typography>
            <Typography variant="body1" style={{fontFamily: "'play', sans-serif"}} color="text.primary">
              ₹{price}/hr
            </Typography>
            <Button variant="contained" type="submit" sx={{mt: "10px"}}>Book Now</Button>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
}

ProductCard.propTypes = {
  productId: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageHeight: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired
};

export default ProductCard;
