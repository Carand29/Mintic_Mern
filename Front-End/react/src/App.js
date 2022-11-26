import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

//importamos los comp creados
import About from './components/about';
import Contact from './components/contact';
import NavBarExample from './layouts/navbar';
import Login from './components/login';
import Register from './components/Register';
import Welcome from './components/Welcome';
import ListProduct from './components/listProduct';
import CompShowProducts from './Product/ShowProducts';
import CompCreateProducts from './Product/CreateProduct';
import CompEditProducts from './Product/EditProduct';
import CompShowStore from './store/ShowStore';
import CompShowBuy from './store/ShowBuy';

function App() {
  return (
    <div className="App">

<BrowserRouter>
<Routes>
  <Route path='/' element={ <NavBarExample /> }>
    <Route index element={ <Register /> } />
    <Route path='/about' element={ <About /> } />
    <Route path='/contact' element={ <Contact /> } />
    <Route path='/login' element={ <Login /> } />
    <Route path="/Welcome" element={ <Welcome /> } />
    <Route path='/ListProduct' element={ <ListProduct /> } />
    <Route path='/view' element={<CompShowProducts/>}/>
    <Route path='/create' element={<CompCreateProducts/>}/>
    <Route path='*' element={ <Navigate replace to="/"/> }/>
    <Route path='/edit/:id' element={<CompEditProducts/>}/>
    <Route path='/store' element={<CompShowStore/>}/>
    <Route path='/buy' element={<CompShowBuy/>}/>
  </Route>
</Routes> 
</BrowserRouter>

    </div>
  );
}

export default App;
