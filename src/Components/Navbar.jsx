import { Link, Button, useMediaQuery } from "@mui/material";
import HamburgerMenu from "./HamburgerMenu";
// import { useState } from "react";
import { useNavigate, Link as NavLink } from "react-router-dom";

const Navbar = () => {
  // const [isMobile, setIsMobile] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/login")
  };

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth <= 768);
  //   };

  //   handleResize();

  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "60px",
        backgroundColor: "#fff",
        paddingLeft: "20px",
        paddingRight: "20px",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        fontSize: "1.3rem",
        color: "#0a0a0a",
        zIndex: "100",
        margin: "20px",
        borderRadius: "10px",
        fontFamily: "'play', sans-serif",
      }}
    >
      <nav style={{ display: "flex", alignItems: "center" }}>
        <Link
          href="/"
          style={{
            marginRight: "30px",
            color: "#0a0a0a",
            fontWeight: "700",
            fontSize: "28px",
          }}
        >
          Car/hr
        </Link>
        {!isMobile ? (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "50px",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "15vw",
            }}
          >
            <Link href="/" style={{ color: "#0a0a0a" }}>
              Home
            </Link>
            <NavLink to="/fleets" style={{ color: "#0a0a0a", textDecoration: "underline" }}>
              Fleets
            </NavLink>
            <Link href="/" style={{ color: "#0a0a0a" }}>
              About Us
            </Link>
            <Link href="/" style={{ color: "#0a0a0a" }}>
              Contact Us
            </Link>
          </div>
        ) : (
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <HamburgerMenu />
          </div>
        )}
      </nav>
      {!isMobile && (
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <Button
            onClick={handleLoginClick}
            variant="contained"
            style={{ color: "#fff", backgroundColor: "#0a0a0a" }}
          >
            Login
          </Button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
