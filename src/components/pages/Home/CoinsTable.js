import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CoinList } from "../../../config/api";
import { numberWithCommas } from "./Carousel";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { Pagination } from "@mui/material";
import Pagination from "@mui/material/Pagination";

const CoinsTable = () => {
  const currency = useSelector((state) => state.currency);
  const currencySymbol = useSelector((state) => state.currencySymbol);
  const navigate = useNavigate();

  const [coinsList, setCoinsList] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const fetchCoinsList = async () => {
    const { data } = await axios.get(CoinList(currency));
    setCoinsList(data);
  };

  useEffect(() => {
    fetchCoinsList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency]);

  const handleSearch = () => {
    return coinsList.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
    );
  };

  return (
    <div className=" bg-black py-5 text-center">
      <div className="container mx-auto">
        <h2 className=" mb-5 text-[32px] ">Cryptocurrency Market Data</h2>
        <input
          type="text"
          placeholder="Searh for Cryptocurrency"
          className=" mb-5 w-full max-w-[350px] rounded-xl py-2 pl-2 font-bold text-black"
          onChange={(e) => setSearch(e.target.value)}
        />
        <table className=" mx-auto w-full  lg:w-3/4">
          <thead>
            <tr className=" bg-gradient-to-r from-violet-500 to-fuchsia-500">
              {["Coin", "Price", "24h Change", "Market Cap"].map((head) => (
                <th
                  className="py-3 pl-2  text-left text-[10px] sm:pl-5 sm:text-[18px]"
                  key={head}
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          {handleSearch()
            .slice((page - 1) * 10, (page - 1) * 10 + 10)
            .map((row) => {
              const profit = row.price_change_percentage_24h > 0;
              return (
                <tbody>
                  <tr
                    className=" border-b-2 hover:bg-gray-800"
                    key={row.name}
                    onClick={() => navigate(`coins/${row.id}`)}
                  >
                    <td className="flex items-center gap-3 pl-2 sm:pl-5">
                      <img
                        src={row?.image}
                        alt={row.name}
                        className="max-w-[20px] py-2 sm:max-w-[40px] md:max-w-[50px]"
                      />
                      <div className=" flex flex-col text-left">
                        <span className=" text-[10px] uppercase sm:text-[20px]">
                          {row.symbol}
                        </span>
                        <span className="text-[10px] sm:text-[20px]">
                          {row.name}
                        </span>
                      </div>
                    </td>

                    <td className=" pl-2 text-left text-[10px] sm:pl-5 sm:text-[15px] md:text-[16px]">
                      {currencySymbol}{" "}
                      {numberWithCommas(row.current_price.toFixed(2))}
                    </td>
                    <td
                      style={{
                        color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                      }}
                      className=" pl-2 text-left text-[10px] font-bold sm:pl-5 sm:text-[16px]"
                    >
                      {profit && "+"}
                      {row.price_change_percentage_24h.toFixed(2)}%
                    </td>
                    <td className=" pl-2 text-left text-[10px] sm:pl-5 sm:text-[15px] md:text-[16px]">
                      {currencySymbol}{" "}
                      {numberWithCommas(row.market_cap.toString().slice(0, -6))}
                      M
                    </td>
                  </tr>
                </tbody>
              );
            })}
        </table>
        <Pagination
          color="primary"
          count={(handleSearch()?.length / 10).toFixed(0)}
          className=" mx-auto mt-5 flex max-w-[360px] justify-center  rounded-full bg-gradient-to-r  from-violet-500 to-fuchsia-500 p-1 "
          onChange={(_, value) => {
            setPage(value);
            window.scrollTo({ top: (0, 500), behavior: "smooth" });
          }}
        />
      </div>
    </div>
  );
};

export default CoinsTable;
