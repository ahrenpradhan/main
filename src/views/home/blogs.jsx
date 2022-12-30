import { convert } from 'html-to-text';

import { Divider } from '../../components/common';
import work from '../../constants/work';
import useMedium from '../../hooks/useMedium';
// section 4 - blogs

const Blogs = () => {
  const [mediumBlogData] = useMedium();
  if (!mediumBlogData) return <div>Loading...</div>;
  const { feed, items, status } = mediumBlogData;
  return (
    <section className="container m-auto px-4 pt-4 pb-16" id="blogs">
      <Divider />
      <div className="min-w-full pb-8 text-center text-3xl font-bold tracking-wide">
        My Blogs
      </div>
      {status === 'ok' ? (
        <div className="min-w-full flex-wrap md:flex md:w-2/5 md:justify-around md:gap-4">
          {items.map((_, index) => (
            <a
              href={_.link}
              target="_blank"
              className="work-list-item mb-8 flex flex-col overflow-hidden rounded-xl border bg-white shadow hover:shadow-lg md:w-5/12 lg:max-w-md"
              key={_?.guid || index} rel="noreferrer"
            >
              <img
                src={
                  _?.thumbnail || `https://picsum.photos/400/200?random=${_.id}`
                }
                alt={_?.guid || 'random'}
                className="min-w-full object-cover "
                style={{ minHeight: 200, maxHeight: '50vh' }}
              />
              <div className="flex flex-1 flex-col justify-between px-8 pt-4">
                <div className="text-lg font-bold">
                  {_?.title || 'Loading...'}
                </div>
                <div className="mb-2 text-sm italic">
                  {_?.pubDate || 'Loading...'}
                </div>
                <div className="flex-1 break-words pb-2">
                  {convert(_?.description).slice(0, 200) || 'Loading'}...
                </div>
                {_?.tech ? (
                  <div className="flex flex-wrap gap-4 py-4 text-sm md:pt-4 md:pb-6">
                    {_?.tech.map(_tech => (
                      <div
                        key={_tech}
                        className="rounded-full border bg-zinc-100 px-2 tracking-wide shadow-sm hover:shadow"
                      >
                        {_tech}
                      </div>
                    ))}
                    {/* <span></span> */}
                  </div>
                ) : (
                  false
                )}

                {/* {(_?.tech || ['Loading...'])?.join(' | ')} */}
              </div>
            </a>
          ))}
        </div>
      ) : (
        <span>Failed to fetch the blogs</span>
      )}
    </section>
  );
};

export default Blogs;
