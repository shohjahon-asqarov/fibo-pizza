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
import Korzinka from "./ui/Korzinka";
import { Drawer, IconButton } from "@material-tailwind/react";
import { useState } from "react";

export default function App() {

  const [open, setOpen] = useState(false)

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
        <TabHeader open={open} setOpen={setOpen} />

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


      <Drawer placement="right" open={open} className="p-4">
        <div className="mb-6 flex items-center justify-between">
          <h2>Корзина</h2>
          <IconButton onClick={() => setOpen(false)} variant="text" color="blue-gray" >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <Korzinka />
      </Drawer>
    </div>
  )
}
