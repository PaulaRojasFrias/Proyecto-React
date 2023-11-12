import { Link } from "react-router-dom";
import CounterContainer from "../../common/counter/CounterContainer";
import "./ItemDetail.css";

export const ItemDetail = ({
  productSelected,
  onAdd,
  initial,
  showCounter,
}) => {
  return (
    <div>
      <div className={"containerItemDetail"}>
        <div className={"containerImage"}>
          <img src={productSelected.img} alt="" style={{ height: "400px" }} />
        </div>

        <div className={"containerDetailrest"}>
          <h2>
            <span>Nombre:</span> {productSelected.title}
          </h2>
          <h2>
            <span>Descripcion:</span> {productSelected.description}
          </h2>
          <h2>
            <span>Precio:</span> ${productSelected.price}.-
          </h2>
        </div>

        {initial && <h4>Ya tienes {initial} unidades</h4>}

        {showCounter ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <CounterContainer
              stock={productSelected.stock}
              onAdd={onAdd}
              initial={initial}
            />
          </div>
        ) : (
          <Link to="/cart" style={{ color: "white" }}>
            Terminar compra
          </Link>
        )}
      </div>
    </div>
  );
};
