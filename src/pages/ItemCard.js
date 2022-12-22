import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const ItemCard = ({ item }) => {
  return (
    <>
      <div className="mt-4">
        <Box sx={{ backgroundColor: "grey.900" }} className="card shadow-sm border">
          <div className="ratio ratio-4x3">
            <img src={item?.image} alt={item?.name} className="card-img-top" />
          </div>
          <div className="card-body pb-0">
            <span className="fs-3 fw-bold d-inline-block mw-100 text-truncate">
              {item?.name}
            </span>
            <div className="small">{item?.category}</div>
          </div>
          <div className="card-body d-flex flex-row align-items-center justify-content-between">
            <span className="fs-5 fw-500">
              <small>RM</small> <strong>{item?.cost}</strong>
            </span>
            <IconButton
              color="primary.contrastText"
              aria-label="add to shopping cart"
              className="bg-secondary bg-opacity-25 shadow-sm"
            >
              <ShoppingCartIcon />
            </IconButton>
          </div>
        </Box>
      </div>
    </>
  );
};
