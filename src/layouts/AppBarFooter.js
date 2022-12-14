import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

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
        }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <Link href="/" color="secondary" underline="none">
          <BottomNavigationAction sx={{paddingTop: "15px"}} icon={<StorefrontIcon />} />
        </Link>
        <Link href="orders" color="secondary" underline="none">
          <BottomNavigationAction sx={{paddingTop: "15px"}} icon={<ListAltIcon />} />
        </Link>
        <Link href="notifications" color="secondary" underline="none">
          <BottomNavigationAction sx={{paddingTop: "15px"}} icon={<NotificationsIcon />} />
        </Link>
        <Link href="profile" color="secondary" underline="none">
          <BottomNavigationAction sx={{paddingTop: "15px"}} icon={<AccountCircleIcon />} />
        </Link>
      </BottomNavigation>
    </Box>
  );
}
export default AppBarFooter;
