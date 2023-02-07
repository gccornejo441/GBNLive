import FAQ from '@/components/aboutuspage/FAQ';
import Hero from '@/components/aboutuspage/Hero';
import Kard from '@/components/aboutuspage/Kard';
import Services from '@/components/aboutuspage/Services';
import Team from '@/components/aboutuspage/Team';

import Layout from '../components/Layout';

const AboutUsPage = () => (
  <Layout title='About Us | GBN CREATIVE | Marketing, Branding, & Design Experts'>
    <Hero />
    <Services />
    <Team />
    <Kard />
    <FAQ />
  </Layout>
);

export default AboutUsPage;
