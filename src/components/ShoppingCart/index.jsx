import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const ShoppingCart = () => {
    const context = useContext(ShoppingCartContext);

    const openCheckoutSideMenu = () =>{
        if( context.cartProducts.length > 0 ){
            context.openCheckoutSide()
        }
        context.closeProductDetail()
    }

    return (
        <div className="flex relative gap-0.5 items-center"
        onClick={()=>openCheckoutSideMenu()}>
            <ShoppingCartIcon className="h-5 w-5 text-black"></ShoppingCartIcon>
            <div className=" absolute bottom-3.5 left-3.5 flex justify-center items-center rounded-full bg-black text-white text-xs h-4 w-4">
            {context.cartProducts.length}
            </div>
        </div>
    );
};

export default ShoppingCart;
