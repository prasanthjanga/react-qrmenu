import * as React from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ListAltIcon from "@mui/icons-material/ListAlt";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function AppBarFooter() {
  const [value, setValue] = React.useState(0);

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
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          component={Link}
          to="/"
          icon={<StorefrontIcon />}
        />

        <BottomNavigationAction
          component={Link}
          to="orders"
          icon={<ListAltIcon />}
        />

        <BottomNavigationAction
          component={Link}
          to="notifications"
          icon={<NotificationsIcon />}
        />

        <BottomNavigationAction
          component={Link}
          to="profile"
          icon={<AccountCircleIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
export default AppBarFooter;
