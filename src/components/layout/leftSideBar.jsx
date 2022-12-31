import { FaMedium } from 'react-icons/fa';
import { GoMarkGithub } from 'react-icons/go';
import { ImLinkedin, ImTwitter, ImStackoverflow } from 'react-icons/im';

import Links from '../../constants/links';

const iconSize = '20';

const IconAnchorBtn = ({ children, link }) => (
  <a href={link} target="_blank" rel="noreferrer" className="hover:text-white">
    {children}
  </a>
);

const LeftSideBar = () => (
  <div className="col fixed top-0 bottom-0 hidden w-12 flex-col bg-zinc-900 text-zinc-300 md:flex">
    <div className="flex flex-1 flex-col items-center justify-center gap-8 ">
      <IconAnchorBtn link={Links.github}>
        <GoMarkGithub size={iconSize} />
      </IconAnchorBtn>
      <IconAnchorBtn link={Links.medium}>
        <FaMedium size={iconSize} />
      </IconAnchorBtn>
      <IconAnchorBtn link={Links.stackoverflow}>
        <ImStackoverflow size={iconSize} />
      </IconAnchorBtn>
      <IconAnchorBtn link={Links.linkedIn}>
        <ImLinkedin size={iconSize} />
      </IconAnchorBtn>
      <IconAnchorBtn link={Links.twitter}>
        <ImTwitter size={iconSize} />
      </IconAnchorBtn>
    </div>
    <div className="flex flex-1 flex-col items-center justify-center text-center">
      <div className="-rotate-90 whitespace-nowrap tracking-wide">
        <a href="mailTo:ahrenpradhan@gmail.com" className="hover:text-white">
          Contact: ahrenpradhan@gmail.com
        </a>
      </div>
    </div>
  </div>
);

export default LeftSideBar;
