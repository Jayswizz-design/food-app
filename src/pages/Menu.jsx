import Navbar from "../components/NavBar";
import Menu from "./Menu";
import Footer from "../components/Footer";
import CartDrawer from "../components/CartDrawer";

export default function MenuPage() {
  return (
    <>
      <Navbar />
      <div className="pt-20 md:pt-24">
        <Menu />
        <Footer />
      </div>
      <CartDrawer />
    </>
  );
}
