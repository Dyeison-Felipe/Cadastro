import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from '../pages/Register/register'
import Registration from '../pages/Registration/registration';
import Home from '../pages/Home/home';

function MyApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/register" element={<Register />} />
        <Route path='/registration' element={<Registration/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default MyApp;
