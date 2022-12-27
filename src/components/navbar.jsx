import { MdMenu } from 'react-icons/md';

const NavBar = () => (
  <>
    <div className="fixed h-16 min-w-full bg-zinc-100 opacity-20" />
    <div className="fixed flex h-16 min-w-full justify-between border-b-2 border-y-zinc-50 border-opacity-20 backdrop-blur">
      <div className="self-center px-5">
        <span className="text-2xl">AP</span>
      </div>
      <div className="self-center px-5">
        <MdMenu size="28" />
      </div>
    </div>
  </>
);

export default NavBar;
