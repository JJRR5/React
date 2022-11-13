const CartItem = ({ removeFromCart, productCartData, handleProductQuantity }) => {
    const { id, title, price, quantity } = productCartData;
    return (
        <tr className="my-5">
            <td>{title}</td>
            <td>${price}</td>
            <td className="grid grid-cols-3 place-items-center">
                <button
                    onClick={() => {handleProductQuantity(id, "remove")}}
                    className="disabled:bg-gray-600 bg-indigo-600 text-white font-bold rounded-md py-1 hover:bg-indigo-700 transition-all w-1/2"
                    disabled={quantity === 1}
                >
                    &#45;
                </button>
                {quantity}
                <button
                    className="bg-indigo-600 text-white font-bold rounded-md py-1 hover:bg-indigo-700 transition-all w-1/2"
                    onClick={() => {handleProductQuantity(id, "add")}}
                >
                    &#43;
                </button>
            </td>
            <td>
                <button
                    onClick={() => removeFromCart(id)}
                    className="bg-red-600 text-white rounded-lg px-4 py-1 hover:bg-red-700 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash-x" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M4 7h16"></path>
                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                        <path d="M10 12l4 4m0 -4l-4 4"></path>
                    </svg>
                </button>
            </td>
        </tr>
    )
}

export default CartItem
