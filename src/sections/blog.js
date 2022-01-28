/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container } from 'theme-ui';
import Masonry from 'react-masonry-component';
import SectionHeading from 'components/section-heading';
import Post from 'components/cards/post';

import news1 from 'assets/images/blog/1.png';
import news2 from 'assets/images/blog/2.png';
import news3 from 'assets/images/blog/3.png';
import news4 from 'assets/images/blog/4.png';

const data = [
  {
    id: 1,
    image: news1,
    title: 'How we test the product and why audience testing is important after alpha and beta testing',
    desc:
      'User testing gives you the perfect insight into what the user thinks of your product so far. Have you ever noticed ...',
    link: '#',
  },
  {
    id: 2,
    image: news2,
    title:
      'How detailed analysis of user experience helped others',
    desc: '',
    link: '#',
  },
  {
    id: 3,
    image: news3,
    title: 'Ui/UX industry are doing great job in previous year history',
    desc: '',
    link: '',
  },
  {
    id: 4,
    image: news4,
    title: 'why user interface and experience is important in todays world',
    desc: '',
    link: '',
  },
];

const masonryOptions = {
  originTop: false,
};

const Blog = () => {
  return (
    <section id="blog" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={{ mb: [6, null, null, 14] }}
          slogan="Latest newsfeed"
          title="Our recent blog post that updated"
        />
        <Masonry sx={styles.masonry} options={masonryOptions}>
          {data.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </Masonry>
      </Container>
    </section>
  );
};

export default Blog;

const styles = {
  section: {
    pt: [6, null, null, null, 2, 10, 14],
    pb: [2, null, null, null, 6, 10, 14],
  },
  masonry: {
    maxWidth: 1250,
    mx: [-3, null, null, null, 'auto'],
  },
};
