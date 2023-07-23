import Delivery from "./components/Delivery";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import News from "./components/News";

export default function App() {
  return (
    <div>
      <div className="container">
        <Navbar />
        <Hero />
        <News />
      </div>
      <Delivery />
      <div className="container">
        <Footer />
      </div>
    </div>
  )
}
