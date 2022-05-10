import logo from './logo.svg';
import './App.css';
import Header from './components/common/Header/Header'
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Signup from './components/Register/Signup';
import Foooter from './components/common/Foooter/Foooter';
import Home from './components/Home/Home';
import Items from './components/Home/Items/Items';
import AddItems from './components/Add-new-item/AddItems';
import MyItems from './components/MyItems/MyItems';
import RequreAuth from './components/Add-new-item/Requreauth/Requreauth';
import ManageItems from './components/common/ManageItems/ManageItems';
import UpdateItems from './components/Updateitems/UpdateItems';
import Error from './components/Error/Error';

function App() {
  return (
    <div className="bg- ">

      <Header></Header>
      <Routes>

        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/manageitems' element={<RequreAuth><ManageItems></ManageItems></RequreAuth>}></Route>
        <Route path='/items' element={<Items></Items>}></Route>
        <Route path='/myitems' element={<RequreAuth><MyItems></MyItems></RequreAuth>}></Route>
        <Route path='/additems' element={<RequreAuth><AddItems></AddItems></RequreAuth>}></Route>
        <Route path='/book/:id' element={<RequreAuth><UpdateItems></UpdateItems></RequreAuth>}></Route>
        <Route path='/register' element={<Signup></Signup>}></Route>

        <Route path='*' element={<Error></Error>}></Route>
      </Routes>
      <Foooter></Foooter>

    </div>
  );
}

export default App;
