import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import Card from "./Card";
import axios from "axios";

export default function MainSection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then(function (response) {
        newProducts(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  function newProducts(products) {
    setProducts(products);
  }
  function getData() {
    return products.map((product) => {
      return (
        <Card
          key={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          subtitle={product.category}
          img={product.image}
        />
      );
    });
  }

  console.log(getData());

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        height: "100%",
        gap: "1rem",
        flexWrap: "wrap",
      }}
    >
      {getData()}
    </Box>
  );
}
