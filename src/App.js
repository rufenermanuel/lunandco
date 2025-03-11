// App.js
import React from "react";
import Work from "./Work";
import Header from "./Header";
import Bottles from "./Bottles";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Work productos={Bottles} />
      <Footer/>
    </div>
  );
};

export default App;
