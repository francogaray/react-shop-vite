import { BrowserRouter, Navigate, useRoutes } from "react-router-dom";
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import SignIn from "../SignIn";
import "./App.css";
import Navbar from "../../components/Navbar";
import Layout from "../../components/Layout";
import { ShoppingCartProvider, ShoppingCartContext, InitializeLocalStorage } from "../../Context";
import CheckoutSideMenu from "../../components/CheckoutSideMenu";
import { useContext } from "react";

const AppRoutes = () => {
    const context = useContext(ShoppingCartContext);

    // Sign Out
    const signOut = localStorage.getItem("sign-out");
    const parsedSignOut = JSON.parse(signOut);

    // Account
    const account = localStorage.getItem("account");
    const parsedAccount = JSON.parse(account);

    // Has an account
    const noAccountInLocalStorage = parsedAccount
    ? Object.keys(parsedAccount).length === 0
    : true;
    const noAccountInLocalState = context.account
    ? Object.keys(context.account).length === 0
    : true;
    const hasUserAccount = !noAccountInLocalStorage || !noAccountInLocalState;
    const isUserSignOut = context.signOut || parsedSignOut;


    let routes = useRoutes([
        { path: "/", element:  hasUserAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} /> },
        { path: "/clothes", element: hasUserAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} /> },
        { path: "/electronics", element: hasUserAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} /> },
        { path: "/furniture", element: hasUserAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} /> },
        { path: "/shoes", element: hasUserAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} /> },
        { path: "/others", element: hasUserAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} /> },
        { path: "/my-account", element: <MyAccount /> },
        { path: "/my-order", element: <MyOrder /> },
        { path: "/my-orders", element: <MyOrders /> },
        { path: "/my-orders/last", element: <MyOrder /> },
        { path: "/my-orders/:id", element: <MyOrder /> },
        { path: "/sign-in", element: <SignIn /> },
        { path: "/*", element: <NotFound /> },
    ]);
    return routes;
};

const App = () => {
    InitializeLocalStorage()
    return (
        <ShoppingCartProvider>
        <BrowserRouter>
            <Navbar/>
            <Layout>
                <AppRoutes />
                <CheckoutSideMenu/>
            </Layout>
        </BrowserRouter>
        </ShoppingCartProvider>
    );
};

export default App;
