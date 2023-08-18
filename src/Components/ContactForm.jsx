import { Grid, TextField, Typography, Button } from "@mui/material";
import { useState, useEffect } from "react";

const ContactForm = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <Grid container spacing={3}>
      {/* Form */}
      <Grid item xs={12} sm={6}>
        <form name="contact" method="POST" data-netlify="true" style={{ padding: "30px" }}>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            margin="normal"
            name="name"
          />
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            name="email"
            type="email"
          />
          <TextField
            fullWidth
            label="Subject"
            variant="outlined"
            margin="normal"
            name="subject"
          />
          <TextField
            fullWidth
            label="Message"
            variant="outlined"
            margin="normal"
            name="message"
            multiline
            rows={4}
          />
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>
      </Grid>

      {/* Address */}
      <Grid
        item
        xs={12}
        sm={4}
        style={{
          backgroundColor: "cyan",
          color: "#0a0a0a",
          borderRadius: "15px",
          padding: "50px 10px",
          marginTop: "60px",
          marginBottom: !isMobile && "50px",
          marginLeft: isMobile ? "20px" : "100px"
        }}
      >
        <div>
          <Typography variant="h6">Address</Typography>
          <Typography>123 Main Street</Typography>
          <Typography>Hyderabad, 500092</Typography>
          <Typography>India</Typography>
        </div>
        <div style={{marginTop: "50px"}}>
          <Typography variant="h6">Phone</Typography>
          <Typography>123 456 7890</Typography>
        </div>
        <div style={{marginTop: "50px"}}>
          <Typography variant="h6">Hours</Typography>
          <Typography>Mon-Fri: 9am to 5pm</Typography>
        </div>
      </Grid>
    </Grid>
  );
};

export default ContactForm;
