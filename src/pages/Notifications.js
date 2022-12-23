import Box from "@mui/material/Box";
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

export const Notifications = () => {
  const date = new Date().toDateString();

  return (
    <>
      <Box>
        <ul className="list-unstyled">
          <li className="p-2 border-bottom">
            <div className="d-flex flex-row align-items-center justify-content-between">
              <span className="flex-grow text-truncate fw-bold pe-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem pariatur obcaecati sequi.</span>
              <small className="d-flex flex-row align-itmes-center flex-shrink-0 text-muted">
                <AccessTimeOutlinedIcon fontSize="small" className="me-1" /> 01:00 AM
              </small>
            </div>
            <div className="text-justify text-wrap text-break py-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis asperiores illum, iusto ipsa perspiciatis dolore?
            </div>
          </li>
          <li className="p-2 border-bottom">
            <div className="d-flex flex-row align-items-center justify-content-between">
              <span className="flex-grow text-truncate fw-bold pe-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem pariatur obcaecati sequi.</span>
              <small className="d-flex flex-row align-itmes-center flex-shrink-0 text-muted">
                <AccessTimeOutlinedIcon fontSize="small" className="me-1" /> 01:00 AM
              </small>
            </div>
            <div className="text-justify text-wrap text-break py-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis asperiores illum, iusto ipsa perspiciatis dolore?
            </div>
          </li>
        </ul>
      </Box>
    </>
  );
};
