import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from '@/Components/layout/index';
import useFirebase from '@/Hooks/firebase';
import Home from '@/Views/home';

const App = () => {
  useFirebase();
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default App;
