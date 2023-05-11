import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import { Navbar } from "./components";
import {
  Home,
  Dashboard,
  News,
  About,
  Contact,
  Setting,
  Error,
  Login,
  Registration,
} from "./pages";
import StockSymbol from "./contexts/StockSymbol";
import NewsContext from "./contexts/NewsContext";
import LoginContext from "./contexts/LoginContext";
import { useEffect, useState } from "react";

function App() {
  const [stockSymbol, setStockSymbol] = useState("TSLA");
  const [newsSymbol, setNewsSymbol] = useState("Snaha");
  const [login, setLogin] = useState(null);
  return (
    <LoginContext.Provider value={{ login, setLogin }}>
      <StockSymbol.Provider value={{ stockSymbol, setStockSymbol }}>
        <NewsContext.Provider value={{ newsSymbol, setNewsSymbol }}>
          <div className="grid grid-cols-5 grid-rows-1 max-h-screen">
            <Navbar />
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/Registration" element={<Registration />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/news" element={<News />} />
              <Route path="/setting" element={<Setting />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/error" element={<Error />} />
            </Routes>
          </div>
        </NewsContext.Provider>
      </StockSymbol.Provider>
    </LoginContext.Provider>
  );
}

export default App;
