// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./index.css";
// import { CookiesProvider } from "react-cookie";

// import HomePage from "./landing_page/home/Homepage";
// import SignupPage from "./landing_page/signup/signupPage";
// import AboutPage from "./landing_page/about/aboutpage";
// import ProductPage from "./landing_page/products/productsPage";
// import PricingPage from "./landing_page/pricing/pricingPage";
// import SupportPage from "./landing_page/Support/SupportPage";

// import NotFound from "./landing_page/NotFound";
// import Navbar from "./landing_page/Navbar";
// import Footer from "./landing_page/Footer";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <BrowserRouter>
//    <CookiesProvider>
//     <Navbar />
//     <Routes>
//       <Route path="/" element={<HomePage />} />
//       <Route path="/signup" element={<SignupPage />} />
//       <Route path="/about" element={<AboutPage />} />
//       <Route path="/product" element={<ProductPage />} />
//       <Route path="/pricing" element={<PricingPage />} />
//       <Route path="/support" element={<SupportPage />} />
//       <Route path="*" element={<NotFound />} />
//     </Routes>
//     <Footer />
//     </CookiesProvider>
//   </BrowserRouter>
// );


import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css"; // We will add the layout styles here
import { CookiesProvider } from "react-cookie";

import HomePage from "./landing_page/home/Homepage";
import SignupPage from "./landing_page/signup/signupPage";
import AboutPage from "./landing_page/about/aboutpage";
import ProductPage from "./landing_page/products/productsPage";
import PricingPage from "./landing_page/pricing/pricingPage";
import SupportPage from "./landing_page/Support/SupportPage";

import NotFound from "./landing_page/NotFound";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <CookiesProvider>
      {/* This main container is the key to the layout fix */}
      <div className="app-container">
        <Navbar />
        {/* The main content area will grow to push the footer down */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </CookiesProvider>
  </BrowserRouter>
);
