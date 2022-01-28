/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Button } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Accordion from 'components/accordion/accordion';

const data = [
  {
    id: 1,
    title: `01. What is Alignitem?`,
    contents: (
      <div>
        Alignitem is a platform that helps companies get on-demand user feedback on their software and applications.
        Businesses can benefit greatly from user testing. If you have started a business around an interface, then you have to make sure that your product is user friendly. Considering the abundance of competition already present on global networks, to simplify is to succeed. This means that to have a prosperous business venture, you must design your interface to simplify it more for a wider audience.


      </div>
    ),
  },
  {
    id: 2,
    title: `02. Why do we need audience testing?`,
    contents: (
      <div>
        User experience starts with user testing. To achieve great UX, you must first find out what that looks like.
        User testing gives you the perfect insight into what the user thinks of your product so far.
        Have you ever noticed that almost every mobile version of a website has the ‘burger’ menu in the top right? Why? Because that’s where we expect it to be. It’s pretty much unchangeable now. It’s also the simplest way to show where the menu navigation (a very important part of any website) is.
        Well-implemented user testing saves you money.  Your product or software will hit the market in the best working order and won’t be riddled with bugs or issues. Fixing them during the prototype stage is far easier and less costly.

      </div>
    ),
  },
  {
    id: 3,
    title: `03. How users will perform Testing?`,
    contents: (
      <div>
        Suppose You have built an app for a restaurant and want to test some features and functions like:
        <li>Booking a table</li>
        <li>Finding the restaurant</li>
        <li>Viewing the menu</li>
        <li>Finding the dietary information</li>
        <li>Ordering a takeaway</li>
        <li>Contact details</li>
        <li>Finding reviews</li>
        Now users will feel the experience on their device in their comfort zone and use as much as they want to use the product and after a certain point they need to report their experience which give detailed analysis and help developers/owners to make their product more efficient.
      </div>
    ),
  },
  {
    id: 4,
    title: `04. How can i get detailed report for my product?`,
    contents: (
      <div>
        On the basis of your plan after every session the rating provided by audience is computed and a detailed graphical report is generated which explains what people liked and where we lacked. Then our dedicated SEO Managers and Product Desingers provide solutions for the same.
      </div>
    ),
  },
  // {
  //   id: 5,
  //   title: `05. Learn from community on Brandwagon`,
  //   contents: (
  //     <div>
  //       Stop your viewers from getting distracted. Publish videos to. Simply
  //       contact us and we'll move your hosting account from any other provider,
  //       regardless of the control panel. If at anytime your website is down for
  //       more than 0.1% result with proper investigation experiments.
  //     </div>
  //   ),
  // },
];

const Faq = () => {
  return (
    <section id="faq" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={{ mb: [6, null, null, 12, 17] }}
          slogan="Get your question answer"
          title="Frequently asked question"
        />

        <Accordion items={data} />
        <Box sx={styles.loadMore}>
          <Button variant="text">Still have a Question? Contact us</Button>
        </Box>
      </Container>
    </section>
  );
};

export default Faq;

const styles = {
  section: {
    pt: [6, null, null, null, 6, 10, 14],
    pb: [12, null, null, null, 10, 22],
  },
  loadMore: {
    paddingTop: [3, null, null, 0],
    textAlign: 'center',
    button: {
      backgroundColor: '#ECF2F7',
      color: '#738295',
      minHeight: 50,
      px: '22px',
      ':hover': {
        backgroundColor: 'primary',
        color: 'white',
      },
    },
  },
};
