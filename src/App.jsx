import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import RecipeDetail from "./components/RecipeDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="">
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="recipes/:id" element={<RecipeDetail />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
