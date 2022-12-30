import backgroundImage from '../../assets/images/background.jpg';
import Blogs from './blogs';
import Intro from './intro';
import Present from './present';
import Work from './work';

const Home = () => (
  <div className=" min-h-screen bg-zinc-200 bg-opacity-60">
    <div
      className="fixed h-screen w-screen"
      style={{
        zIndex: -1
      }}
    >
      <img
        className="h-full w-full object-cover"
        src={backgroundImage}
        alt="background"
      />
    </div>
    <Intro />
    <Work />
    <Present />
    <Blogs />
  </div>
);

export default Home;
