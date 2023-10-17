import styles from "./Navbar.module.css";
import CartWidget from "../../common/cartWidget/CartWidget";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className={styles.containerNavbar}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <h4>Yungas Herbal</h4>
        </Link>
        <ul className={styles.categories}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>Inicio</li>
          </Link>
          <Link to="/category/hierbas" style={{ textDecoration: "none" }}>
            <li> Hierbas</li>
          </Link>
          <Link to="/category/tes" style={{ textDecoration: "none" }}>
            <li>Tés</li>
          </Link>
          <Link to="/category/velas" style={{ textDecoration: "none" }}>
            <li>Velas</li>
          </Link>
          <Link to="/category/aceites" style={{ textDecoration: "none" }}>
            <li>Aceites esenciales</li>
          </Link>
        </ul>
        <CartWidget />
      </div>
    </>
  );
};
