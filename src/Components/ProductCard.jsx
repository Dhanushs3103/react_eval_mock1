import React from "react";
import {
  Card,
  Image,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Text,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  let { id,category, image, price, title } = product;
  let navigate = useNavigate();
  return (
    <>
      <Card maxW="sm"  boxShadow={"rgba(0, 0, 0, 0.1) 0px 1px 2px 0px"}>
        <CardBody>
          <Image
            width={"300px"}
            height={"280px"}
            margin={"auto"}
            src={image}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">Name: {title}</Heading>
            <Text fontSize="xl">Category: {category}</Text>
            <Text color="blue.600" fontSize="2xl">
              Price : ${price}
            </Text>
          </Stack>
        </CardBody>
        <CardFooter>
          <Button variant="solid" colorScheme="blue" onClick={()=>{
            navigate(`/products/${id}`)
          }}>
            View Product
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
