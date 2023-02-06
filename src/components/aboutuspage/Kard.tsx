import {
  Heading,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Card, CardBody, CardFooter, CardHeader } from '@chakra-ui/react';
interface CardProps {
  image: string;
  title: string;
  description: string;
  link?: string;
}

const mockData = [
  {
    image: 'images/aboutuspage/perfectly-responsive.svg',
    title: 'Card 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '#',
  },
  {
    image: '/images/aboutuspage/friendly-support.svg',
    title: 'Card 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '#',
  },
  {
    image: '/images/aboutuspage/perfectly-responsive.svg',
    title: 'Card 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '#',
  },
];

const CardComponent: React.FC<CardProps> = ({
  image,
  title,
  description,
  link,
}) => (
  <SimpleGrid
    maxW='lg'
    borderWidth='1px'
    rounded='lg'
    overflow='hidden'
    bg='#ffffff'
  >
    <Card>
      <Image boxSize='80px' className='p-5' src={image} alt={title} />
      <CardHeader>
        <Heading as='h4' fontWeight='bold'>
          {title}
        </Heading>
      </CardHeader>
      <CardBody>
        <Text mt='1' fontSize='sm'>
          {description}
        </Text>{' '}
      </CardBody>
      <CardFooter>
        {link && (
          <Stack mt='2' isInline>
            <Link href={link} fontSize='sm'>
              Learn More
            </Link>
          </Stack>
        )}
      </CardFooter>
    </Card>
  </SimpleGrid>
);

const Kard = () => {
  return (
    <div className='flex justify-center bg-teal-1000 py-20'>
      <div className='container flex justify-between'>
        {mockData.map((item) => {
          return (
            <CardComponent
              key={item.title}
              image={item.image}
              title={item.title}
              description={item.description}
              link={item.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Kard;
