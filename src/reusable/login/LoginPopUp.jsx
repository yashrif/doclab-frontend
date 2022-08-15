import {
  Box, Modal, ModalBody,
  ModalOverlay, ModalContent, FormControl, Input,
  ModalFooter, Button,
  useDisclosure, ModalHeader, ModalCloseButton
  ,Text,
} from "@chakra-ui/react";
import React from "react";
import { EmailIcon, UnlockIcon ,ArrowForwardIcon} from "@chakra-ui/icons";

const LoginPopUp = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  return (
    <>
      <Box onClick={onOpen} ref={finalRef}>
        {children}
      </Box>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size= 'xl'
      >
        <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='auto'
      backdropBlur='2px'
    />
        <ModalContent mt='8rem' p='2rem'>
        <ModalCloseButton />
          <ModalHeader  alignSelf='center' fontSize='2.4rem ' color='blue.700'>Welcome Back</ModalHeader>
          <ModalHeader fontSize='1.4rem' color='gray.400'>Enter your credentials  to access your account</ModalHeader>
         
          <ModalBody  mt='2.4rem ' pb='1.4rem' display='flex' flexDirection='column'
               >
            <FormControl display='flex' alignItems='center'>
              <EmailIcon w='2.4rem' h='1.8rem' color='blue' mr='1.4rem'/>
              <Input ref={initialRef} variant='flushed' placeholder='User Email' />
            </FormControl>

            <FormControl mt='1.8rem' display='flex' alignItems='center'>
              <UnlockIcon w='2.4rem' h='1.8rem' color='blue' mr='1.4rem'/>
              <Input  h='3.4rem' variant='flushed' placeholder='Password' />
            </FormControl>
          </ModalBody>

          <ModalFooter display='flex'  mt='1.8rem'  justifyContent='space-evenly'>
            <Button colorScheme='blue'  size='lg'>
              Login
            </Button>
            <Button onClick={onClose}  size='lg'>
              <Text mr='0.4rem'>Sign Up</Text>
             <ArrowForwardIcon/></Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default LoginPopUp;