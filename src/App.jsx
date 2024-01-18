import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Footer from "./sections/Footer";
import Navbar from "./components/Navbar";
import News from "./pages/News";
import Shop from "./pages/Shop";
import Review from "./pages/Review";
import Catalog from "./pages/Catalog";

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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
