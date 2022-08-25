import { Input, InputRightElement, Button, InputGroup, InputLeftElement} from "@chakra-ui/react"
import { UnlockIcon } from "@chakra-ui/icons"
import { useState } from "react";

const PasswordInput = ({password,setPassword}) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <>
      <InputGroup size="md"  display = 'flex' alignContent='center'>
        <InputLeftElement
          pointerEvents="none"

          size="xs"
        > <UnlockIcon w='1.8rem' h='1.8rem' mt='auto'
          ml='0.4rem'
          color='blue' />
        </InputLeftElement>
        <Input h='3.4rem' 
        pr='4.5rem'
        variant='outline' type={show ? 'text' : 'password'} placeholder='Enter password'
          onChange={(e) => setPassword(e.target.value)} value={password} />
          <InputRightElement width='5rem' mt='0.4rem'>
          <Button size='sm' onClick={handleClick}>
            {show ? 'Hide' : 'Show'}
          </Button>
        </InputRightElement>
      </InputGroup>
    </>
  )
}

export default PasswordInput;