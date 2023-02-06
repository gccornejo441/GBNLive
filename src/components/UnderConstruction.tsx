import { Box, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';

const UnderConstruction = () => (
  <Box
    display='flex'
    alignItems='center'
    justifyContent='center'
    minH='100vh'
    bg='gray.200'
    p={8}
  >
    <Box maxW='sm'>
      <Heading as='h1' size='xl' textAlign='center' mb={4}>
        Under Construction
      </Heading>
      <Text textAlign='center' mb={4}>
        Sorry, this page is currently under construction. We're working hard to
        bring you a better experience soon!
      </Text>
      <Image
        src='https://images.pexels.com/photos/211122/pexels-photo-211122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        alt='Under Construction'
        mx='auto'
        display='block'
        w='50%'
      />
    </Box>
  </Box>
);

export default UnderConstruction;
