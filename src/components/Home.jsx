import React from "react";
import Header from "./Header";

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
    </main>
  );
};

export default Home;
