import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

export const ItemCardList = ({item}) => {
  return (
    <>
        <Box
          sx={{ backgroundColor: "grey.900" }}
          className="d-flex flex-row mw-100 shadow-sm mb-3 card"
        >
          <div className="flex-shrink-0 ratio ratio-1x1 w-27">
            <img
              src={item?.image}
              className="img-fluid rounded-start card-img-top"
              alt={item?.name}
            />
            <div className="card-img-overlay p-1">
              <IconButton color="primary" aria-label="Favorite" component="label" className="shadow bg-white bg-opacity-50">
                <FavoriteBorderOutlinedIcon fontSize="small" sx={{textShadow:  "2px 2px #fff", color: "error.main"}} />
              </IconButton>
            </div>
          </div>
          <div className="flex-grow-1"style={{maxWidth: "73%"}}>
            <div className="mw-100 px-3 py-2 d-flex flex-column justify-content-between">
            <div>
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
