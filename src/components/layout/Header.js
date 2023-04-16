import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrency } from "../../state/actions";
import { changeCurrencySymbol } from "../../state/actions";

const Header = () => {
  const currency = useSelector((state) => state.currency);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(changeCurrency(event.target.value));
  };

  useEffect(() => {
    if (currency === "inr") {
      dispatch(changeCurrencySymbol("₹"));
    } else if (currency === "usd") {
      dispatch(changeCurrencySymbol("$"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency]);

  return (
    <div className="header border-b-2  border-b-gray-50 bg-black py-3">
      <div className="container mx-auto px-5">
        <div className=" flex items-center justify-between">
          <div className=" text-[32px] font-bold text-orange-600">
            <Link to="/">CryptoView</Link>
          </div>
          <div className=" font-semibold text-black">
            <select
              onChange={handleChange}
              className="rounded-xl  p-2 "
              name="currency"
              id="currency"
            >
              <option value="inr">INR</option>
              <option value="usd">USD</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
