import axios from "axios";
import { useEffect, useState } from "react";
import AnimalProduct from "./AnimalProduct";

const Animal = () => {
  const [Product, setProduct] = useState();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://confirmbuyers.onrender.com/user/getAllFetureProducts"
      );
      console.log(response.data.allFetureProduct)
      // setProduct(response.data.allFetureProducta)

      const AnimalProducts = response.data.allFetureProduct.filter(
        (product) => product.keyword.includes("Animal")
      );
      console.log("AnimalProducts",AnimalProducts);
      if (AnimalProducts.length > 0) {
        setProduct(AnimalProducts);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return <AnimalProduct Products={Product} />;
};

export default Animal;
