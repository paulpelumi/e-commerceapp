import React, { createContext, useEffect, useState, useReducer } from "react";
import { Outlet, useParams } from "react-router-dom";
import productInfo from "../data/productInfo";
import Footer from "./Footer";
import Header from "./Header";
import CartHamburger from "./CartHamburger";

export const Products = createContext();


const cartReducer = (state, action) => {
  let error;
  switch (action.type) {
    case "ADD_TO_CART":
    
    return [...state.filter(element => element.id !== action?.payload?.item?.id), action?.payload?.item] 
        
    case "REMOVE_FROM_CART":
      return state.filter((element) => element.id !== action.payload.id);

    case "UPDATE_QTY":  
      console.log(action.payload.qty)

      return state.map((element) => {
        if (element.id === action.payload.id) {
          return { 
            ...element, 
            qty: action.payload.qty <=1 ? 1 : action.payload.qty, 

          };
        }
        return element;
      });


  }

};

const Home = () => {
    const {id} = useParams()

  const [products, setProducts] = useState(productInfo);
  const [cartNumber, setcartNumber] = useState(0);
  const [totalPrize, setTotalPrize] = useState(0)
  const [drawer,setDrawer] = useState(false)


  const [cart, cartDispatch] = useReducer(cartReducer, []);

  useEffect(()=>{
    let totalProduct = 0
    cart.map(element =>{
        totalProduct +=element?.qty
    })

    setcartNumber(totalProduct)

  },[cart,id])

  useEffect(()=>{
    let totalProduct = 0
    cart.map(element =>{
        totalProduct += element?.qty * element?.price
    })

    setTotalPrize(totalProduct)

  },[cart,id])

  useEffect(() => {}, [products]);
  return (
    <Products.Provider
      value={{ products, cartNumber, setcartNumber, cart, cartDispatch,totalPrize, setDrawer }}
    >
      <div className="layout">
        {
            drawer && <CartHamburger totalPrize={totalPrize} cartDispatch={cartDispatch} data={cart} setDrawer={setDrawer} cartNumber={cartNumber}  />
        }
        <Header setDrawer={setDrawer} />
        <main className="main-container">
          <Outlet />
        </main>
        <Footer />
      </div>
    </Products.Provider>
  );
};

export default Home;
