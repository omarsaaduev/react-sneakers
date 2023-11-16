import { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header/Header";
import axios from "axios";
import Home from "./pages/Home";
import { Route, Router, Routes } from "react-router-dom";
import Favorites from "./pages/Favorites";

const data = [
  {
    "id": 1,
    "title": "Мужские Кроссовки Nike Blazer Mid Suede",
    "price": 12999,
    "imageUrl": "./img/sneakers1.svg"
  },
  {
    "id": 2,
    "title": "Мужские Кроссовки Nike Blazer Mid Suede",
    "price": 8499,
    "imageUrl": "./img/sneakers2.svg"
  },
  {
    "id": 3,
    "title": "Мужские Кроссовки Nike Air Max 270",
    "price": 12999,
    "imageUrl": "./img/sneakers3.svg"
  },
  {
    "id": 4,
    "title": "Кроссовки Puma X Aka Boku Future Rider",
    "price": 8999,
    "imageUrl": "./img/sneakers4.svg"
  }
]

function App() {
  const [items, setItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    async function fetchData(){
      const itemsResponse = await axios.get("https://6551b9eb5c69a779032906d0.mockapi.io/items");
      const cartResponse = await axios.get("https://6551b9eb5c69a779032906d0.mockapi.io/cart");
      const favoritesResponse = await axios.get("https://6553b6d75449cfda0f2f143c.mockapi.io/favorite");
      
      setCartItems(cartResponse.data);
      setFavorites(favoritesResponse.data);
      setItems(itemsResponse.data);
    }
    fetchData();

  }, []);

  const onAddToCart = (obj) => {
    console.log(obj)
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
    } else {
      axios.post("https://6551b9eb5c69a779032906d0.mockapi.io/cart", obj)
      .then((res) => setCartItems((prev) => [...prev, res.data]));
    }
  };

  const onRemoveToCart = (id) => {
    axios.delete(`https://6551b9eb5c69a779032906d0.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((card) => card.id !== id));
  };

  const onAddToFavorite = (obj) => {
    console.log(obj)
    if (favorites.find((favObj) => favObj.id === obj.id)) {
      axios.delete(
        `https://6553b6d75449cfda0f2f143c.mockapi.io/favorite/${obj.id}`,
      );
    } else {
      axios
        .post("https://6553b6d75449cfda0f2f143c.mockapi.io/favorite", obj)
        .then((res) => setFavorites((prev) => [...prev, res.data]));
    }
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          cartItems={cartItems}
          onClose={() => setCartOpened(false)}
          onRemoveToCart={onRemoveToCart}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              cartItems={cartItems}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
            />
          }
        />
        <Route
          path="/favorite"
          element={
            <Favorites
              favorites={favorites}
              onAddToFavorite={onAddToFavorite}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
