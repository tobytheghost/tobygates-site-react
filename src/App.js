import React from "react";
import { Header, Footer, About, MyWork, Contact, Nav } from "./components";

//Styles
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Nav />
        <About />
        <MyWork />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
