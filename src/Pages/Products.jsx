// Packages
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {  Container, Flex, Select, Spacer } from "@chakra-ui/react";


// Local Imports
import LoadingIndicator from "../Components/LoadingIndicator";
import ErrorIndicator from "../Components/ErrorIndicator";
import ProductCard from "../Components/ProductCard";
// API_URL
let API_URL = `https://fakestoreapi.com/products`;

export default function Products() {
  let [products, setProducts] = useState([]);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(false);

  async function getData() {
    setLoading(true);
    try {
      let res = await axios({
        method: "get",
        url: API_URL,
      });
      setProducts(res.data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator />;
  }


  return (
    <>
      <h1 style={{ fontSize: "30px", textAlign: "center", fontWeight: "500", margin:"20px" }}>
        Products Page
      </h1>
      
      {/* Products section */}
      <Container
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "40px",
        }}
        maxW={"7xl"}
        marginTop={5}
        marginBottom={8}
      >
        {products.map((product, i) => {
          return <ProductCard key={i} product={product} />;
        })}
      </Container>
    </>
  );
}
