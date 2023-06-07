import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { XMarkIcon } from "@heroicons/react/24/solid"

const OrderCart = props => {

    const { title, imageUrl, price } = props
    const context = useContext(ShoppingCartContext)

    return(
        <div className=" flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20">
                    <img className="w-full h-full rounded-lg object-cover" src={imageUrl} alt={title} />
                </figure>
                <p className="text-sm font-light"></p>
            </div>
            <div className="flex items-center gap-2">
                <p className=" text-lg font-medium">${price}</p>
                <div className='cursor-pointer' onClick={() => context.closeCheckoutSide()}>
                    <XMarkIcon className="w-6 h-6 text-black "></XMarkIcon>
                </div>
            </div>

        </div>
    )
}

export default OrderCart