import { Link } from 'react-router-dom'

export default function AdminProductGrid({ products }) {
  // Group products by brand
  const brandGroups = {
    nike: products.filter(p => p.brand === 'nike').slice(0, 8),
    puma: products.filter(p => p.brand === 'puma').slice(0, 8),
    reebok: products.filter(p => p.brand === 'reebok').slice(0, 8)
  }

  return (
    <div className="space-y-12">
      {Object.entries(brandGroups).map(([brand, brandProducts]) => (
        brandProducts.length > 0 && (
          <div key={brand} className="mb-12">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold capitalize">{brand}</h2>
              <span className="text-gray-500">
                Showing {brandProducts.length} of {brandProducts.length} products
              </span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {brandProducts.map(product => (
                <div key={product.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-white">
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-contain p-4 bg-gray-100"
                    />
                    {product.onSale && (
                      <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-bold">
                        SALE
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">{product.name}</h3>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-gray-900 font-bold">R{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-gray-500 line-through text-sm">R{product.originalPrice}</span>
                      )}
                    </div>
                    <div className="mt-4 flex gap-2">
                      <Link 
                        to={`/admin/edit-product/${product.id}`}
                        className="text-sm bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                      >
                        Edit
                      </Link>
                      <button className="text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      ))}
    </div>
  )
}