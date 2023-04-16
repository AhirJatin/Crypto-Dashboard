import changeCurrencyReducer from "./changeCurrency";
import changeCurrencySymbolReducer from "./changeCurrencySymbol";
import setTrendingCoinsReducer from "./trendingCoins";
import setExchangeRatesReducer from "./exchangeRates";
import setCoinIdReducer from "./coinid";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  currency: changeCurrencyReducer,
  currencySymbol: changeCurrencySymbolReducer,
  trendingCoins: setTrendingCoinsReducer,
  exchangeRates: setExchangeRatesReducer,
  coinId: setCoinIdReducer,
});

export default rootReducer;
