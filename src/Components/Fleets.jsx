import { FormControlLabel, Checkbox, useMediaQuery } from "@mui/material";
import { useState } from "react";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";
import cars from "./cars";
import BottomNav from "./BottomNav";

const Fleets = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  // State to track checked categories
  const [checkedCategories, setCheckedCategories] = useState([]);

  // Function to handle checkbox change
  const handleCheckboxChange = (event) => {
    const category = event.target.name;
    event.target.checked
      ? setCheckedCategories([...checkedCategories, category])
      : setCheckedCategories(checkedCategories.filter((c) => c !== category));
  };

  // Filter products based on checked categories
  const filteredProducts =
    checkedCategories.length > 0
      ? cars.filter((product) => checkedCategories.includes(product.category))
      : cars;

  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          marginTop: "50px",
          minHeight: "calc(100vh - 50px)",
          marginRight: isMobile && "20px",
          right: isMobile && "20px"
        }}
      >
        <div style={{ flex: "0 0 200px", padding: "20px", minWidth: "200px" }}>   
          <h3>Filter By Category</h3>
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "row" : "column"
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkedCategories.includes("Hatchback")}
                  onChange={handleCheckboxChange}
                  name="Hatchback"
                />
              }
              label="Hatchback"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkedCategories.includes("Sedan")}
                  onChange={handleCheckboxChange}
                  name="Sedan"
                />
              }
              label="Sedan"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkedCategories.includes("SUV")}
                  onChange={handleCheckboxChange}
                  name="SUV"
                />
              }
              label="SUV"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkedCategories.includes("MUV")}
                  onChange={handleCheckboxChange}
                  name="MUV"
                />
              }
              label="MUV"
            />
          </div>
        </div>
        <div style={{ flex: "1", padding: "10px", minWidth: "0" }}>
          <h2>Available Fleets</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
              gap: "10px",
              justifyContent: "center",
              alignItems: "flex-start",
              marginTop: !isMobile && "50px",
              marginLeft: "30px"
            }}
          >
            {filteredProducts.map((product) => (
              <div style={{ width: "300px" }} key={product.id}>
                <ProductCard
                  key={product.id}
                  imageUrl={product.imageUrl}
                  name={product.name}
                  price={product.price}
                  category={product.category}
                  productId={product.id}
                  imageHeight={200}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{marginRight: isMobile && "35px"}}>
      <BottomNav />
      </div>
    </>
  );
};

export default Fleets;
