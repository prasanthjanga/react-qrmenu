import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const ItemCardList = ({item}) => {
  return (
    <>
        <Box
          sx={{ backgroundColor: "grey.900" }}
          className="d-flex mw-100 shadow-sm mt-4"
        >
          <div className="flex-shrink-0 ratio ratio-1x1 w-27">
            <img
              src={item?.image}
              className="img-fluid rounded-start"
              alt={item?.name}
            />
          </div>
          <div className="flex-grow-1"style={{maxWidth: "73%"}}>
            <div className="mw-100 px-3 py-2 d-flex flex-column justify-content-between">
            <div className="card-body ">
              <div className="fw-bold fs-5 text-truncate">{item?.name}</div>
              <div className="small">{item?.category}</div>
            </div>
            <div className="card-text d-flex flex-row align-items-center justify-content-between">
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
            </div>
          </div>
        </Box>
    </>
  );
};
