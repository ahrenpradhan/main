import MmjsLogo from '@/Assets/companies/mmjs.png';
import NEOsoftLogo from '@/Assets/companies/neosoft.svg';
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
        Worked with
      </div>
      <div className="flex flex-wrap justify-center gap-4 md:gap-8">
        <ImageWrapper svg={NEOsoftLogo} alt="teknofeet logo" />
        <ImageWrapper svg={MmjsLogo} alt="teknofeet logo" />
        <ImageWrapper
          svg={TeknofeetLogo}
          className="w-3/4 md:w-1/2 md:max-w-none"
          alt="teknofeet logo"
        />
      </div>
    </div>
  </section>
);

export default Worked;
