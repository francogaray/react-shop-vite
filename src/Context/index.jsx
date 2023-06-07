import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
    ShoppingCartProvider.propTypes = {
        children: PropTypes.node.isRequired,
    };

    //Shoppoing Cart Increment quantity
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

    //Product Detail Show products
    const [productToShow, setProductToShow] = useState({})
    const [cartProducts, setCartProducts] = useState([])

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
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    );
};
