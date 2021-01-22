import React, { Suspense, lazy } from "react";
import {
  Header,
  // Footer,
  // About,
  // //MyWork,
  // Contact,
  // Technologies,
} from "./components";

//Styles
import "./App.scss";

const Footer = lazy(() => import("./components/Footer/Footer"));
const About = lazy(() => import("./components/About/About"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Technologies = lazy(() =>
  import("./components/Technologies/Technologies")
);

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Suspense fallback={<div>Loading ...</div>}>
          <About />
        </Suspense>
        <Suspense fallback={<div>Loading ...</div>}>
          <Technologies />
        </Suspense>
        {/* <MyWork /> */}
        <Suspense fallback={<div>Loading ...</div>}>
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<div>Loading ...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
