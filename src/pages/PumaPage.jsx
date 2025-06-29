import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Navbar from '../components/Header/Navbar'
import Footer from '../components/Footer'
import ProductGrid from '../components/ProductGrid'
import AdminHeader from '../components/Header/AdminHeader'

export default function PumaPage() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <AdminHeader />
      <main className="flex-grow">
        <ProductGrid brand="Puma" products={products} />
      </main>
      <Footer />
    </div>
  )
}