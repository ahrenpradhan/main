import { Divider } from '@/Components/common';
import projects from '@/Constants/projects';

// section 2 - projects

const Projects = () => (
  <section className="container m-auto px-4 pt-4 pb-16" id="projects">
    <Divider />
    <div className="min-w-full pb-8 text-center text-3xl font-bold tracking-wide">
      Important Projects till date
    </div>
    <div className="min-w-full flex-wrap md:flex md:w-2/5 md:justify-around md:gap-4">
      {projects.map(_ => (
        <div
          className="mb-8 flex flex-col overflow-hidden rounded-xl border bg-white shadow hover:shadow-lg md:w-5/12 first:md:min-w-full  lg:max-w-md"
          key={_.id}
        >
          <img
            src={`https://picsum.photos/400/200?random=${_.id}`}
            alt="random"
            className="min-w-full object-cover "
            style={{ minHeight: 200, maxHeight: '50vh' }}
          />
          <div className="flex flex-1 flex-col justify-between px-8 pt-4">
            <div className="text-lg font-bold">{_?.title || 'Loading...'}</div>
            <div className="mb-2 text-sm italic">
              {_?.company || 'Loading...'}
            </div>
            <div className="flex-1 pb-2">{_?.description || 'Loading...'}</div>
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
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
