import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css/bundle";

import Box from "@mui/material/Box";

export const SlideBannersBar = () => {
  return (
    <>
      <Box sx={{ height: "20px" }}></Box>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={10}
        modules={[FreeMode]}
        freeMode={true}
      >
        <SwiperSlide>
          <img src="https://images.unsplash.com/photo-1483137140003-ae073b395549?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=100" alt="Banner 1" width="250px" className="img-fluid border shadow-sm rounded-4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.unsplash.com/photo-1479150928156-423a69d91fe0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=100" alt="Banner 2" width="250px" className="img-fluid border shadow-sm rounded-4" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
