import React, { useEffect, useState } from "react";
import Counter from "./Components/Counter";
import "./App.css";
import axios from "axios";

import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import About from "./Components/about";
import Header from "./Components/header";
import AboutUs from "./aboutus";
import AboutMe from "./Components/aboutMe";
import Menu from "./Components/Menu";
import MainCart from "./Components/Menu&Cart/MainCart";
import Admin from "./Components/Admin/Admin";
import CreateProduct from "./Components/Admin/Createproduct";
import Editproduct from "./Components/Admin/Editproduct";

function App() {
  const [Counters, setCount] = useState([
    { id: 0, name: `limon`, count: 0 },
    { id: 1, name: `watermilon`, count: 0 },
    { id: 2, name: "strawberry", count: 0 },
    { id: 3, name: `tangerine`, count: 4 },
  ]);

  const [items, setItems] = useState([]);

  const [categories, setCategories] = useState([]);

  const [currentCategory, setCurrentCategory] = useState(0);
  const [createstate, setCreateState] = useState({
    id: null,
    name: "",
    price: "",
    description: "",
    category: "",
  });

  // -------------------- effects -------------------

  useEffect(() => {
    async function getMenu() {
      try {
        const response = await fetch("http://localhost:3000/menu");
        const data = await response.json();
        setItems(data);
      } catch (err) {
        console.log(err);
      }
    }

    async function getCategories() {
      axios
        .get("http://localhost:3000/categories")
        .then(function (response) {
          // handle success
          console.log(response);
          setCategories(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    getMenu();
    getCategories();
  }, [currentCategory]);

  // -------------------- handlers ---------------------------
  const handleCategory = (id) => {
    console.log(currentCategory);
    setCurrentCategory(id);
  };

  const addToCart = (id) => {
    const addedItems = items.map((item) => {
      if (item.id === id) {
        item.incart = !item.incart;
      }

      return item;
    });

    setItems(addedItems);
  };

  const handlecountofaddedtocart = () => {
    const addedItems = items.filter((item) => {
      if (item.incart) {
        return item;
      }
    });
    console.log(addedItems);
    // setCart(addedItems);

    return addedItems.length;
  };

  // const handleCart = () => {
  //   let editableCart = items.filter((item) => {
  //     if (item.incart) {
  //       return item;
  //     }
  //   });
  //   console.log(editableCart);
  //   setCart(editableCart);
  // };

  const handleIncrement = (id) => {
    let newCounters = [...Counters];

    let editableCounters = newCounters.map((item) => {
      if (item.id === id) {
        item.count++;
        return item;
      } else return item;
    });
    setCount(editableCounters);
  };

  const handleMinus = (id) => {
    let newCounters = [...Counters];

    let editableCounters = newCounters.map((item) => {
      if (item.id === id && item.count > 0) {
        item.count--;
        return item;
      } else return item;
    });
    setCount(editableCounters);
  };

  const handleDelete = (id) => {
    let newCounters = [...Counters];

    let editableCounters = newCounters.filter((item) => item.id !== id);
    setCount(editableCounters);
  };

  const checkEmpty = () => {
    if (Counters.length === 0) {
      console.log("Cart is empty");
      return true;
    }
    return false;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCreateState((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(createstate);
  };

  //filter
  let renderedItems =
    currentCategory === 0
      ? items
      : items.filter((item) => parseInt(item.category) === currentCategory);

  return (
    <div className="App">
      {/*

      {Counters.map((ctr) => {
        return (
          <Counter
            key={ctr.id}
            counter={ctr}
            handleIncrement={handleIncrement}
            handleMinus={handleMinus}
            handleDelete={handleDelete}
          /> 
        );
      })}*/}
      <BrowserRouter>
        {
          // i need help in binding header in all pages without calling it in menu and call the other pages
        }
        <Header items={items} />
        <Routes>
          <Route
            path="/"
            element={
              <Menu
                items={items}
                categories={categories}
                addToCart={addToCart}
                handleCategory={handleCategory}
                renderedItems={renderedItems}
                currentCategory={currentCategory}
                handlecountofaddedtocart={handlecountofaddedtocart}
              />
            }
          />
          <Route path="/about" element={<Outlet />}>
            <Route index element={<About />}></Route>
            <Route path="Me" element={<AboutMe />} />
            <Route path="us" element={<AboutUs />} />
          </Route>
          <Route path="/cart" element={<MainCart items={items} />} />
          <Route path="/counter" element={<App />} />

          <Route
            path="/menu"
            element={
              <Menu
                items={items}
                categories={categories}
                addToCart={addToCart}
                handleCategory={handleCategory}
                renderedItems={renderedItems}
                currentCategory={currentCategory}
                handlecountofaddedtocart={handlecountofaddedtocart}
              />
            }
          />
          <Route
            path="/admin"
            element={
              <Admin
                items={items}
                categories={categories}
                handleCategory={handleCategory}
                renderedItems={renderedItems}
                currentCategory={currentCategory}
              />
            }
          />
          <Route
            path="/createproduct/"
            element={
              <CreateProduct
                items={items}
                categories={categories}
                handleCategory={handleCategory}
                renderedItems={renderedItems}
                currentCategory={currentCategory}
              />
            }
          />
          <Route
            path="/editproduct/:id"
            element={
              <Editproduct
                items={items}
                categories={categories}
                handleCategory={handleCategory}
                renderedItems={renderedItems}
                currentCategory={currentCategory}
              />
            }
          />
          <Route path="*" element={<h1>404 - Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
