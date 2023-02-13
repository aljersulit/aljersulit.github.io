import React, { useState, useEffect } from "react";

import {
  About,
  Footer,
  Header,
  Skills,
  Certification,
  Work,
} from "./container";
import { Navbar, Loader } from "./components";
import "./App.scss";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoaded(true);
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="app">
      {!isLoaded && <Loader />}
      {isLoaded && (
        <>
          <Navbar />
          <Header />
          <About />
          <Work />
          <Skills />
          <Certification />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
