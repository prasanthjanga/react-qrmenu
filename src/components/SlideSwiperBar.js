import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css/bundle";

import Link from "@mui/material/Link";

import LunchDiningIcon from "@mui/icons-material/LunchDining";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import { ThemeDark, ThemeLight } from '../theme/ThemePalette';
import { useLocalStorage } from "../hooks/useLocalStorage";

export const SlideSwiperBar = () => {
  const themeMode = useLocalStorage('light');
  const myMode = (themeMode === 'light') ? ThemeDark.palette : ThemeLight.palette

  return (
    <>
      <Swiper
        className="mt-3"
        slidesPerView={"auto"}
        spaceBetween={10}
        modules={[FreeMode]}
        freeMode={true}
      >
        <SwiperSlide>
          <Link href="/">
            <LunchDiningIcon fontSize="large" sx={{color:"success.main"}} />
            <span>Lunch</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/">
            <LocalPizzaIcon fontSize="large" sx={{color:"error.main"}} />
            <span style={{color:myMode.success.main}}>Pizza</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/">
            <FastfoodIcon fontSize="large" sx={{color:"info.main"}} />
            <span>Fast Food</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/">
            <LocalCafeIcon fontSize="large" sx={{color:"warning.main"}} />
            <span>Cafe</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/">
            <RamenDiningIcon fontSize="large" sx={{color:"primary.main"}} />
            <span>Dining</span>
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
