import { MdMenu } from 'react-icons/md';

const NavBar = () => (
  <>
    <div className="container fixed flex h-20 justify-between border-b-2 backdrop-blur">
      <div className="self-center px-5">
        <span className="text-2xl">AP</span>
      </div>
      <div className="self-center px-5">
        <MdMenu size="28" />
      </div>
    </div>
    <div className="h-20" />
  </>
);

export default NavBar;
