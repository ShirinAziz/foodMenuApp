import React from "react";
import Header from "./Header";
import Categories from "./Categories";

const Home = () => {
  return (
    <main className="w-full flex flex-col">
      <Header
        title={
          <p>
            Taste the World with
            <br /> WorldFlavors
          </p>
        }
        type="home"
      />
      <div id="recipes" className="md:max-w-[1440px] ">
        <Categories />
      </div>
    </main>
  );
};

export default Home;
