//packages
import React from "react";
import { Spinner } from "@chakra-ui/react";

export default function LoadingIndicator() {
  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:"center", marginTop:"100px"}}>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </div>
  );
}
