import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Footer from "./sections/Footer";
import Navbar from "./components/Navbar";
import News from "./pages/News";
import Shop from "./pages/Shop";
import Review from "./pages/Review";
import Catalog from "./pages/Catalog";
import Contact from "./pages/Contact";
import Management from "./pages/Management";
import Service from "./pages/Service";
import AboutUs from "./pages/AboutUs";
import WhereBuy from "./pages/WhereBuy";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/review" element={<Review />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/management" element={<Management />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/where-buy" element={<WhereBuy />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
