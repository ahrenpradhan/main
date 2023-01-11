import Blogs from './blogs';
import Intro from './intro';
import Present from './present';
import Projects from './projects';
import Worked from './worked';

const Home = () => (
  <>
    <Intro />
    <Projects />
    <Present />
    <Worked/>
    <Blogs />
  </>
);

export default Home;
