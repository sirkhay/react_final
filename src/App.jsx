/** @format */

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import AppHeader from "./components/layout/Header";
import Home from "./components/home";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
        <AppHeader />
        <Home />
        <Footer />
    </>
  );
}

export default App;
