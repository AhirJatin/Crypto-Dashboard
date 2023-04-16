// import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setExchangeRates, setTrendingCoins } from "../../../state/actions";
import { ExchangeRates, TrendingCoins } from "../../../config/api";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Link } from "react-router-dom";
import axios from "axios";

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Carousel = () => {
  const trendingCoins = useSelector((state) => state.trendingCoins);
  const exchangeRates = useSelector((state) => state.exchangeRates);
  const INR = exchangeRates?.rates?.inr.value;
  const USD = exchangeRates?.rates?.usd.value;
  const currency = useSelector((state) => state.currency);
  const dispatch = useDispatch();

  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins());
    dispatch(setTrendingCoins(data));
  };

  const fetchExchangeRates = async () => {
    const { data } = await axios.get(ExchangeRates());
    dispatch(setExchangeRates(data));
  };

  useEffect(() => {
    fetchTrendingCoins();
    fetchExchangeRates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const items = trendingCoins.coins?.map((item) => {
    return (
      <Link
        className="flex flex-col items-center"
        to={`/coins/${item.item.id}`}
      >
        <img
          className=" mb-3 w-full max-w-[80px]"
          src={item.item.large}
          alt={item.item.name}
        />
        <span className="text-[14px]">{item.item.symbol}</span>
        <span className="ml-3 text-[14px]">
          Rank: {item.item.market_cap_rank}
        </span>
        {currency === "inr" ? (
          <p>
            {exchangeRates?.rates?.inr.unit}{" "}
            {numberWithCommas((item.item.price_btc * INR).toFixed(2))}
          </p>
        ) : (
          <p>
            {exchangeRates?.rates?.usd.unit}{" "}
            {numberWithCommas((item.item.price_btc * USD).toFixed(2))}
          </p>
        )}
      </Link>
    );
  });

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };

  return (
    <div className="pt-10 font-bold ">
      <h3 className="mb-5 text-center text-[22px]">Top 7 Trending Coins</h3>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        autoPlay
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
      />
    </div>
  );
};

export default Carousel;
