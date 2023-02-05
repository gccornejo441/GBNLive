import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
} from '@chakra-ui/react';

const FAQ = () => (
  <Box maxW='800px' mx='auto' mt={10}>
    <Heading as='h2' mb={5}>
      Frequently Asked Questions
    </Heading>
    <Accordion allowMultiple>
      <AccordionItem>
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton>
                <Box as='span' flex='1' textAlign='left'>
                  Section 2 title
                </Box>
                {isExpanded ? (
                  <i className='fa-solid fa-minus'></i>
                ) : (
                  <i className='fa-solid fa-plus'></i>
                )}
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
      <AccordionItem>
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton>
                <Box as='span' flex='1' textAlign='left'>
                  Section 2 title
                </Box>
                {isExpanded ? (
                  <i className='fa-solid fa-minus'></i>
                ) : (
                  <i className='fa-solid fa-plus'></i>
                )}
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
      <AccordionItem>
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton>
                <Box as='span' flex='1' textAlign='left'>
                  Section 2 title
                </Box>
                {isExpanded ? (
                  <i className='fa-solid fa-minus'></i>
                ) : (
                  <i className='fa-solid fa-plus'></i>
                )}
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  </Box>
);

export default FAQ;
