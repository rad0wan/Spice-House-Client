import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Share/Header/Header';
import Footer from './Share/Footer/Footer';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Inventory from './Pages/Inventory/Inventory';
import RequireAuth from './Share/RequireAuth/RequireAuth';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import AddNewItem from './Pages/AddNewItem/AddNewItem';
import MyItem from './Pages/MyItem/MyItem';
import Blogs from './Pages/Blogs/Blogs';
import NotFound from './Share/NotFound/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route element={<Home></Home>} path='/'></Route>
        <Route element={<Login></Login>} path='/login'></Route>
        <Route element={<Register></Register>} path='/register'></Route>
        <Route element={<Blogs></Blogs>} path='/blogs'></Route>
        <Route element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>} path='/inventory/:id'>
        </Route>
        <Route element={
          <RequireAuth>
            <ManageInventory></ManageInventory>
          </RequireAuth>} path='/manageInventory'>
        </Route>
        <Route element={
          <RequireAuth>
            <AddNewItem></AddNewItem>
          </RequireAuth>} path='/addNewItem'>
        </Route>
        <Route element={
          <RequireAuth>
            <MyItem></MyItem>
          </RequireAuth>} path='/myItem'>
        </Route>
        <Route element={<NotFound></NotFound>} path='*'></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
