import FAQ from '@/components/featurespage/FAQ';
import Hero from '@/components/featurespage/Hero';
import Kard from '@/components/featurespage/Kard';

import Layout from '../components/Layout';

const FeaturesPage = () => (
  <Layout title='Features | GBN Creative | Marketing, Branding, & Design Solutions'>
    <Hero />
    <Kard />
    <FAQ />
  </Layout>
);

export default FeaturesPage;
