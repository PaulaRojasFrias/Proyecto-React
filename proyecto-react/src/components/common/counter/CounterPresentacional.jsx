import "./Counter.css";

const CounterPresentacional = ({ sumar, contador, restar, onAdd }) => {
  return (
    <div className={"botones"}>
      <button className={"button"} onClick={sumar}>
        sumar
      </button>
      <h4> {contador} </h4>
      <button className={"button"} onClick={restar}>
        restar
      </button>
      <button className={"button"} onClick={() => onAdd(contador)}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default CounterPresentacional;
