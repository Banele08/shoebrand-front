import { useState, useEffect } from 'react'
import axios from 'axios'
import AdminHeader from '../../components/Header/AdminHeader'
import AdminProductGrid from '../../components/Admin/AdminProductGrid'
import BrandFilter from '../../components/Admin/BrandFilter'
import AdminControls from '../../components/Admin/AdminControls'
import Footer from '../../components/Footer'

export default function AdminDashboard() {
  const [products, setProducts] = useState([])
  const [filter, setFilter] = useState('all') // 'nike', 'puma', 'reebok', 'all'
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('/api/admin/products')
        setProducts(res.data)
        setIsLoading(false)
      } catch (err) {
        console.error('Failed to fetch products:', err)
        setIsLoading(false)
      }
    }
    fetchProducts()
  }, [])

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.brand === filter)

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <AdminHeader />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <BrandFilter activeFilter={filter} setFilter={setFilter} />
        </div>

        <AdminControls />
        
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="bg-gray-200 h-80 rounded-lg animate-pulse"></div>
            ))}
          </div>
        ) : (
          <AdminProductGrid products={filteredProducts} />
        )}
      </main>

      <Footer />
    </div>
  )
}