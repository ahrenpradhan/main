import { MdMenu } from 'react-icons/md';

const NavBar = () => (
  <>
    <div className="fixed h-16 min-w-full bg-zinc-100 opacity-20" />
    <div className=" fixed min-w-full border-b-2 border-y-zinc-50 border-opacity-20 backdrop-blur ">
      <div className=" m-auto flex h-16 justify-between md:container md:min-w-fit">
        <div className="self-center px-5">
          <span className="text-2xl">AP</span>
        </div>
        <div className="self-center px-5">
          <MdMenu size="28" />
        </div>
      </div>
    </div>
  </>
);

export default NavBar;
