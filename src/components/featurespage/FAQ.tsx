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
    description:
      'Our agency offers a range of services including marketing, branding, and design. We can help you with your branding strategy, website design, and marketing campaigns.',
  },
  {
    id: 2,
    question: 'How long does a typical project take?',
    description:
      'The length of a project depends on the size and complexity of the project. For a standard five-page website, we guarantee a 1-week delivery. For larger projects, the timeline may be longer but we will provide you with a detailed project plan.',
  },
  {
    id: 3,
    question: 'Do you offer 24/7 support?',
    description:
      'Yes, we offer 24/7 priority support to all of our clients. You can reach out to us anytime and we will be here to help.',
  },
  {
    id: 4,
    question: 'Do you offer free revisions and maintenance?',
    description:
      'Yes, we offer free revisions on all of our projects and one week of free maintenance after the project is completed.',
  },
  {
    id: 5,
    question: 'What is your process for working with clients?',
    description:
      'Our process starts with a consultation to understand your needs and goals. Then we create a detailed project plan and get your approval. During the project, we will keep you updated and make any necessary revisions. After the project is completed, we offer free maintenance for one week.',
  },
];

const FAQ = () => (
  <div className='bg-blue-gray-100 py-10 pb-[150px]'>
    <Box maxW='800px' mx='auto' mt={10}>
      <Heading as='h2' mb={5}>
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
                <AccordionPanel pb={4}>{faq.description}</AccordionPanel>
              </>
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  </div>
);

export default FAQ;
