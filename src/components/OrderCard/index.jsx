import { XMarkIcon } from "@heroicons/react/24/solid"

const OrderCart = props => {

    const { id, title, imageUrl, price, handleDelete } = props

    return(
        <div className=" flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20">
                    <img className="w-full h-full rounded-lg object-cover" src={imageUrl} alt={title} />
                </figure>
            </div>
            <div className="flex flex-1 justify-between items-center gap-2 pl-2">
                <p className=" text-lg font-light">{title}</p>
                <p className=" text-lg font-medium">${price}</p>
                { handleDelete ?
                <div className='cursor-pointer' onClick={() => handleDelete(id)}>
                    <XMarkIcon className="w-6 h-6 text-black "></XMarkIcon>
                </div>
                :<></> }
            </div>

        </div>
    )
}

export default OrderCart