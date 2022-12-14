import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import NotificationsIcon from "@mui/icons-material/Notifications";

export const Notifications = () => {
  const date = new Date().toDateString();

  return (
    <>
      <List sx={{ width: "100%", align: "justify" }}>
        <ListItemButton>
          <ListItemIcon>
            <NotificationsIcon />
          </ListItemIcon>
          <ListItemText
            primary={date}
            secondary="It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
          />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <NotificationsIcon />
          </ListItemIcon>
          <ListItemText
            primary={date}
            secondary="Many desktop publishing packages and web page editors now use."
          />
        </ListItemButton>
      </List>
    </>
  );
};
