import { Route, Routes } from "react-router-dom";
import Delivery from "./components/Delivery";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import News from "./components/News";
import TabHeader from "./components/TabHeader";
import Pizza from "./pages/Pizza";
import Stock from "./pages/Stock";
import Button from "./ui/Button";
import { ToastContainer } from "react-toastify";

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
        <Button text='Корзина' />


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stock" element={<Stock />} />
        </Routes>

      </div>

      <Delivery />

      <div className="container">
        <Footer />
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" />
    </div>
  )
}
