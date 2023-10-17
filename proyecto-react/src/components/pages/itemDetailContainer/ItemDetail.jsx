import CounterContainer from "../../common/counter/CounterContainer";

export const ItemDetail = ({ productSelected, onAdd }) => {
  return (
    <div>
      <h2>{productSelected.title}</h2>
      <img src={productSelected.img} alt="" style={{ height: "300px" }} />

      <CounterContainer stock={productSelected.stock} onAdd={onAdd} />
    </div>
  );
};
