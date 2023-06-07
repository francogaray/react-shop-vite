import { useContext } from "react";
import "./styles.css";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
import OrderCart from "../OrderCard";

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext);
    const products = context.cartProducts;
    console.log(products)

    return (
        <aside
            className={`${
                context.isCheckoutSideOpen ? "flex" : "hidden"
            }  product-detail flex flex-col fixed right-0 border border-black rounded-lg  `}
        >
            <div className="flex justify-between items-center p-6 ">
                <h2 className="font-medium text-xl">My order</h2>
                <div className='cursor-pointer' onClick={() => context.closeCheckoutSide()}>
                    <XMarkIcon className="w-6 h-6 text-black "></XMarkIcon>
                </div>
            </div>
            <div className="px-6 overflow-y-scroll">
            {
                products.map( (product) => (
                    <OrderCart
                    key={product.id}
                    title={product.title}
                    imageUrl= {product.images?.[0]}
                    price= {product.price}
                    />
                ))
                }
            </div>
        </aside>
    );
};

export default CheckoutSideMenu;
