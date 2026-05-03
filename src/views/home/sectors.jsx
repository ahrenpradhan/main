import { Divider } from '@/Components/common';
import content from '@/Assets/ishu/content.json';

// section 3 - Sectors

const Sectors = () => (
  <section className="container m-auto px-4 py-16" id="key_sectors">
    <Divider />
    <div className="pb-8 text-center">
      <h2 className="text-3xl font-bold tracking-wide text-slate-900">
        {content.section3.title}
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600 sm:text-base">
        {content.section3.description}
      </p>
    </div>

    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {content.section3.content_list.map((item, index) => (
        <article
          key={item?.id || `sector-${index}`}
          className="rounded-[28px] border border-slate-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="text-lg font-semibold text-slate-900">
            {item}
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Sectors;
