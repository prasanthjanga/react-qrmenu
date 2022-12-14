import {  Box, Badge, Typography } from "@mui/material";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function HeaderAppBar() {
  return (
    <Box
      sx={{
        display: "flex",
        p: 1,
        bgcolor: "background.paper",
        borderRadius: 1,
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
        }}
        gap={1}
      >
        <StorefrontIcon />
        <Typography sx={{fontWeight: 'bold'}}>My Shop</Typography>
      </Box>
      <Box p={1}>
        <Badge badgeContent={4} color="error">
          <ShoppingCartIcon color="action" />
        </Badge>
      </Box>
    </Box>
  );
}
export default HeaderAppBar;
