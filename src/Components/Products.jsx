import React from 'react';
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { addProductInStore } from "../Utils/Redux";
import axios from "axios";

const Products = () => {
  
  const storeData = useSelector((state) => {
    return state.data;
  });

  const dispatch = useDispatch();
  React.useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(result=>{
        const data = {}
        for (let product of result.data){
            data[product.id] = product
          }
          dispatch(addProductInStore(data));
      }).catch(err=>{
        console.log("API failed", err);
      })
  },[dispatch]);

  if (storeData.backupData && Object.keys(storeData.backupData).length > 0) {
    console.log("Backup,,,");
  }
  return (
    <div className="flex flex-wrap justify-between px-10">
      {storeData.products &&
        Object.keys(storeData.products).map((key) => (
          <ProductCard
            product={storeData.products[key]}
            key={storeData.products[key].id}
          />
        ))}
    </div>
  );
}

export default Products
