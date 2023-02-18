import AlgoliaLogo from '@/Assets/companies/algolia.svg';
import AyasyaLogo from '@/Assets/companies/ayasya.png';
import CommerceToolsLogo from '@/Assets/companies/commerceTools.svg';
import MmjsLogo from '@/Assets/companies/mmjs.png';
import NEOsoftLogo from '@/Assets/companies/neosoft.svg';
import ParagyteLogo from '@/Assets/companies/paragyte.png';
import TagtasteLogo from '@/Assets/companies/tagtaste.svg';
import TeknofeetLogo from '@/Assets/companies/teknofeet.svg';
import { Divider, ImageWrapper } from '@/Components/common/index';
// section 3 - Worked

const Worked = () => (
  <section
    className="container m-auto flex min-h-screen flex-col justify-center p-4 pb-32"
    id="worked"
  >
    <div>
      <Divider />
      <div className="min-w-full pb-8 text-center text-3xl font-bold tracking-wide">
        <span>Freelanced With | </span>
        <span>Employeed At | </span>
        <span>Outsourced To</span>
      </div>
      <div className="flex flex-wrap justify-center gap-4 md:gap-8">
        <ImageWrapper
          src={AlgoliaLogo}
          alt="algolia logo"
          imgStyle={{ width: '16em' }}
        />
        <ImageWrapper
          src={CommerceToolsLogo}
          alt="commercetools logo"
          imgStyle={{ width: '16em' }}
        />
        <ImageWrapper
          src={AyasyaLogo}
          alt="ayasya logo"
          imgStyle={{ maxWidth: '16em' }}
        />
        <ImageWrapper
          svg={TagtasteLogo}
          alt="tagtaste logo"
          imgStyle={{ width: '16em' }}
        />
        <ImageWrapper svg={NEOsoftLogo} alt="neosoft logo" />
        <ImageWrapper src={MmjsLogo} alt="mmjs logo" />
        <ImageWrapper
          svg={TeknofeetLogo}
          className="w-3/4 md:w-1/2 md:max-w-none"
          alt="teknofeet logo"
        />
        <ImageWrapper src={ParagyteLogo} className="bg-black p-4" alt="mmjs logo" />
      </div>
    </div>
  </section>
);

export default Worked;
