const Products = ({ product, addToCart }) => {
    const { imageUrl, title, description, price } = product;

    return (
        <div className="bg-slate-900 shadow-m  rounded-md p-4 w-64 text-white mx-auto">
            <img className="h-40 w-full object-cover rounded-md mb-4" src={imageUrl} alt={title} />
            <h3 className="text-lg font-semibold mb-3">{title}</h3>
            <p className="text-sm mb-4">{description}</p>
            <div className="flex items-center justify-between">
                <span className="text-xl font-semibold">${price}</span>
                <button 
                    onClick = {() => addToCart(product)}
                    className="bg-indigo-600 text-white rounded-md px-4 py-2 hover:bg-indigo-700 transition-all"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};


export default Products
