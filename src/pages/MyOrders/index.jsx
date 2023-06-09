import OrdersCart from "../../components/OrdersCard"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";


function MyOrders() {
    const context = useContext(ShoppingCartContext);
    return (
    <>
            <div className='flex justify-center items-center w-80 relative mb-4 '>
                <h1 className="font-medium text-xl">My Orders</h1>
            </div>
            {context.order.map((order, index) =>  (

                <Link key={index} to={`/my-orders/${index}`}>
                        <OrdersCart
                            totalPrice={order.totalPrice}
                            totalProducts={order.totalProducts}
                        />
                </Link>
            )
        )}
    </>
    )
}

export default MyOrders