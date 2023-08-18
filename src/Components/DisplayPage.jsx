// import { Grid } from "@mui/material";
// import ProductCard from "./ProductCard";
import { ArrowForward } from "@mui/icons-material";
import cars from "./cars";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
// import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

const DisplayPage = () => {
  // Use only the first 4 products from the imported products array
  const displayedCars = cars.slice(0, 4);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {displayedCars.map(( car, index) => (
        <>
          <Link key={index} to={`/${car.id}`} style={{ textDecoration: "none" }}>
            <Card
              key={index}
              style={{
                border: "1px solid #ccc",
                borderRadius: "25px",
                margin: "10px",
                width: "250px",
                height: "320px",
                // paddingBottom: "10px",
                paddingTop: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="h6"
                style={{
                  textAlign: "right",
                  paddingRight: "20px",
                  borderRadius: "15px",
                }}
              >
                <ArrowForward />
              </Typography>
              <CardMedia
                component="img"
                height="140"
                image={car.imageUrl}
                alt={car.name}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {car.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {car.category}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.primary"
                  style={{ fontFamily: "'play', sans-serif", fontSize: "20px" }}
                >
                  ₹{car.price}/hr
                </Typography>
              </CardContent>
              {/* <Button variant="contained" color="primary">Book Now</Button> */}
            </Card>
          </Link>
        </>
      ))}
    </div>
  );
};

// DisplayPage.propTypes = {
//   productId: PropTypes.number.isRequired,
// };

export default DisplayPage;
