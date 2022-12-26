import logo from './assets/images/logo.svg';
import NavBar from './components/navbar';
import work from './constants/work';

function App() {
  return (
    <div className="color min-h-screen bg-zinc-50">
      <NavBar />
      {/* section 1 - intro */}
      <section className="mb-8 p-8 text-center">
        <div className="pt-2 pb-6 text-lg tracking-wide">Hey there !!</div>
        <div className="pb-8 text-3xl font-bold tracking-wider">
          Ahren Pradhan,
          <br /> WEB Developer, <br /> Tech Lead
        </div>
        <div className="text-lg tracking-wider">
          This is Ahren, feel free to contact me for help and opportunities
        </div>
      </section>
      {/* section 2 - work */}
      <section className="flex-wrap p-4 md:flex md:justify-around md:gap-4">
        <div className="min-w-full pb-8 text-center text-3xl font-bold tracking-wide">
          My Work
        </div>
        {work.map(_ => (
          <div
            className="mb-8 flex flex-col overflow-hidden rounded-xl border bg-white shadow hover:shadow-lg md:w-2/5"
            key={_.id}
          >
            <img
              src={`https://picsum.photos/400/200?random=${_.id}`}
              alt="random"
              className="min-w-full object-cover "
              style={{ minHeight: 200 }}
            />
            <div className="flex flex-1 flex-col justify-between pt-4 px-8">
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
                <div className="flex flex-wrap gap-4 py-4 md:pt-4 md:pb-6 text-sm">
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
