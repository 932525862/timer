import "./App.css";
import Benefits from "./components/Benefits";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import OurBenefits from "./components/OurBenefits";
import Price from "./components/Price";
import Tutor from "./components/Tutor";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <ToastContainer />
      <Header />
      <Hero />
      <Benefits />
      <OurBenefits />
      <Price />
      <Tutor />
      <Contact/>
      <Footer />
    </>
  );
}

export default App;
