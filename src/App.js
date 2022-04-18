import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Footer from './pages/shared/Footer/Footer';
import Header from './pages/shared/Header/Header';
// import notFound from './pages/notFound/notFound';
import NotFound from './pages/NotFound/Notfound';
import Register from './pages/Register/Register';
import About from './pages/About/About';
import ServiceDetails from './pages/ServiceDetails/ServiceDetails';
import RequireAuth from './pages/Login/RequireAuth/RequireAuth';
import Checkout from './pages/Checkout/Checkout';




function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/service/:ServiceId' element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }>

        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
