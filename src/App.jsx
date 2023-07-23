import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import News from "./components/News";

export default function App() {
  return (
    <div className="container b">
      <Navbar />
      <Hero />
      <News />
    </div>
  )
}
