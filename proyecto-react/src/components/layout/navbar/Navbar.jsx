import CartWidget from "../../common/cartWidget/CartWidget"

export const Navbar = () => {
    return (
      <div>
          <h4>Logo</h4>
          <ul>
              <li>Inicio</li>
              <li>Pintura</li>
              <li>Bastidores</li>
              <li>Papeles</li>
              <li>Pinceles</li>
              <li>Marcas</li>
          </ul>
          <CartWidget />
      </div>
    )
  }