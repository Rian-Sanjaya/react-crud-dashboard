import { Routes, Route } from 'react-router-dom';
import DefaultLayout from './layout/DefaultLayout';
import Komoditas from './Komoditas';
import User from './User';

function App () {
  return (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Komoditas />} />
          <Route path="/user" element={<User />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
