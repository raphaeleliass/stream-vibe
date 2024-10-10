import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Footer from "@/components/Footer/footer";
import Navbar from "@/components/Navbar/navbar";
import MoviesNShows from "./pages/Movies&Shows";
import Movie from "./pages/Movie";
import Show from "./pages/Show";
import ScrollToTop from "@/components/scrollToTop";
import Support from "./pages/Support";
import Subscriptions from "./pages/Subscriptions";
import Liked from "./pages/Favorites";
import GenreListMovies from "./pages/GenreListMovies";
import GenreListShows from "./pages/GenreListShows";

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
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/show/:id" element={<Show />} />
        <Route path="/movies/:id" element={<GenreListMovies />} />
        <Route path="/shows/:id" element={<GenreListShows />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default RoutesProvider;
