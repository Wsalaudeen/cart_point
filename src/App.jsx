import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Hero />
      </BrowserRouter>
    </>
  );
}

export default App;
