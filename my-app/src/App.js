import Footer from "./Footer";
import Navbar from "./Navbar";
import SlidingCard from "./SlidingCard";
import CoffeeWebsite from "./CoffeeWebsite";
import { Button } from 'react-bootstrap';
import ControlledCarousel from "./components/ControlledCarousel";
import NavbarWebsite from "./components/navbar/NavbarWebsite";
function App() {
  return (
    <>
    <NavbarWebsite />
    <ControlledCarousel />
    <Button variant="primary">Primary Button</Button>
    </>
  );
}

export default App;
