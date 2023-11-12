import { useState, useEffect } from "react";

import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import CircleLoader from "react-spinners/CircleLoader";
import { getDocs, collection, query, where, addDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { Button } from "@mui/material";
import { products } from "../../../productsMock";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let productsCollection = collection(db, "products");

    let consulta = undefined;

    if (!categoryName) {
      consulta = productsCollection;
    } else {
      consulta = query(
        productsCollection,
        where("category", "==", categoryName)
      );
    }

    getDocs(consulta).then((res) => {
      let newArray = res.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });
      let arrayFiltrado = newArray.filter((elemento) => elemento.stock > 0);
      setItems(arrayFiltrado);
    });
  }, [categoryName]);

  return (
    <>
      {items.length === 0 ? (
        <CircleLoader
          size={40}
          color="#006241"
          cssOverride={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      ) : (
        <ItemList items={items} />
      )}
    </>
  );
};

export default ItemListContainer;
