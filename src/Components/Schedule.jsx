import { useState, useEffect } from "react";
import { Box, TextField, MenuItem, Button } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import { useNavigate } from "react-router-dom";

const Schedule = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");
  const cities = ["New Delhi", "Hyderabad", "Bengaluru", "Mumbai"];


  const navigate = useNavigate();
  const handleUserClick = () => {
    navigate("/fleets")
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {!isMobile && (
        <form onSubmit={handleUserClick}>
        <Box
          style={{
            backgroundColor: "#fff",
            width: "20em",
            height: "auto",
            justifyContent: "center",
            borderRadius: "15px",
            padding: "20px",
          }}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateTimePicker", "DateTimePicker"]}>
              <DateTimePicker
                label="Start Time"
                viewRenderers={{
                  hours: renderTimeViewClock,
                  minutes: renderTimeViewClock,
                  seconds: renderTimeViewClock,
                }}
              />
              <DateTimePicker
                label="End Time"
                viewRenderers={{
                  hours: renderTimeViewClock,
                  minutes: renderTimeViewClock,
                  seconds: renderTimeViewClock,
                }}
              />
            </DemoContainer>
          </LocalizationProvider>
          <TextField
            select
            label="Select City"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            style={{ marginTop: "25px", width: "100%" }}
          >
            {cities.map((city) => (
              <MenuItem key={city} value={city}>
                {city}
              </MenuItem>
            ))}
          </TextField>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{ marginTop: "20px" }}
          >
            Search Cars
          </Button>
        </Box>
        </form>
      )}
      {isMobile && (
        <form onSubmit={handleUserClick}>
            <Box
              component="form"
              style={{
                backgroundColor: "#fff",
                width: "80%",
                height: "auto",
                justifyContent: "center",
                borderRadius: "15px",
                marginTop: "20px",
                marginLeft: "30px",
                paddingTop: "20px",
                paddingBottom: "20px"
              }}
            >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer
                  components={["DateTimePicker", "DateTimePicker"]}
                >
                  <DateTimePicker
                    label="Start Time"
                    viewRenderers={{
                      hours: renderTimeViewClock,
                      minutes: renderTimeViewClock,
                      seconds: renderTimeViewClock,
                    }}
                    sx={{width: "90%", left: "15px"}}
                  />
                  <DateTimePicker
                    label="End Time"
                    viewRenderers={{
                      hours: renderTimeViewClock,
                      minutes: renderTimeViewClock,
                      seconds: renderTimeViewClock,
                    }}
                    sx={{width: "90%", left: "15px"}}
                  />
                </DemoContainer>
              </LocalizationProvider>
              <TextField
                select
                label="Select City"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                style={{ marginTop: "20px", width: "90%" }}
              >
                {cities.map((city) => (
                  <MenuItem key={city} value={city}>
                    {city}
                  </MenuItem>
                ))}
              </TextField>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                style={{ marginTop: "20px" }}
              >
                Search Cars
              </Button>
            </Box>
            </form>
          )}
    </>
  );
}

export default Schedule;
