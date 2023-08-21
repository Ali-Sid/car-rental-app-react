import { useState } from "react";
import {
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div style={{ position: "absolute", top: "10px", right: "10px" }}>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleMenu}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={closeMenu}
        PaperProps={{ style: { width: "300px" } }}
      >
        <CloseIcon
          onClick={closeMenu}
          style={{ cursor: "pointer", marginTop: "10px", marginLeft: "10px" }}
        />
        <List>
          <ListItem
            Button
            component="a"
            href="/"
            onClick={closeMenu}
            style={{ color: "#0a0a0a" }}
          >
            <ListItemText
              primary="Home"
              primaryTypographyProps={{
                style: { fontFamily: "'play', sans-serif" },
              }}
            />
          </ListItem>
          <ListItem
            Button
            onClick={closeMenu}
            style={{ color: "#0a0a0a" }}
          >
            <Link
              to="Fleets"
              primaryTypographyProps={{
                style: { fontFamily: "'play', sans-serif", color: "#0a0a0a" },
              }}
            >Fleets</Link>
          </ListItem>
          <ListItem
            Button
            onClick={closeMenu}
            style={{ color: "#0a0a0a" }}
          >
            <Link
              to="/"
              primaryTypographyProps={{
                style: { fontFamily: "'play', sans-serif", color: "#0a0a0a" },
              }}
            >Contact</Link>
          </ListItem>
          <ListItem
            Button
            onClick={closeMenu}
            style={{ color: "#0a0a0a" }}
          >
            <Link
              to="/login"
              primaryTypographyProps={{
                style: { fontFamily: "'play', sans-serif", color: "#0a0a0a" },
              }}
            >Logout</Link>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default HamburgerMenu;
