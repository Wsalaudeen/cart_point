import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Hero />
        <Products />
      </BrowserRouter>
    </>
  );
}
export default App;
