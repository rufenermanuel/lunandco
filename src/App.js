// App.js
import React from "react";
import Work from "./Work";
import Hero from "./Hero";
import Bottles from "./Bottles";

const App = () => {
  return (
    <div className="app">
      <Hero />
      <Work productos={Bottles} />
    </div>
  );
};

export default App;
