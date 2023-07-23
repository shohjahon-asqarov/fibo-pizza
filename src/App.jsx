import { Route, Routes } from "react-router-dom";
import Delivery from "./components/Delivery";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import News from "./components/News";
import TabHeader from "./components/TabHeader";
import Pizza from "./pages/Pizza";
import Stock from "./pages/Stock";

export default function App() {

  const Home = () => {
    return (
      <>
        <Hero />
        <News />
        <Pizza />
      </>
    )
  }

  return (
    <div>
      <div className="container">
        <Navbar />
        <TabHeader />


        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/stock" element={<Stock />} />
        </Routes>

      </div>

      <Delivery />

      <div className="container">
        <Footer />
      </div>
      
    </div>
  )
}
