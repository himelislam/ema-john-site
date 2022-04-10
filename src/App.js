import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Orders from './components/Orders/Orders';
import Login from './components/Login/Login';
import Shop, { NameContext } from './components/Shop/Shop';
import Signup from './components/Signup/Signup';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Shippment from './components/Shippment/Shippment';



function App() {
  return (
    <div>
      <NameContext.Provider value='Himel Islam'>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Shop></Shop>}></Route>
          <Route path='/shop' element={<Shop></Shop>}></Route>
          <Route path='/orders' element={<Orders></Orders>}></Route>
          <Route path='/inventory' element={
            <RequireAuth>
              <Inventory></Inventory>
            </RequireAuth>
          }></Route>
          <Route path='/shippment' element={
            <RequireAuth>
              <Shippment></Shippment>
            </RequireAuth>
          }></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<Signup></Signup>}></Route>
        </Routes>
      </NameContext.Provider>
    </div>
  );
}

export default App;
