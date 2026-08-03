import React, { createContext, useState } from "react";


export const CartContext = createContext();



export function CartProvider({ children }) {


  const [cart, setCart] = useState([]);

  const [wishlist, setWishlist] = useState([]);



  // Add Product To Cart

  const addToCart = (product) => {

    setCart((prevCart) => [
      ...prevCart,
      product
    ]);

  };



  // Add Product To Wishlist

  const addToWishlist = (product) => {

    setWishlist((prevWishlist) => [
      ...prevWishlist,
      product
    ]);

  };



  // Remove From Cart

  const removeFromCart = (id) => {

    setCart((prevCart) =>
      prevCart.filter(
        (item) => item.id !== id
      )
    );

  };



  // Remove From Wishlist

  const removeFromWishlist = (id) => {

    setWishlist((prevWishlist) =>
      prevWishlist.filter(
        (item) => item.id !== id
      )
    );

  };



  return (

    <CartContext.Provider

      value={{

        cart,
        wishlist,

        addToCart,
        addToWishlist,

        removeFromCart,
        removeFromWishlist

      }}

    >

      {children}

    </CartContext.Provider>

  );

}