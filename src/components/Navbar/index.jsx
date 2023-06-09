import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";


const Navbar = () => {
    const context = useContext(ShoppingCartContext)
    const logoCart = () => {
            return (
            <div className="flex flex-row items-center">
                            <ShoppingCartIcon className="h-5 w-5 text-black"></ShoppingCartIcon>
                            {context.count}
            </div>
            )
        }
    const leftMenu = [
        {
            name: "Shoppi",
            to: "/",
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

    const rightMenu = [
        { name: "dev@dev.com",className:'text-black/60', logo:true },
        { name: "My orders", to: "/my-orders", className: "" },
        { name: "My account", to: "/my-accoount", className: "" },
        { name: "Sign in", to: "/sign-in", className: "" },
        { name: logoCart, logo:true },
    ];

    const activeStyle = "underline underline-offset-4";

    return (
        <nav className="flex justify-between items-center z-10 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">
                {leftMenu.map((item) => (
                    <li key={item.name} className={item.className}>
                        <NavLink
                            onClick={()=> context.setSearchByCategory(item.to.slice(1))}
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
                {rightMenu.map((item) => (
                    <li key={item.name}>
                        <NavLink
                            className={({ isActive }) =>
                                isActive && !item.logo ? activeStyle : item.className
                            }
                            to={item.to}
                        >
                            {item.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;


