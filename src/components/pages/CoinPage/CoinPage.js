import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { SingleCoin } from "../../../config/api";
import { useParams } from "react-router-dom";
import { numberWithCommas } from "../Home/Carousel";
import { useSelector } from "react-redux";
import DOMPurify from "dompurify";
const CoinPage = () => {
  const { id } = useParams();
  const currencySymbol = useSelector((state) => state.currencySymbol);
  const currency = useSelector((state) => state.currency);
  const [coin, setCoin] = useState({});
  // console.log(coin);
  // console.log(coin.id);

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));
    // console.log(data);
    setCoin(data);
  };

  useEffect(() => {
    fetchCoin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const profit = coin.market_data ? coin.price_change_percentage_24h > 0 : "";

  return (
    <div className=" bg-gradient-to-b from-blue-950 to-black py-10">
      <div className="container mx-auto">
        <div className=" flex flex-col items-center justify-around md:h-[100vh] md:flex-row">
          <div className=" flex min-w-[300px]  flex-col items-center justify-center border-l-white pr-3 text-center md:border-r-[1px]">
            <div>
              {coin.image ? (
                <img
                  className=" mb-5 max-w-[150px]"
                  src={coin?.image.large}
                  alt={coin?.name}
                />
              ) : null}
              <h3 className="text-[22px]">{coin?.name}</h3>
              <p className=" text-[18px]">Rank: # {coin?.market_cap_rank}</p>
            </div>
            <div>
              <span className="text-[18px]">24h Change:</span>
              <span
                style={{
                  color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                }}
                className=" ml-3 text-[18px] font-bold "
              >
                {coin.market_data
                  ? coin.market_data.price_change_percentage_24h.toFixed(2) +
                    "%"
                  : ""}
              </span>
            </div>
            <div>
              <span className="text-[18px]">Current Price:</span>
              <span className="ml-3 text-[18px]">
                {currencySymbol}{" "}
                {coin.market_data
                  ? numberWithCommas(
                      coin?.market_data?.current_price[currency.toLowerCase()]
                    )
                  : ""}
              </span>
            </div>
            <div>
              <span className="text-[18px]">Market Cap:</span>
              <span className="ml-3 text-[18px]">
                {currencySymbol}{" "}
                {coin.market_data
                  ? numberWithCommas(
                      coin?.market_data.market_cap[currency.toLowerCase()]
                        .toString()
                        .slice(0, -6)
                    )
                  : ""}
                M
              </span>
            </div>
          </div>
          <div className=" mt-10 md:mt-0">
            <p
              className=" mx-10 max-h-[300px] max-w-[900px] overflow-y-auto rounded-xl border-[1px] border-white px-3 pt-3"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  coin.description ? coin.description.en : ""
                ),
              }}
            ></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinPage;
