import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
} from '@chakra-ui/react';

const faqs = [
  {
    id: 1,
    question: 'What services do you offer?',
    answer:
      'Our agency offers a wide range of marketing, branding, and design services including branding, graphic design, website design, digital marketing, advertising, and more.',
    description:
      'Get an overview of the different services offered by the agency.',
  },
  {
    id: 2,
    question:
      'What is your process for creating a brand or marketing campaign?',
    answer:
      "Our process for creating a brand or marketing campaign starts with understanding the client's goals and target audience, conducting market research, creating a strategy, and executing the campaign with regular monitoring and analysis.",
    description:
      'Learn about the steps involved in creating a successful brand or marketing campaign.',
  },
  {
    id: 3,
    question: 'How do you determine the target audience for a project?',
    answer:
      "We determine the target audience for a project by gathering information about the client's business, analyzing their existing customers, and conducting market research to identify potential target segments.",
    description:
      'Find out how the agency identifies the target audience for a project.',
  },
  {
    id: 4,
    question:
      'Can you provide examples of successful projects you have worked on?',
    answer:
      'Yes, we have worked on several successful projects for clients in various industries. Some of our most successful projects include rebranding for a technology company, launching a new product for a consumer goods company, and designing a website for a law firm.',
    description:
      'See some of the successful projects the agency has completed in the past.',
  },
  {
    id: 5,
    question: 'How do you measure the success of a marketing campaign?',
    answer:
      'We measure the success of a marketing campaign by tracking key performance indicators such as website traffic, lead generation, conversion rates, and engagement on social media platforms.',
    description:
      'Understand how the agency measures the success of a marketing campaign.',
  },
  // Add more questions and answers here
];

const FAQ = () => (
  <div className='bg-blue-gray-100 py-10 pb-[150px]'>
    <Box maxW='800px' mx='auto' mt={10}>
      <Heading as='h2' mb={5} ml={4}>
        Frequently Asked Questions
      </Heading>
      <Accordion allowMultiple>
        {faqs.map((faq) => (
          <AccordionItem key={faq.id}>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box as='span' flex='1' textAlign='left'>
                      <span className='font-[700]'>{faq.question}</span>
                    </Box>
                    {isExpanded ? (
                      <i className='fa-solid fa-minus'></i>
                    ) : (
                      <i className='fa-solid fa-plus'></i>
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>{faq.answer}</AccordionPanel>
              </>
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  </div>
);

export default FAQ;
