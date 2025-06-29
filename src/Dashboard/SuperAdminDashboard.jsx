import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function SuperAdminDashboard() {
  
  const [shoes, setShoes] = useState([]); 

  useEffect(() => {
    axios.get('/api/shoes')
      .then(res => {
        setShoes(res.data); 
      })
      .catch(error => {
        console.error('Error fetching shoes:', error);
      });
  }, []); 
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Super Admin Dashboard</h1>
      <p className="text-lg mb-4">Manage your shoe inventory and users here.</p>

      
      {shoes.length > 0 ? (
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">All Shoes</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {shoes.map(shoe => (
              <li key={shoe.id} className="border p-4 rounded-md">
                <h3 className="text-xl font-bold">{shoe.name}</h3>
                <p>Brand: {shoe.brand}</p>
                <p>Price: ${shoe.price}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-gray-600">Loading shoes or no shoes available...</p>
      )}

      
    </div>
  );
}