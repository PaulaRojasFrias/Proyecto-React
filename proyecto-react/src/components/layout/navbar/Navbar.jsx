import styles from "./Navbar.module.css";
import CartWidget from "../../common/cartWidget/CartWidget";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className={styles.containerNavbar}>
        <Link to="/">
          <h4>Yungas Herbal</h4>
        </Link>
        <ul className={styles.categories}>
          <Link to="/">
            <li>Inicio</li>
          </Link>
          <Link to="/category/hierbas">
            <li> Hierbas</li>
          </Link>
          <Link to="/category/tes">
            <li>Tés</li>
          </Link>
          <Link to="/category/velas">
            <li>Velas</li>
          </Link>
          <Link to="/category/aceites">
            <li>Aceites esenciales</li>
          </Link>
        </ul>
        <CartWidget />
      </div>
    </>
  );
};
