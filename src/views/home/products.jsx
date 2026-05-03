import { Divider } from '@/Components/common';
import content from '@/Assets/ishu/content.json';
import solderedBricks from '@/Assets/ishu/soldered_bricks.png';
import solderedRods from '@/Assets/ishu/soldered_rods.jpg';
import solderedWire from '@/Assets/ishu/soldered_wire.jpg';

const imageMap = {
  'soldered_wire.jpg': solderedWire,
  'soldered_rods.jpg': solderedRods,
  'soldered_bricks.png': solderedBricks,
};

// section 2 - Products

const Products = () => (
  <section className="container m-auto px-4 pt-4 pb-16" id="projects">
    <Divider />
    <div className="min-w-full pb-8 text-center text-3xl font-bold tracking-wide">
      {content.section2.title}
    </div>
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {content.section2.content_list.map((item, index) => (
        <article
          className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
          key={item.id ?? index}
        >
          <div className="relative overflow-hidden bg-slate-100">
            <img
              src={imageMap[item.image]}
              alt={item.title}
              className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
          <div className="space-y-3 p-6 text-center">
            <h3 className="text-xl font-semibold tracking-tight text-slate-900">
              {item.title}
            </h3>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Products;
