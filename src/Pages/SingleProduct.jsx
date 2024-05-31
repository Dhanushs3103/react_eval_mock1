// packages
import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Card,
  Image,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Text,
  Button,
  Container,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

//local imports
import LoadingIndicator from "../Components/LoadingIndicator";
import ErrorIndicator from "../Components/ErrorIndicator";
// API_URL
let API_URL = `https://fakestoreapi.com/products`;

export default function SingleProduct() {
  let { id } = useParams();
  let [product, setProduct] = useState({});
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(false);
  let navigate = useNavigate();

  async function getData(id) {
    setLoading(true);
    try {
      let res = await axios({
        method: "get",
        url: `${API_URL}/${id}`,
      });
      setProduct(res.data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }

  useEffect(() => {
    getData(id);
  }, [id]);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <>
      <h1 style={{ fontSize: "30px", textAlign: "center", fontWeight: "500" }}>
        {" "}
        Single Product Page
      </h1>
      <Container marginTop={5} marginLeft={500} maxW={"7xl"}>
        <Card maxW="sm">
          <CardBody width={"fit-content"}>
            <Image
              width={"400px"}
              height={"280px"}
              margin={"auto"}
              src={product.image}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Name: {product.title}</Heading>
              <Text fontSize="xl">Category: {product.category}</Text>
              <Text fontSize="l">Description: {product.description}</Text>
              <Text color="blue.600" fontSize="2xl">
                Price : ${product.price}
              </Text>
            </Stack>
          </CardBody>
          <CardFooter>
            <Button
              variant="solid"
              colorScheme="blue"
              onClick={() => {
                navigate(`/products`);
              }}
            >
              Back
            </Button>
          </CardFooter>
        </Card>
      </Container>
    </>
  );
}
