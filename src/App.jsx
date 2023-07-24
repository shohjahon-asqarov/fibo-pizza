import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";


// import componts and pages 
import Delivery from "./components/Delivery";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TabHeader from "./components/TabHeader";
import Pizza from "./pages/Pizza";
import Stock from "./pages/Stock";
import Korzinka from "./ui/Korzinka";
import { Drawer, IconButton } from "@material-tailwind/react";
import Antipasti from "./pages/Antipasti";
import Beverages from "./pages/Beverages";
import Combo from "./pages/Combo";
import Dessert from "./pages/Dessert";
import Salads from "./pages/Salads";
import Soups from "./pages/Soups";
import Paste from "./pages/Paste";


// import scroll animation 
import AOS from 'aos';
import 'aos/dist/aos.css';

// import toastify container 
import { ToastContainer } from "react-toastify";

export default function App() {

  // aos init 
  useEffect(() => {
    AOS.init();
  }, [])

  // for korzinka 
  const [open, setOpen] = useState(false)

  return (
    <div>
      <div>
        <Navbar />
        <TabHeader open={open} setOpen={setOpen} />

        {/* routes  */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/pizza" element={<Pizza />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/antipasti" element={<Antipasti />} />
          <Route path="/beverages" element={<Beverages />} />
          <Route path="/combo" element={<Combo />} />
          <Route path="/dessert" element={<Dessert />} />
          <Route path="/salads" element={<Salads />} />
          <Route path="/soups" element={<Soups />} />
          <Route path="/paste" element={<Paste />} />
          <Route path="/location" element={<Delivery />} />
        </Routes>

      </div>

      <Footer />

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
        theme="light"
      />

      {/* korzinka right component  */}
      <Drawer overlay={false} size={'400px'} placement="right" open={open} className="p-4">
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
