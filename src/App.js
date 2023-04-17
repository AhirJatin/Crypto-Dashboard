import Header from "./components/layout/Header";
import CoinPage from "./components/pages/CoinPage/CoinPage";
import HomePage from "./components/pages/Home/HomePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App ">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coins/:id" element={<CoinPage />} />
      </Routes>
    </div>
  );
}

export default App;
