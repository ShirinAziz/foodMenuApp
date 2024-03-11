import React from "react";
import Header from "./Header";
import Recipes from "./Recipes";

const Home = () => {
  return (
    <main className="w-full flex flex-col">
      <Header
        title={
          <p>
            Taste the World with
            <br /> Flavor...
          </p>
        }
        type="home"
      />
      <div id="recipes" className="md:max-w-[1440px] ">
        <Recipes />
      </div>
    </main>
  );
};

export default Home;
