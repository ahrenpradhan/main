import logo from './assets/images/logo.svg';
import NavBar from './components/navbar';

function App() {
  return (
    <div className="color min-h-screen bg-zinc-50">
      <NavBar />
      {/* section 1 - intro */}
      <section className="container p-8 text-center">
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
      <section className="container p-4">
        <div className="pb-4 text-center text-2xl font-bold tracking-wider">
          My Work
        </div>
        {[1, 2, 3, 4].map((_, index) => (
          <div
            className="container mb-4 overflow-hidden rounded border bg-white"
            key={_}
          >
            <img
              src="https://picsum.photos/300/200"
              alt="random"
              className="min-w-full"
            />
            <div className="py-4 px-8">
              <div className="text-lg font-bold">Tehnofeet - Ecommerce</div>
              <div className="mb-2 text-sm italic">Teknofeet</div>
              <div className="pb-2">
                Created an eCommerce portal where we provided recommendation of
                products using customer biometrics of ankles and feet.
              </div>
              <div className="text-sm ">
                NEXTJS | GraphQl | Atomic Design | Vercel
              </div>
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
