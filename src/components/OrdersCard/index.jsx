import {  } from "@heroicons/react/24/solid"

const OrdersCart = props => {

    const { totalPrice, totalProducts } = props

    return(
        <div className=" flex justify-between items-center mb-2 border border-black">
            <p>
                <span>01.02.2023</span>
                <span>{totalProducts}</span>
                <span>{totalPrice}</span>
            </p>

        </div>
    )
}
 
export default OrdersCart 