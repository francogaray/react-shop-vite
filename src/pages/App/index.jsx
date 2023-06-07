import { BrowserRouter, useRoutes } from "react-router-dom";
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import SignIn from "../SignIn";
import "./App.css";
import Navbar from "../../components/Navbar";
import Layout from "../../components/Layout";
import { ShoppingCartProvider } from "../../Context";
import CheckoutSideMenu from "../../components/CheckOutSideMenu";

const AppRoutes = () => {
    let routes = useRoutes([
        { path: "/", element: <Home /> },
        { path: "/my-account", element: <MyAccount /> },
        { path: "/my-order", element: <MyOrder /> },
        { path: "/my-orders", element: <MyOrders /> },
        { path: "/sign-in", element: <SignIn /> },
        { path: "/*", element: <NotFound /> },
    ]);
    return routes;
};

const App = () => {
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
