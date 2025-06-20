import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductsByBrand } from '../services/productService';

function BrandPage() {
  const { brand } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBrandProducts = async () => {
      try {
        const { data } = await getProductsByBrand(brand);
        setProducts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBrandProducts();
  }, [brand]);

  
}