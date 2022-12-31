import Blogs from './blogs';
import Intro from './intro';
import Present from './present';
import Work from './work';

const Home = () => (
  <div className=" min-h-screen bg-zinc-200 bg-opacity-60">
    <Intro />
    <Work />
    <Present />
    <Blogs />
  </div>
);

export default Home;
