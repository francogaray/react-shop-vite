import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const ShoppingCartContext = createContext();

export const InitializeLocalStorage = () => {
    const accountInLocalStorage = localStorage.getItem('account')
    const signOuntInLocalStorage = localStorage.getItem('sign-out')

    let parsedAccount
    let parsedSignOut

    if (!accountInLocalStorage){
        localStorage.setItem('account', JSON.stringify({}))
        parsedAccount = {}
    }else{
        parsedAccount = JSON.parse(accountInLocalStorage)
    }

    if (!signOuntInLocalStorage){
        localStorage.setItem('sign-out', JSON.stringify(false) )
    }else{
        parsedSignOut = JSON.parse(signOuntInLocalStorage)
    }
}

export const ShoppingCartProvider = ({ children }) => {
    ShoppingCartProvider.propTypes = {
        children: PropTypes.node.isRequired,
    };

    //My account
    const [account, setAccount] = useState({})

    //Sign out
    const [signOut, setSignOut] = useState(false)


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
    const [items, setItems] = useState (null)
    const [filteredItems, setFilteredItems] = useState (null)

    //Get products by Title
    const [searchByTitle, setSearchByTitle] = useState (null)

    //Get products by Category
    const [searchByCategory, setSearchByCategory] = useState (null)

    useEffect( () => {
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(res => res.json() )
        .then(data => setItems(data))
    },[] )

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    const filterBy = (searchType, items, searchByTitle, searchByCategory ) => {
        if (searchType === "BY_TITLE"){
            return filteredItemsByTitle(items, searchByTitle)
        }
        if (searchType === "BY_CATEGORY") {
            return filteredItemsByCategory(items, searchByCategory)
        }
        if (searchType === "BY_TITLE_AND_CATEGORY") {
            return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }
        if (!searchType) {
            return items
        }
    }

    useEffect( () => {
        if (searchByTitle && searchByCategory) setFilteredItems(filterBy("BY_TITLE_AND_CATEGORY", items, searchByTitle, searchByCategory))
        if (searchByTitle && !searchByCategory) setFilteredItems(filterBy("BY_TITLE", items, searchByTitle, searchByCategory))
        if (!searchByTitle && searchByCategory) setFilteredItems(filterBy("BY_CATEGORY", items, searchByTitle, searchByCategory))
        if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
    },[items, searchByTitle, searchByCategory] )



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
                items,
                setItems,
                searchByTitle,
                setSearchByTitle,
                filteredItems,
                searchByCategory,
                setSearchByCategory,
                account,
                setAccount,
                signOut,
                setSignOut,

            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    );
};
