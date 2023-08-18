import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button, useMediaQuery, Divider } from "@mui/material";
import Navbar from "./Navbar";
import cars from "./cars";
import BottomNav from "./BottomNav";

const CarDescription = () => {
  const { productId } = useParams();
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const car = cars.find((product) => product.id === parseInt(productId));

  if (!car) {
    return <div>Car not found</div>;
  }

  const handleCheckout = () => {
    navigate("/checkout", {
      state: { selectedProduct: car, totalFare: total },
    });

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  // Calculate the total fare
  const baseFare = car.price;
  const insuranceAndGST = "Included";
  const refundableSecurityDeposit = 200;
  const total = baseFare + refundableSecurityDeposit;

  return (
    <div>
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          padding: "20px",
          marginTop: "50px",
        }}
      >
        <div>
          <h2>Booking Details</h2>
          <img src={car.imageUrl} alt={car.name} style={{ maxWidth: "100%" }} />
        </div>
        <div
          style={{
            textAlign: "left",
            backgroundColor: "#fff",
            borderRadius: "15px",
            padding: "20px",
            marginLeft: !isMobile && "150px",
          }}
        >
          <h2>{car.name}</h2>
          <div style={{ fontWeight: "bold" }}>
            <p>Category: {car.category}</p>
            <p>Price: ₹{car.price}/hr</p>
            <p>Fuel Type: {car.fuelType}</p>
            <p>Transmission: {car.transmissionType}</p>
            <p>Seats: {car.numSeats}</p>
            <Divider />
            <div style={{ marginTop: "20px" }}>
              Additional Information:
              <ul
                style={{
                  listStyle: "none",
                  textAlign: "left",
                  paddingBottom: "10px",
                }}
              >
                <li>Fuel: Excluded</li>
                <li>Extra Time Charges: ₹50/hr</li>
                <li>Tolls, Parking & Inter-state Taxes: To be paid by you</li>
              </ul>
              <Divider />
            </div>
            <div style={{ marginTop: "20px" }}>
              Total Fare Details:
              <ul style={{ listStyle: "none" }}>
                <li>Base Fare: ₹{baseFare}</li>
                <li>Insurance & GST: {insuranceAndGST}</li>
                <li>
                  Refundable Security Deposit: {refundableSecurityDeposit}
                </li>
                <Divider sx={{ pt: "10px", pb: "10px", mb: "10px" }} />
                <li>Total: ₹{total}/hr</li>
              </ul>
            </div>
            <div style={{ textAlign: "center", marginTop: "10px" }}>
              <Button
                onClick={handleCheckout}
                variant="contained"
                color="primary"
              >
                Proceed
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div style={{backgroundColor: "#fff", padding: "20px", borderRadius: "15px"}}>
        <h3
          style={{
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          IMPORTANT POINTS TO REMEMBER
        </h3>
        <div style={{ textAlign: "left" }}>
          <ul style={{ listStyle: "none" }}>
            <li style={{ marginBottom: "10px" }}>
              <strong>CHANGE IN PRICING PLAN:</strong> The pricing plan (10
              kms/hr, without fuel) cannot be changed after the booking is made.
            </li>
            <li style={{ marginBottom: "10px" }}>
              <strong>FUEL:</strong> In case you are returning the car at a
              lower fuel level than what was received, we will charge a flat Rs
              500 refuelling service charge + actual fuel cost to get the tank
              to the same level as what was received.
            </li>
            <li style={{ marginBottom: "10px" }}>
              <strong>TOLLS, PARKING, INTER-STATE TAXES:</strong> To be paid by
              you.
            </li>
            <li style={{ marginBottom: "10px" }}>
              <strong>ID VERIFICATION:</strong> Please keep your original
              Driving License handy. While delivering the car to you, our
              executive will verify your original Driving License and ID proof
              (same as the ones whose details were provided while making the
              booking). This verification is mandatory. In the unfortunate case
              where you cannot show these documents, we will not be able to
              handover the car to you, and it will be treated as a late
              cancellation (100% of the fare would be payable). Driving license
              printed on A4 sheet of paper (original or otherwise) will not be
              considered as a valid document.
            </li>
            <li style={{ marginBottom: "10px" }}>
              <strong>PRE-HANDOVER INSPECTION:</strong> Please inspect the car
              (including the fuel gauge and odometer) thoroughly before
              approving the checklist.
            </li>
          </ul>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default CarDescription;
