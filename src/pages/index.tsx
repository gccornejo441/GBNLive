import Contact from '@/components/homepage/Contact';
import Featured from '@/components/homepage/Featured';
import Finisher from '@/components/homepage/Finisher';
import Hero from '@/components/homepage/Hero';
import Services from '@/components/homepage/Services';
import Team from '@/components/homepage/Team';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout title='Full-Service Marketing, Branding, & Design Agency | GBN Creative'>
    <Hero />
    <Services />
    <Featured />
    <Team />
    <Finisher />
    <Contact />
  </Layout>
);

export default IndexPage;
