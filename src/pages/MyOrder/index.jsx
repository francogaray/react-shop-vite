import OrderCart from "../../components/OrderCard"
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

function MyOrder() {

  const context = useContext(ShoppingCartContext);

    return (
        <div className='bg-green-400'>
          MyOrder
          <div className="px-6 flex flex-col w-96">
            {
                context.order?.slice(-1)[0].products.map( product => (
                    <OrderCart
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    imageUrl= {product.images?.[0]}
                    price= {product.price}
                    />
                ))
                }
            </div>
        </div>
    )
  }
  export default MyOrder