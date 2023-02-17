import { getAllPosts } from '@/lib/api';

import Hero from '@/components/blogpage/Hero';
import HeroPost from '@/components/blogpage/hero-post';
import MoreStories from '@/components/blogpage/more-stories';

import Layout from '../components/Layout';
import Post from '../../interfaces/post';

type Props = {
  allPosts: Post[];
};

const BlogPage = ({ allPosts }: Props) => {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <Layout title='Blog | GBN Creative | Marketing, Branding, & Design Solutions'>
      <Hero />
      <div className='bg-blue-gray-100 py-10'>
        <div className='container mx-auto bg-blue-gray-100'>
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ]);

  return {
    props: { allPosts },
  };
};

export default BlogPage;
