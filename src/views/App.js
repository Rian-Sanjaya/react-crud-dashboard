import { Routes, Route } from 'react-router-dom';
import DefaultLayout from './layout/DefaultLayout';
import Komoditas from './Komoditas';
import User from './User';
import Login from './Login';

function App () {
  return (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Komoditas />} />
          <Route path="/user" element={<User />} />
        </Route>
        <Route  path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
