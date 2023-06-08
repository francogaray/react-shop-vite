import { ChevronRightIcon} from "@heroicons/react/24/solid"
import { CalendarDaysIcon, ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline"


const OrdersCart = props => {

    const { totalPrice, totalProducts } = props

    return(
        <div className=" flex justify-between items-center mb-3 border border-black p-4 w-80 rounded-lg">
            <div className="flex justify-between items-center w-full">
                <div className="flex flex-col">
                    <p className="flex gap-2 mb-2">
                        <CalendarDaysIcon className="h-6 w-6 cursor-pointer text-black"></CalendarDaysIcon>
                        <span>01.02.2023</span>
                    </p>
                    <p className="flex gap-2 mb-2">
                        <ClipboardDocumentCheckIcon className="h-6 w-6 cursor-pointer text-black"></ClipboardDocumentCheckIcon>
                        <span>{totalProducts} articles</span>
                    </p>
                </div>
                <p className="flex items-center gap-2">
                    <span className="font-medium text-xl">${totalPrice}</span>
                    <ChevronRightIcon className="h-6 w-6 cursor-pointer text-black"></ChevronRightIcon>
                </p>
            </div>

        </div>
    )
}

export default OrdersCart