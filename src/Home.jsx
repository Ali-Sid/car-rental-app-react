import Navbar from "./Components/Navbar";
import { useState, useEffect } from "react";
import Schedule from "./Components/Schedule";
import DisplayPage from "./Components/DisplayPage";
import { Button } from "@mui/material";
import ContactForm from "./Components/ContactForm";
import BottomNav from "./Components/BottomNav";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  const navigate = useNavigate()
  const handleShowButton = () => {
    navigate("/fleets")
    window.scrollTo(0, 0) // I used this because by default it was showing me the bottom part of the fleets' page instead of top
    // after the navigation, we're instructing the browser to scroll to the top of the page immediately after the navigation.
    // I have tried using navigate("/fleets#top") but it didn't work, then used the MUI's Link inside a button, then worked perfectly i.e, at the top of the page after navigating but still preferred this method
  }

  const handleScorpio = () => {
    navigate("/fleets/9")
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div>
      <Navbar />
      <div
        style={{
          fontFamily: "'play', sans-serif",
          fontSize: "1.3em",
          backgroundColor: "#dcdcdc",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          marginTop: "10px",
          marginRight: isMobile && "20px",
          right: isMobile && "20px"
        }}
      >
        <div
          style={{
            width: isMobile ? "100%" : "50%",
            textAlign: isMobile ? "center" : "left",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            margin: isMobile ? "auto" : "initial",
            paddingTop: "60px",
          }}
        >
          <h1>Car Rental Made Easy</h1>
          {!isMobile && <Schedule />}
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dr1pmtefx/image/upload/f_auto,q_auto/Overview_e0h9uu"
            alt="mg"
            style={{ maxWidth: "100%" }}
          />
          {isMobile && <Schedule />}
        </div>
      </div>
      <div style={{ fontFamily: "'play', sans-serif", marginTop: "60px" }}>
        <h1>Our Trending Fleets</h1>
        <p>
          Our vehicle is designed to provide customers with a wide range of
          options to choose from,
          <br /> with a focus on comfort, performance, and reliability.
        </p>
        <DisplayPage />
        <Button onClick={handleShowButton} style={{ padding: "30px" }}>Show More</Button>
      </div>
      <div style={{ fontFamily: "'play', sans-serif" }}>
        <h1>Exclusive Offer</h1>
        <p>
          Our vehicle is designed to provide customers with a wide range of
          options to choose from,
          <br /> with a focus on comfort, performance, and reliability.
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: !isMobile ? "row" : "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "50px",
            marginTop: "50px",
          }}
        >
          <div
            style={{
              width: "380px",
              backgroundColor: "#fff",
              borderRadius: "15px",
            }}
          >
            <h2 style={{ textAlign: "right", paddingRight: "20px" }}>
              Mahindra Scorpio N <br />
              for <strong>₹249/hr</strong>
              <br />
              <br />
              <Button
                variant="contained"
                style={{ backgroundColor: "cyan", color: "#0a0a0a" }}
                onClick={handleScorpio}
              >
                Book Now
              </Button>
            </h2>
            <img
              style={{ width: "380px" }}
              src="https://res.cloudinary.com/dr1pmtefx/image/upload/f_auto,q_auto/17733439-ScorpioN.jpg-804fbad4-929e-4acc-ac51-196a4b95f367_f2qt6p"
              alt="Scorpio"
            />
          </div>
          <div
            style={{
              width: "380px",
              backgroundColor: "cyan",
              borderRadius: "15px",
            }}
          >
            <h2 style={{ textAlign: "left", paddingLeft: "20px" }}>
              New models arrive
              <br />
              every week <br />
              <br />
              <Button
                variant="contained"
                onClick={handleShowButton}
                style={{ backgroundColor: "#fff", color: "#0a0a0a" }}
              >
                Explore More
              </Button>
            </h2>
            <img
              style={{ width: "380px" }}
              src="https://res.cloudinary.com/dr1pmtefx/image/upload/f_auto,q_auto/kia_seltos_rtimzk"
              alt="Seltos"
            />
          </div>
        </div>
      </div>
      <div style={{ fontFamily: "'play', sans-serif", marginTop: "100px" }}>
        <h1>Questions? Get in Touch</h1>
        <div
          style={{
            width: "100%",
            backgroundColor: "#fff",
            borderRadius: "15px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "50px",
          }}
        >
          <ContactForm />
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default Home;
