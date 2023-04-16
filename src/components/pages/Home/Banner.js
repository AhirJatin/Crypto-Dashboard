import React from "react";
import Carousel from "./Carousel";
// import { useDispatch } from "react-redux";
// import axios from "axios";
// import { TrendingCoins } from "../../../config/api";
// import { setTrendingCoins } from "../../../state/actions";

const Banner = () => {
  return (
    <div className=" border-b-2 border-b-white bg-bannerBg py-10">
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className=" text-[42px] font-bold ">CryptoView</h1>
          <p className=" capitalize">
            Get all the info regarding your favorite crypto currency
          </p>
        </div>
        <Carousel />
      </div>
    </div>
  );
};

export default Banner;
