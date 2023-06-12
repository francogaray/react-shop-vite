import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { PlusIcon, CheckIcon } from "@heroicons/react/24/solid";

const Card = (data) => {
    const context = useContext(ShoppingCartContext);

    const showProduct = (productDetail) => {
        context.openProductDetail();
        context.setProductToShow(productDetail);
    };

    const addProductsToCart = (product) => {
        context.setCount(context.count + 1);
        context.setCartProducts([...context.cartProducts, product]);
        context.openCheckoutSide();
    };

    const renderIcon = (id) => {
        const isInCart =
            context.cartProducts.filter((product) => product.id === id).length >
            0;
        if (isInCart) {
            return (
                <div className=" cursor-default absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1">
                    <CheckIcon className="w-6 h-6 text-white"></CheckIcon>
                </div>
            );
        } else {
            return (
                <div
                    className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
                    onClick={() => addProductsToCart(data.data)}
                >
                    <PlusIcon className="w-6 h-6 text-black fon"></PlusIcon>
                </div>
            );
        }
    };

    return (
        <div className="bg-slate-500 cursor-pointer w-56 h-80 rounded-lg m-auto">
            <figure className=" relative mb-2 w-full h-4/5 ">
                <span className="absolute left-2 bottom-0 bg-lime-500/60 text-black text-xs m-2 rounded-lg px-3 py-0.5">
                    {data.data.category.name}
                </span>
                <img
                    onClick={() => showProduct(data.data)}
                    className="w-full h-full object-cover rounded-lg"
                    src={data.data.images[0]}
                    alt={data.data.title}
                />
                {renderIcon(data.data.id)}
            </figure>
            <p
                className="flex flex-1 items-center h-10  justify-between px-2"
                onClick={() => showProduct(data.data)}
            >
                <span className="text-sm font-light">{data.data.title}</span>
                <span className="text-lg font-medium">${data.data.price}</span>
            </p>
        </div>
    );
};

export default Card;
