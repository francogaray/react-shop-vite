import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import ShoppingCart from "../ShoppingCart";

const Navbar = () => {
    const context = useContext(ShoppingCartContext);

    // Sign Out
    const signOut = localStorage.getItem("sign-out");
    const parsedSignOut = JSON.parse(signOut);
    const isUserSignOut = context.signOut || parsedSignOut;

    // Account
    const account = localStorage.getItem("account");
    const parsedAccount = JSON.parse(account);

    // Has account
    const noAccountInLocalStorage = parsedAccount
        ? Object.keys(parsedAccount).length === 0
        : true;
    const noAccountInLocalState = context.account
        ? Object.keys(context.account).length === 0
        : true;
    const hasUserAccount = !noAccountInLocalStorage || !noAccountInLocalState;

    const handleSignOut = () => {
        const strigifiedSignOut = JSON.stringify(true);
        localStorage.setItem("sign-out", strigifiedSignOut);
        context.setSignOut(true);
    };
    const leftMenu = [
        {
            name: "Shoppi",
            to: isUserSignOut ? '/sign-in' : '/',
            className: "font-semibold text-lg",
            logo: true,
        },
        { name: "All", to: "/", className: "" },
        { name: "Clothes", to: "/clothes", className: "" },
        { name: "Electronics", to: "/electronics", className: "" },
        { name: "Furnitures", to: "/furniture", className: "" },
        { name: "Shoes", to: "/shoes", className: "" },
        { name: "Others", to: "/others", className: "" },
    ];

    // const validationPath = hasUserAccount && !isUserSignOut ? <Home /> : <Navigate replace to={/sign-in/} />

    const rightMenu = [
        {
            name: parsedAccount?.email,
            className: "text-black/60",
            logo: true,
            logOut: isUserSignOut,
        },
        {
            name: "My orders",
            to: "/my-orders",
            className: "",
            logOut: isUserSignOut,
        },
        {
            name: "My account",
            to: "/my-account",
            className: "",
            logOut: isUserSignOut,
        },
        {
            name: "Sign out",
            to: "/sign-in",
            className: "",
            onClick: () => handleSignOut(),
            logOut: isUserSignOut,
        },
    ];

    const renderView = () => {
        return (
            <>
                {rightMenu.map((item) =>
                    (
                        <li key={item.name}>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive && !item.logo
                                        ? activeStyle
                                        : item.className
                                }
                                to={item.to}
                                onClick={item.onClick ? item.onClick : null}
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    ) 
                )}
            </>
        );
    };

    const activeStyle = "underline underline-offset-4";

    return (
        <nav className="flex justify-between items-center z-10 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">
                {leftMenu.map((item) => (
                    <li key={item.name} className={item.className}>
                        <NavLink
                            onClick={() =>
                                context.setSearchByCategory(item.to.slice(1))
                            }
                            className={({ isActive }) =>
                                isActive && !item.logo ? activeStyle : ""
                            }
                            to={item.to}
                        >
                            {item.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <ul className="flex items-center gap-3 ">
                { hasUserAccount && !isUserSignOut ? (
                    renderView()
                ) : (
                    <li>
                        <NavLink
                            to="/sign-in"
                            className={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                            onClick={() => handleSignOut()}
                        >
                            Sign in
                        </NavLink>
                    </li>
                )}
                <ShoppingCart/>
            </ul>
        </nav>
    );
};

export default Navbar;