import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
// import Cart from "./components/pages/cart/Cart";
// import ItemDetailContainer from "./components/pages/itemDetailContainer/ItemDetailContainer";
// import Layout from "./components/layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
