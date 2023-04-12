import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components";
import { Home, Dashboard, News, About, Contact, Setting, Error } from "./pages";
import StockSymbol from "./contexts/StockSymbol";
import NewsContext from "./contexts/NewsContext";
import { useState } from "react";

function App() {
  const [stockSymbol, setStockSymbol] = useState("TSLA");
  const [newsSymbol, setNewsSymbol] = useState("Snaha");
  return (
    <StockSymbol.Provider value={{ stockSymbol, setStockSymbol }}>
      <NewsContext.Provider value={{ newsSymbol, setNewsSymbol }}>
        <div className="grid grid-cols-5 grid-rows-1 max-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/news" element={<News />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </div>
      </NewsContext.Provider>
    </StockSymbol.Provider>
  );
}

export default App;
