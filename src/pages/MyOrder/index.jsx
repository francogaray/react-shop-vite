import { useContext } from "react";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
import OrderCart from "../../components/OrderCard";

function MyOrder() {
    const context = useContext(ShoppingCartContext);
    const currentPath = window.location.pathname;
    let index = currentPath.substring(currentPath.lastIndexOf('/')+1)
    if (index === 'last' ) index = context.order?.length-1


    return (
        <>
            <div className="flex justify-center items-center w-80 relative mb-4">
                <Link to="/my-orders" className="absolute left-0">
                    <ChevronLeftIcon className="w-6 h-6" />
                </Link>
                <h1 className="font-medium text-xl">My order</h1>
            </div>
            <div className="flex flex-col w-80">
                {context.order?.[index]?.products.map((product) => (
                    <OrderCart
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        imageUrl={product.images?.[0]}
                        price={product.price}
                    />
                ))}
            </div>
        </>
    );
}
export default MyOrder;
