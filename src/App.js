import  Header  from './components/Header/Header';
import './App.css';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import AlbumList from './components/AlbumList/AlbumList';
import Footer from './components/Header/Footer';
import CartProvider from './store/CartProvider';
import AboutUs from './components/About/AboutUs';

const router=createBrowserRouter([
  {path:'/',element:<Header/>},
  
    {path:'/about',element:<AboutUs/>},
  {path:'/store',element:<AlbumList/>}
  

]);
const App=()=> {

  return (
    <CartProvider>
      <RouterProvider router={router}/>
      {/* <AlbumList/> */}
      
      
      </CartProvider>
  );
}

export default App;
