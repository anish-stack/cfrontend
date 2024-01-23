import axios from "axios";
import { useEffect, useState } from "react";
import AgriculturalProduct from "./AgriculturalProduct";

const Aggricultural = () => {
  const [Product, setProduct] = useState();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://confirmbuyers.onrender.com/user/getAllFetureProducts"
      );
      // console.log(response.data.allFetureProduct)
      // setProduct(response.data.allFetureProducta)

      const agriculturalProducts = response.data.allFetureProduct.filter(
        (product) => product.keyword.includes("Agricultural")
      );
    //   console.log(agriculturalProducts);
      if (agriculturalProducts.length > 0) {
        setProduct(agriculturalProducts);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return <AgriculturalProduct Products={Product} />;
};

export default Aggricultural;
