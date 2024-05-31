// packages
import React from "react";
import { AuthContext } from "../Components/AuthContextProvider";
import { useContext,useState } from "react";
import { Container, Input,Button,useToast } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

//local imports
import LoadingIndicator from "../Components/LoadingIndicator";


export default function Login() {
  let { login } = useContext(AuthContext);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(false);
  const toast = useToast();
  let navigate = useNavigate()
  let [formState,setFormState] = useState({
    email:"",
    password:"",
  })

  function handleInputChange(e) {
    let {name,value} = e.target;

    setFormState({
      ...formState,[name]:value
    })
  }

   
  async function handleSubmit(e) {
    e.preventDefault();
    if(formState.email === "" && formState.password === "") {
      return toast({
        title: `Please enter the login credentials`,
        status: "warning",
        isClosable: true,
        duration:2000
      });
    }
    setLoading(true)
     try {
      let auth = await axios({
        method:"post",
        url:`https://reqres.in/api/login`,
        data:formState
      })
      if(auth.status === 200) {
        toast({
          title: `Login successfull`,
          status: "success",
          isClosable: true,
          duration:2000
        });
        login();
        navigate(`/products`)
      }
      setLoading(false)
     } catch (error) {
      setError(true)
      setLoading(false)
     }
  }
  
  
  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return  toast({
      title: `Login failed`,
      status: "error",
      isClosable: true,
      duration:2000
    });
  }

  return (
    <>
      <h1 style={{ fontSize: "30px", textAlign: "center", fontWeight: "500" }}>
        Login Page
      </h1>
      <Container maxW="md" p={5} border={"1px solid"} color="white" mt={4} boxShadow={"rgba(0, 0, 0, 0.1) 0px 1px 2px 0px"}>
        <form onSubmit={handleSubmit}>
          {/* email */}
          <label htmlFor="email" style={{ color: "black", fontSize: "20px" }}>
            Enter your Email <span style={{ color: "red" }}>*</span>
            <Input
              id="email"
              type="email"
              placeholder="Enter the email"
              size="lg"
              marginTop={1}
              mb={3}
              name="email"
              value={formState.email}
              onChange={handleInputChange}
            />
          </label>
          {/* password */}
          <label htmlFor="password" style={{ color: "black", fontSize: "20px" }}>
            Enter your password <span style={{ color: "red" }}>*</span>
            <Input
              id="password"
              type="password"
              placeholder="Enter the password"
              value={formState.password}
              name="password"
              onChange={handleInputChange}
              size="lg"
              marginTop={1}
            />
          </label>
          <Button colorScheme="green" size="lg"  p={"20px 175px"} mt={7} type="submit">
            Submit 
          </Button>
        </form>
      </Container>
    </>
  );
}
