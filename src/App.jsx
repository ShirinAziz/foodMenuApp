import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import RecipeDetail from "./components/RecipeDetail";
import SearchResult from "./components/SearchResult";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="menu/:categoryName" element={<Menu />} />
        <Route path="recipedetail/:recipeId" element={<RecipeDetail />} />
        <Route path="search" element={<SearchResult />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
