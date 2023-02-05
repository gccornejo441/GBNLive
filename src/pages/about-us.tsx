import FAQ from '@/components/aboutuspage/FAQ';
import Featured from '@/components/aboutuspage/Featured';
import Hero from '@/components/aboutuspage/Hero';
import Services from '@/components/aboutuspage/Services';

import Layout from '../components/Layout';

const AboutUsPage = () => (
  <Layout title='About Us | GBN CREATIVE | Marketing, Branding, & Design Experts'>
    <Hero />
    <Services />
    <FAQ />
    <Featured />
  </Layout>
);

export default AboutUsPage;
