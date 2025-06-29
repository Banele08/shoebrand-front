import FeaturedSale from './components/FeaturedSale';
export default function ProductGrid({ brand, products }) {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Featured Sale Section */}
      <FeaturedSale brand={brand} />
      
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.filter(product => product.brand === brand.toLowerCase()).map(product => (
          <div key={product.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-64 object-contain p-4"
              />
              {product.onSale && (
                <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-bold">
                  SALE
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <div className="flex justify-between items-center mt-2">
                <span className="text-gray-900 font-bold">R{product.price}</span>
                {product.originalPrice && (
                  <span className="text-gray-500 line-through text-sm">R{product.originalPrice}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}