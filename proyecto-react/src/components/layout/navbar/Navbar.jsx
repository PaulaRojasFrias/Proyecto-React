import "./Navbar.module.css";
import CartWidget from "../../common/cartWidget/CartWidget";

export const Navbar = () => {
  return (
    <div className={"containerNavbar"}>
      <h4>Yungas Herbal</h4>
      <ul>
        <li>Inicio</li>
        <li>Hierbas</li>
        <li>Tés</li>
        <li>Velas</li>
        <li>Aceites esenciales</li>
      </ul>
      <CartWidget />
    </div>
  );
};
