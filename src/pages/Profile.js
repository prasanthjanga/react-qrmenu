import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import ListAltIcon from "@mui/icons-material/ListAlt";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import { ToggleColorMode } from "../components/ToggleColorMode";

export const Profile = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          borderRadius: 1,
        }}
        m={1}
      >
        <Avatar
          alt="User Name"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 80, height: 80, backgroundColor: "primary.light" }}
        />
      </Box>
      <Typography
        variant="h6"
        sx={{ display: "flex", justifyContent: "center" }}
        m={1}
      >
        User Name
      </Typography>
      <Divider />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          borderRadius: 1,
        }}
      >
        <List sx={{ width: "100%" }}>
          <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ backgroundColor: "primary.light" }}>
                <FavoriteIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Favourites" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ backgroundColor: "primary.light" }}>
                <ListAltIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Orders" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ backgroundColor: "primary.light" }}>
                <SettingsBrightnessIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Mode" />
            <ToggleColorMode />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ backgroundColor: "primary.light" }}>
                <VerifiedUserIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Term & Conditions / privacy" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ backgroundColor: "primary.light" }}>
                <LiveHelpIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="FAQ" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ backgroundColor: "primary.light" }}>
                <PowerSettingsNewIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Log out" />
          </ListItem>
        </List>
      </Box>
    </>
  );
};
