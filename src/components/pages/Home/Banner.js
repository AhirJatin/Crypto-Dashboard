import React from "react";
import Carousel from "./Carousel";
// import { useDispatch } from "react-redux";
// import axios from "axios";
// import { TrendingCoins } from "../../../config/api";
// import { setTrendingCoins } from "../../../state/actions";

const Banner = () => {
  return (
    <div className=" bg-gradient-to-b from-blue-950 to-black py-10">
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className=" inline-block bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-[28px] font-bold text-transparent sm:text-[42px]">
            TRACK AND TRADE
          </h1>
          <br />
          <h2 className=" inline-block bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-[28px] font-bold text-transparent sm:text-[42px]">
            CRYPTO CURRENCIES
          </h2>
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
