import { NavLink } from "react-router-dom";

const Navbar = () => {
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
        { name: "Fornitures", to: "/fornitures", className: "" },
        { name: "Toys", to: "/toys", className: "" },
        { name: "Others", to: "/others", className: "" },
    ];

    const rightMenu = [
        { name: "dev@dev.com",className:'text-black/60', logo:true },
        { name: "My orders", to: "/my-orders", className: "" },
        { name: "My account", to: "/my-accoount", className: "" },
        { name: "Sign in", to: "/sign-in", className: "" },
        { name: "🛒 0", logo:true },
    ];

    const activeStyle = "underline underline-offset-4";

    return (
        <nav className="flex justify-between items-center z-10 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">
                {leftMenu.map((item) => (
                    <li key={item.name} className={item.className}>
                        <NavLink
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
