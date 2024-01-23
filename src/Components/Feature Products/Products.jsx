import  { useEffect, useState } from 'react';
import axios from 'axios';
import ProductTitle from './ProductTitle.jsx';


const Products = () => {
  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get('https://confirmbuyers.onrender.com/user/getAllFetureProducts');
      setProducts(response.data.allFetureProduct.slice(0,10));
      // console.log(response.data.allFetureProduct)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    // Adjust the number of products to display based on screen width
    const maxProducts = window.innerWidth >= 768 ? 24 : 10;
    setDisplayedProducts(products.slice(0, maxProducts));

  }, [products]);


  return (
    <div className="">
      {/* Pass products as a prop to ProductTitle */}
      <ProductTitle products={displayedProducts} />
    
    </div>
  );
};

export default Products;
