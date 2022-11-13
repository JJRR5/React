import 'react-toastify/dist/ReactToastify.css';
import { shoppingInitialState, shoppingReducer } from "./reducers/shopingReducer";
import { toast } from "react-toastify"
import { TYPES } from "./actions/shopingActions";
import { useReducer } from "react";
import { ToastContainer } from "react-toastify";
import CartItem from "./components/CartItem"
import Footer from "./components/Footer";
import Products from "./components/Products"


function App() {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const {products, cart} = state;

  const addToCart = product => {
    dispatch({
      type: TYPES.ADD_TO_CART, 
      payload: product
    });
    toast.success('Product added to cart 😁', {
      autoClose: 1500,
      theme: "dark",
    });
  }

  const clearCart = () => {
    dispatch({
      type: TYPES.CLEAR_CART
    });
    toast.warn('Cart successfully cleared! 🗑️', {
      autoClose: 1500,
      theme: "dark",
    });
  }

  const removeFromCart = id => {
    dispatch({
      type: TYPES.REMOVE_FROM_CART,
      payload: id
    })
    toast.error('Product removed from cart 😢', {
      autoClose: 1500,
      theme: "dark",
    });
  }

  const handleProductQuantity = (id, addOrRemove)=> {
    dispatch({
      type: TYPES.HANDLE_QUANTITY,
      payload: {
        id,
        addOrRemove
      }
    })
  }

  const getTotalQuantity = () => {
    const total = cart.reduce((ac, ci) => {
      return ac + ci.quantity * ci.price;
    }, 0);
    return total.toFixed(2);
  };

  return (
    <div className="text-center mt-8 container mx-auto">
      <header className="flex flex-col items-center mb-4">
        <h1 className="text-5xl font-bold uppercase mb-4">Shopping Cart</h1>
      </header>
      <main className="grid lg:grid-cols-2 gap-4 mb-7">
        <section className="md:px-4">
          <h3 className="text-3xl font-bold py-3">Cart Items</h3>
          {
            cart.length ? (
              <div className="overflow-x-auto p-1 rounded-xl py-5 bg-slate-900">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map(cartItem => {
                              return (
                                <CartItem 
                                  key={cartItem.id} 
                                  removeFromCart={removeFromCart} 
                                  productCartData={cartItem}
                                  handleProductQuantity={handleProductQuantity}
                                />
                              )
                            })
                        }
                    </tbody>
                </table>
                <div className="px-10 mt-5">
                    <p className='text-xl font-bold'>Total: ${getTotalQuantity()}</p>
                  <button 
                      onClick = {() => clearCart()}
                      className="bg-red-600 text-white font-bold rounded-md py-3 hover:bg-red-700 transition-all w-1/2"
                  >
                      Clear Cart
                  </button>
                </div>
              </div>
            ) : (
              <h3 className="mt-5">No products added, start by adding one.</h3>
            )
          }
        </section>
        <section>
          <h3 className="text-3xl font-bold py-3">Products</h3>
          <div className="grid lg:grid-cols-2 gap-4">
            {products.map((product) => (
              <Products key={product.id} product={product} addToCart={addToCart}/>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default App
