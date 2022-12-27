import logo from './assets/images/logo.svg';
import profileImage from './assets/images/profile.jpeg';
import Divider from './components/divider';
import NavBar from './components/navbar';
import work from './constants/work';

function App() {
  return (
    <div className="color min-h-screen bg-zinc-50">
      <NavBar />
      {/* section 1 - intro */}
      <section className="md:text-left container m-auto mb-8 flex min-h-screen flex-col justify-center p-8 text-center md:flex-row md:justify-evenly">
        <div className="self-center">
          <div className="pt-2 pb-6 text-lg tracking-wide">Hey there !!</div>
          <div className="pb-8 text-3xl font-bold tracking-wider">
            Ahren Pradhan,
            <br /> WEB Developer, <br /> Tech Lead
          </div>
          <div className="pb-10 text-lg tracking-wider">
            This is Ahren, feel free to contact me for help and opportunities
          </div>
        </div>
        <div className="self-center">
          <img
            src={profileImage}
            className="m-auto w-1/2 rounded-full md:w-2/3"
            alt="logo"
          />
        </div>
      </section>
      {/* section 2 - work */}
      <section className="container m-auto p-4">
        <Divider />
        <div className="min-w-full pb-8 text-center text-3xl font-bold tracking-wide">
          My Work
        </div>
        <div className="min-w-full flex-wrap md:flex md:w-2/5 md:justify-around md:gap-4">
          {work.map(_ => (
            <div
              className="work-list-item mb-8 flex flex-col overflow-hidden rounded-xl border bg-white shadow hover:shadow-lg md:w-2/5 first:md:min-w-full"
              key={_.id}
            >
              <img
                src={`https://picsum.photos/400/200?random=${_.id}`}
                alt="random"
                className="min-w-full object-cover "
                style={{ minHeight: 200 }}
              />
              <div className="flex flex-1 flex-col justify-between px-8 pt-4">
                <div className="text-lg font-bold">
                  {_?.title || 'Loading...'}
                </div>
                <div className="mb-2 text-sm italic">
                  {_?.company || 'Loading...'}
                </div>
                <div className="flex-1 pb-2">
                  {_?.description || 'Loading...'}
                </div>
                {_?.tech ? (
                  <div className="flex flex-wrap gap-4 py-4 text-sm md:pt-4 md:pb-6">
                    {_?.tech.map(_ => (
                      <div className="rounded-full border bg-zinc-100 px-2 tracking-wide shadow-sm hover:shadow">
                        {_}
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

      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <p className="header">Vite React Starter 💯</p>
        <p>
          Vite + React <br />
          ESLint + Prettier + Stylelint
          <br />
          Sass + Emotion + Tailwind
          <br />
          Jest + Testing Library
        </p>
      </header>
    </div>
  );
}

export default App;
