export default function FeaturedSale({ brand }) {

  const saleItem = {
    id: 101,
    name: `${brand} Special Edition`,
    price: 899,
    originalPrice: 1299,
    image: `/${brand.toLowerCase()}-sale.jpg`,
    description: "Limited time offer on our premium running shoes"
  }

  return (
    <div className="mb-12 p-6 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">{brand} SPECIAL OFFER</h2>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-1/3">
          <img 
            src={saleItem.image} 
            alt={saleItem.name}
            className="w-full h-64 object-contain"
          />
        </div>
        <div className="w-full md:w-2/3">
          <h3 className="text-xl font-bold">{saleItem.name}</h3>
          <div className="flex items-center gap-4 my-3">
            <span className="text-2xl font-bold text-red-600">R{saleItem.price}</span>
            <span className="text-lg line-through text-gray-500">R{saleItem.originalPrice}</span>
            <span className="bg-red-600 text-white px-2 py-1 rounded text-sm">
              {Math.round((1 - saleItem.price/saleItem.originalPrice) * 100)}% OFF
            </span>
          </div>
          <p className="text-gray-700 mb-4">{saleItem.description}</p>
          <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  )
}