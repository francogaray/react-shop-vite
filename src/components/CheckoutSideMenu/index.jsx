import { useContext } from "react";
import "./styles.css";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
import OrderCart from "../OrderCard";
import { totalPrice } from "../utils";
import { Link } from "react-router-dom";

const CheckoutSideMenu = () => {


    const context = useContext(ShoppingCartContext);
    const products = context.cartProducts;

    const handleDelete = (id) => {
        const filteredProducts = products.filter(product => product.id != id)
        context.setCartProducts(filteredProducts)
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date:'01-01-2023',
            products: products,
            totalProducts: products.length,
            totalPrice: totalPrice(products)
        }
        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
        context.setSearchByTitle(null)
        context.setCount(0)
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
            <div className="px-6 overflow-y-scroll flex-1">
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
                <p className="flex justify-between items-center text-lg m-2 "  >
                    <span> Total:</span>
                    <span className="font-medium text-2xl">${totalPrice(products)}</span>
                </p>
                <Link to='/my-orders/last'>
                    <button className="w-full bg-black py-3 text-white rounded-md mb-6"
                    onClick={()=> handleCheckout()}>
                        CheckOut
                    </button>
                </Link>
            </div>
        </aside>
    );
};

export default CheckoutSideMenu;
 