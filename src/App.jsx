import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/home";
import CartPage from "./pages/cartpage";
import Order from "./pages/Order";
import CTA from "./components/cta/cta";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <CTA />
                </>
              }
            />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/order" element={<Order />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
