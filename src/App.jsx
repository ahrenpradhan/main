import { Routes, Route } from 'react-router-dom';

import Layout from '@/Components/layout/index';
import useFirebase from '@/Hooks/firebase';
import Home from '@/Views/home';

const App = () => {
  useFirebase();
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      {/* <Route render={() => <Redirect to="/" />} /> */}
    </Routes>
  );
};

export default App;
