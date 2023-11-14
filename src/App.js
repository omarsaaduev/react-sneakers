import { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header/Header";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
      axios.get('https://6551b9eb5c69a779032906d0.mockapi.io/items')
      .then(res => setItems(res.data))

      axios.get('https://6551b9eb5c69a779032906d0.mockapi.io/cart')
      .then(res => setCartItems (res.data))
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://6551b9eb5c69a779032906d0.mockapi.io/cart', obj)
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveToCart = (id) => {
    console.log(id)
    setCartItems((prev) => prev.filter(card => card.id!==id))
  }

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer cartItems={cartItems} onClose={() => setCartOpened(false)} onRemoveToCart={onRemoveToCart}  />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1 className="">
            {searchValue ? `Поиск по запросу: ${searchValue}` : "Все кроссовки"}
          </h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="" />
            {searchValue && (
              <img
                onClick={() => setSearchValue("")}
                className="clear "
                src="/img/btn-remove.svg"
                alt=""
              />
            )}
            <input
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Поиск..."
              value={searchValue}
            />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items
            .filter((item) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase()),
            )
            .map((item, index) => {
              return (
                <Card
                  key={index}
                  title={item.title}
                  price={item.price}
                  imageUrl={item.imageUrl}
                  onPlus={(obj) => onAddToCart(obj)}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
