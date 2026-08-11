function ProductCard(props) {
  return (
    <div className="w-80 bg-white p-6 rounded-xl shadow-lg text-center">
      <h1 className="text-2xl font-bold">
        {props.name}
      </h1>

      <p className="text-green-600 text-xl mt-2">
        {props.price}
      </p>
      <p className="text-green-600 text-xl mt-2">
        {props.Category}
      </p>
      <p className="text-green-600 text-xl mt-2">
        {props.Stock}
      </p>
      

      <button className="bg-blue-600 text-white px-5 py-2 rounded-lg mt-5">
        Buy Now
      </button>
    </div>
  );
}

export default ProductCard;