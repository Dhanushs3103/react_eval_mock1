//Packages
import React from 'react'
import { Link } from 'react-router-dom'
import { Flex, Spacer,Button ,useToast} from '@chakra-ui/react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

// local imports
import { AuthContext } from './AuthContextProvider'

export default function Navbar() {
  let {isLoggedIn,logout} = useContext(AuthContext);
  let navigate = useNavigate();
  let toast = useToast()

  return (
    <Flex p={2} boxShadow={"rgba(0, 0, 0, 0.1) 0px 1px 2px 0px"}>
        <Spacer/>
        <Link to="/" style={{fontSize:"20px",fontWeight:"500"}}>Home</Link>
        <Spacer/>
        <Link to="/about" style={{fontSize:"20px",fontWeight:"500"}}>About</Link>
        <Spacer/>
        <Link to="/products" style={{fontSize:"20px",fontWeight:"500"}}>Products</Link>
        <Spacer/>
        {isLoggedIn ? (<Button colorScheme="red" size="md" fontSize={20} onClick={()=>{
           toast({
            title: `Logged out successfully`,
            status: "success",
            isClosable: true,
            duration:2000
          });
          logout()
        }} >
            Logout 
          </Button>) :(<Button colorScheme="green" size="md" fontSize={20} onClick={()=>{
           navigate(`/login`)
          }} >
            Login 
          </Button>)}
        <Spacer/>
    </Flex>
  )
}
