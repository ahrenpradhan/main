import profileImage from '@/Assets/ahren/profile.jpeg';

// section 1 - intro
const Intro = () => (
  <section className="container m-auto mb-8 flex min-h-screen flex-col justify-center py-16 px-8 text-center md:flex-row md:justify-evenly md:px-8 md:text-left">
    <div className="self-center">
      <div className="pt-2 pb-6 text-lg tracking-wide">Hey there !!</div>
      <div className="pb-8 text-3xl font-bold tracking-wider">
        Ahren Pradhan,
        <br /> WEB Developer, <br /> Tech Lead
      </div>
      <div className="pb-10 text-lg tracking-wider">
        This is Ahren, hit me up to jump start your projects. I am also open to
        offers if required.
      </div>
    </div>
    <div className="self-center">
      <img
        src={profileImage}
        className="m-auto w-1/2 rounded-full md:w-2/3"
        alt="logo"
      />
    </div>
  </section>
);

export default Intro;
