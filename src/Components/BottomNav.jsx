import { Link, TextField, InputAdornment, IconButton, Divider, useMediaQuery  } from "@mui/material"
import { ArrowForward} from "@mui/icons-material";

function BottomNav() {
    const isMobile = useMediaQuery("(max-width: 768px)")
  return (
    <>
    <div
style={{
  width: "100%",
  backgroundColor: "#0a0a0a",
  color: "#fff",
  fontFamily: "'play', sans-serif",
  borderRadius: "15px",
  marginTop: "50px",
  display: "flex",
  flexDirection: "column",
  // paddingLeft: !isMobile && "20px",
  justifyContent: isMobile ? "center" : "flex-start", // Center on mobile, align to left on desktop
  alignItems: "left", // Align items to left in both cases
}}
>
<div
  style={{
    display: "flex",
    flexDirection: !isMobile ? "row" : "column",
  }}
>
  <div
    style={{
      paddingLeft: !isMobile && "50px",
      width: isMobile ? "100%" : "20%",
      paddingRight: !isMobile && "60px",
    }}
  >
    <h1 style={{ textAlign: !isMobile && "left" }}>
      <Link style={{ color: "#fff" }} href="/">
        Car/hr
      </Link>
    </h1>
    <p style={{ textAlign: !isMobile && "left" }}>
      Rent high quality cars for your fun <br /> vacation and road trips
    </p>
  </div>
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      width: isMobile ? "100%" : "20%",
      paddingTop: "20px",
      gap: "10px",
    }}
  >
    <h3>Quick Links</h3>
    <Link style={{ color: "#fff" }} href="/login">
      Login
    </Link>
    <Link style={{ color: "#fff" }} href="/fleets">
      Fleets
    </Link>
    <Link style={{ color: "#fff" }} href="/">
      Insurance
    </Link>
    <Link style={{ color: "#fff" }} href="/">
      Payment
    </Link>
  </div>
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      width: isMobile ? "100%" : "20%",
      paddingTop: "20px",
      gap: "10px",
    }}
  >
    <h3>Menu</h3>
    <Link style={{ color: "#fff" }} href="/">
      Home
    </Link>
    <Link style={{ color: "#fff" }} href="/fleets">
      Fleets
    </Link>
    <Link style={{ color: "#fff" }} href="/about">
      About Us
    </Link>
    <Link style={{ color: "#fff" }} href="/">
      Features
    </Link>
    <Link style={{ color: "#fff" }} href="/">
      Help
    </Link>
  </div>
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      width: isMobile ? "100%" : "30%",
      paddingTop: "20px",
      gap: "10px",
    }}
  >
    <h3>Subscribe to our Newsletter</h3>
    <TextField
      label="Email"
      name="email"
      type="email"
      style={{
        backgroundColor: "#fff",
        width: "80%",
        height: "50px",
        marginLeft: "40px",
        borderRadius: "15px",
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton style={{backgroundColor: "#0a0a0a", color: "#fff", borderRadius: "15px", marginBottom: "5px", marginRight: "-8px"}}>
              <ArrowForward />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  </div>
</div>
<div style={{ display: "flex", flexDirection: "column", marginTop: "60px", marginLeft: !isMobile ? "50px" : "10%" }}>
  <Divider style={{border: "1px solid grey", width: isMobile ? "90%" : "95%", borderRadius: "15px"}} />
  <div style={{marginTop: "30px", display: "flex", flexDirection: !isMobile ? "row" : "column", paddingBottom: "20px"}}>
  <div>&copy; 2023 Car/hr</div>
  <div style={{marginLeft: !isMobile && "200px", display: "flex", flexDirection: isMobile && "column", marginTop: isMobile && "20px"}}>
    <Link style={{color: "#fff", marginRight: !isMobile && "30px", marginBottom: "10px"}}>Terms</Link>
    <Link style={{color: "#fff", marginRight: !isMobile && "30px", marginBottom: "10px"}}>Privacy Policy</Link>
    <Link style={{color: "#fff", marginRight: !isMobile && "30px", marginBottom: "10px"}}>Legal notice</Link>
    <Link style={{color: "#fff", marginRight: !isMobile && "30px", marginBottom: "10px"}}>Accessibility</Link>
  </div>
  </div>
  
</div>
</div>
    </>
  )
}

export default BottomNav

{/* --------------------Bottom Nav---------------------------------- */}
