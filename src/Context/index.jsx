import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
    ShoppingCartProvider.propTypes = {
        children: PropTypes.node.isRequired,
    };

    //Shoppoing Cart Icon · Increment quantity
    const [count, setCount] = useState(0);

    //Checkout side Open/Close
    const [isCheckoutSideOpen, setIsCheckoutSideOpen] = useState(false);
    const openCheckoutSide = () => {
        setIsCheckoutSideOpen(true);
    };
    const closeCheckoutSide = () => {
        setIsCheckoutSideOpen(false);
    };

    //Product Detail Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => {
        setIsProductDetailOpen(true);
    };
    const closeProductDetail = () => {
        setIsProductDetailOpen(false);
    };

    //Product Detail · Show products
    const [productToShow, setProductToShow] = useState({})

    //Shopping Cart · Add product to cart
    const [cartProducts, setCartProducts] = useState([])

    //Shopping Cart · Order
    const [order, setOrder] = useState([])

    //Get products
    const [item, setItem] = useState ([])
    
    useEffect( () => {
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(res => res.json() )
        .then(data => setItem(data))
    },[] )
    
    //Get products by title 
    const [searchByTitle, setSearchByTitle] = useState ([])
console.log(searchByTitle)


    return (
        <ShoppingCartContext.Provider
            value={{
                count,
                setCount,
                openProductDetail,
                closeProductDetail,
                isProductDetailOpen,
                productToShow,
                setProductToShow,
                cartProducts,
                setCartProducts,
                isCheckoutSideOpen,
                setIsCheckoutSideOpen,
                openCheckoutSide,
                closeCheckoutSide,
                order,
                setOrder,
                item,
                setItem,
                searchByTitle,
                setSearchByTitle,

            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    );
};
