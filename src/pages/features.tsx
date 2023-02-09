import FAQ from '@/components/featurespage/FAQ';
import Featured from '@/components/featurespage/Featured';
import Hero from '@/components/featurespage/Hero';
import Kard from '@/components/featurespage/Kard';

import Layout from '../components/Layout';

const FeaturesPage = () => (
  <Layout title='Features | GBN Creative | Marketing, Branding, & Design Solutions'>
    <Hero />
    <Kard />
    <Featured />
    <FAQ />
  </Layout>
);

export default FeaturesPage;
