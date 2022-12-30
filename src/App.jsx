import { Routes, Route } from 'react-router-dom';

import Layout from './components/layout';
import Home from './views/home';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
    </Route>
    {/* <Route render={() => <Redirect to="/" />} /> */}
  </Routes>
);

export default App;
