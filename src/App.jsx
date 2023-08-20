import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/navBar.jsx";
import Home from './pages/home.jsx'
import Footer from "./components/footer.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Footer />
      
    </>
  )
};

export default App;