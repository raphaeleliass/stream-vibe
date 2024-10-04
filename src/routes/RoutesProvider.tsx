import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Footer from "@/components/Footer/footer";
import Navbar from "@/components/Navbar/navbar";
import MoviesNShows from "./pages/Movies&Shows";
import Movie from "./pages/Movie";
import Tv from "./pages/Tv";
import ScrollToTop from "@/components/scrollToTop";
import Support from "./pages/Support";

function RoutesProvider() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/movies&shows" element={<MoviesNShows />} />
        <Route path="/support" element={<Support />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/tv/:id" element={<Tv />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default RoutesProvider;
