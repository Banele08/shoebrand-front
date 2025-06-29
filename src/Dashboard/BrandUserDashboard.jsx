import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


export default function BrandUserDashboard() {
const { brand } = useParams();
const [shoes, setShoes] = useState([]);

useEffect(() => {
  axios.get(`/api/shoes?brand=${brand}`)
    .then(res => setShoes(res.data));
}, [brand]);

}