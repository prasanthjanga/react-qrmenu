import * as React from "react";
import Box from "@mui/material/Box";
import { NavLink } from "react-router-dom";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ListAltIcon from "@mui/icons-material/ListAlt";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function AppBarFooter() {

  return (
    <Box>
      <BottomNavigation
        sx={{
          width: "100%",
          position: "fixed",
          bottom: 0,
          color: "#000",
          boxShadow: "0px -6px 30px rgb(19 15 38 / 9%)",
          borderRadius: "5px 5px 0px 0px",
          "& .MuiBottomNavigationAction-root > svg": {
            color: "grey.main",
          },
          "& a.active > .MuiBottomNavigationAction-root > svg": {
            color: "primary.main",
          },
        }}
      >
        <NavLink to="/" underline="none">
          <BottomNavigationAction sx={{ paddingTop: "15px" }} label="Home" icon={<StorefrontIcon />} />
        </NavLink>
        <NavLink to="orders" underline="none">
          <BottomNavigationAction sx={{ paddingTop: "15px" }} label="Orders" icon={<ListAltIcon />} />
        </NavLink>
        <NavLink to="notifications" underline="none">
          <BottomNavigationAction sx={{ paddingTop: "15px" }} label="Notifications" icon={<NotificationsIcon />} />
        </NavLink>
        <NavLink to="profile" underline="none">
          <BottomNavigationAction sx={{ paddingTop: "15px" }} label="Profile" icon={<AccountCircleIcon />} />
        </NavLink>
      </BottomNavigation>
    </Box>
  );
}
export default AppBarFooter;
