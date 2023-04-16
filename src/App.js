import Header from "./components/layout/Header";
import HomePage from "./components/pages/Home/HomePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App ">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
