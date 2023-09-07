import { useContext } from "react";
import { CartContext } from "../../../context/cart-context";

export default function Threads(inventoryItem) {

  const cart = useContext(CartContext)
  const addToCart = useContext(CartContext)
  const handleClick = (input) => {
    addToCart(input)
  }
  
  const { _id, prodName, prodCategory, prodImage, prodCost } = inventoryItem.data;
  
  console.log("ID: ", _id)

  if (prodCategory === 300) {
    return (
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            {/* <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"> */}
            <section className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={prodImage}
                  alt=""
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
                <h3 className="mt-4 text-sm text-gray-700">{prodName}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {prodCost}
                </p>
              
              <button className='addToCartButton' onClick={() => handleClick(_id)} >add to cart</button>
              
                {/* LOOK UP TAILWIND CODE TO ALIGN BUTTON RIGHT */}
              </div>
            </section>
                
          </div>
          {/* </div> */}
        </div>
      );
      
    }
  console.log("AFTER CART ", cart)
  
  }
  