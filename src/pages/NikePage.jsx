import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Navbar from '../components/Header/Navbar'
import Footer from '../components/Footer'
import ProductGrid from '../components/ProductGrid'

export default function NikePage() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ProductGrid brand="Nike" products={products} />
      </main>
      <Footer />
    </div>
  )
}