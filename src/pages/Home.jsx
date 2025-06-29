import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AdminHeader from './components/Header/AdminHeader'
import NikeRow from '../components/ShoeRow/NikeRow'
import PumaRow from '../components/ShoeRow/PumaRow'
import ReebokRow from '../components/ShoeRow/ReebokRow'
import MotoSection from '../components/MotoSection'
import Footer from '../components/Footer'

export default function Home() {
  const [shoes, setShoes] = useState([])

  useEffect(() => {
    axios.get('/api/shoes').then(res => setShoes(res.data))
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <NikeRow shoes={shoes} />
        <PumaRow shoes={shoes} />
        <ReebokRow shoes={shoes} />
        <MotoSection />
      </main>
      <Footer />
    </div>
  )
}

