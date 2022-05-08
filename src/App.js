import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Share/Header/Header';
import Footer from './Share/Footer/Footer';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route element={<Home></Home>} path='/'></Route>
        <Route element={<Login></Login>} path='/login'></Route>
        <Route element={<Register></Register>} path='/register'></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
