import React from "react";
import {
  Header,
  Footer,
  About,
  //MyWork,
  Contact,
  Technologies,
} from "./components";

//Styles
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <About />
        <Technologies />
        {/* <MyWork /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
