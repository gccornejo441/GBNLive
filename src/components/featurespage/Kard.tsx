import { Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import { Card, CardBody, CardHeader } from '@chakra-ui/react';
interface CardProps {
  image: string;
  title: string;
  description: string;
  link?: string;
}

const mockData = [
  {
    image: 'images/aboutuspage/perfectly-responsive.svg',
    title: 'Increased visibility',
    description:
      'Our expert team will help you increase your online visibility, attract more qualified leads, and drive more conversions.',
  },
  {
    image: '/images/aboutuspage/friendly-support.svg',
    title: 'Increased engagement',
    description:
      'Our creative solutions will help you increase engagement with your target audience, build brand loyalty, and drive growth.',
  },
  {
    image: '/images/aboutuspage/perfectly-responsive.svg',
    title: 'Collaborative partnership',
    description:
      'We work closely with you to understand your vision, goals, and challenges, building a collaborative partnership to achieve success.',
  },
];

const CardComponent: React.FC<CardProps> = ({ image, title, description }) => (
  <SimpleGrid
    maxW='xs'
    borderWidth='1px'
    rounded='lg'
    overflow='hidden'
    className='mx-10'
  >
    <Card bg='#F4F6FC'>
      <Image boxSize='80px' className='-mb-5 p-5' src={image} alt={title} />
      <CardHeader>
        <Heading as='h4' size='md' fontWeight='bold' className='text-teal-1000'>
          {title}
        </Heading>
      </CardHeader>
      <CardBody>
        <Text fontSize='sm' className='text-teal-1000'>
          {description}
        </Text>{' '}
      </CardBody>
    </Card>
  </SimpleGrid>
);

const Kard = () => {
  // Section Title
  const sectionTitle = 'Partner With Us For Optimal Results';

  return (
    <section className='mt-32 w-full overflow-hidden'>
      <div className='mx-auto w-[400px] pt-16'>
        <Heading
          as='h2'
          size='xl'
          fontWeight='bold'
          className='text-center text-teal-1000 '
        >
          {sectionTitle}
        </Heading>
      </div>
      <div className='flex justify-center bg-white py-10'>
        <div className='grid gap-5 lg:grid-cols-3'>
          {mockData.map((item) => {
            return (
              <CardComponent
                key={item.title}
                image={item.image}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Kard;
