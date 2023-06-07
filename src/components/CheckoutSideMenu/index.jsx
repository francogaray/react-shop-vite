import { useContext } from "react";
import "./styles.css";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
import OrderCart from "../OrderCard";
import { totalPrice } from "../utils";

const CheckoutSideMenu = () => {


    const context = useContext(ShoppingCartContext);
    const products = context.cartProducts;

    const handleDelete = (id) => {
        const filteredProducts = products.filter(product => product.id != id)
        context.setCartProducts(filteredProducts)
    }

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
                    id={product.id}
                    title={product.title}
                    imageUrl= {product.images?.[0]}
                    price= {product.price}
                    handleDelete={handleDelete}
                    />
                ))
                }
            </div>
            <div className="px-6">
                <p className="flex justify-between items-center text-lg mx-2"  >
                    <span> Total:</span>
                    <span className="font-medium text-2xl">${totalPrice(products)}</span>
                </p>
            </div>
        </aside>
    );
};

export default CheckoutSideMenu;
