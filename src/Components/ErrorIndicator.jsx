//packages
import React from 'react'
import { useToast } from '@chakra-ui/react'


export default function ErrorIndicator() {
    const toast = useToast()
  return (
    <div>
      { toast({
                title: "Something went wrong , please try to refresh the page",
                status: "error",
                isClosable: true,
                duration:2500
              })
            }
    </div>
  )
}
