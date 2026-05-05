import { Divider } from '@/Components/common/index';
import { ContactForm } from '@/Components/index';
import content from '@/Assets/ishu/content.json';
// section 2 - Products

const Section2 = () => (
  <section className="container m-auto px-4 py-16" id="intro">
    <Divider />

    <div className="mx-auto max-w-3xl text-center pb-10">
      <h2 className="text-3xl font-bold tracking-wide text-slate-900">{content.section1.title}</h2>
      <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600 sm:text-base">
        {content.section1.description}
      </p>
    </div>
  </section>
);

export default Section2;
