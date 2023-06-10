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
import CheckoutSideMenu from "../../components/CheckoutSideMenu";

const AppRoutes = () => {
    let routes = useRoutes([
        { path: "/", element: <Home /> },
        { path: "/clothes", element: <Home /> },
        { path: "/electronics", element: <Home /> },
        { path: "/furniture", element: <Home /> },
        { path: "/shoes", element: <Home /> },
        { path: "/others", element: <Home /> },
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
