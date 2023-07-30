import { Routes, Route } from 'react-router-dom';
import { PublicRoute, ProtectedRoute } from '../helper/authFunctions';
import DefaultLayout from './layout/DefaultLayout';
import Komoditas from './Komoditas';
import User from './User';
import Login from './Login';

function App () {
  return (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Komoditas />} />
            <Route path="/user" element={<User />} />
          </Route>
        </Route>
        <Route  path="/login" element={<PublicRoute><Login /></PublicRoute>} />
      </Routes>
    </>
  );
}

export default App;
