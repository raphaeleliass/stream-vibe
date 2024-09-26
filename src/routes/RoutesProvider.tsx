import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Footer from "@/components/Footer/footer";
import Navbar from "@/components/Navbar/navbar";
import MoviesNShows from "./pages/Movies&Shows";

function RoutesProvider() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/movies&shows" element={<MoviesNShows />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default RoutesProvider;
