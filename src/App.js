import  Header  from './components/Header/Header';
import './App.css';
import AlbumList from './components/AlbumList/AlbumList';
import Footer from './components/Header/Footer';
import CartProvider from './store/CartProvider';

const App=()=> {

  return (
    <CartProvider>
      <Header/>
      <AlbumList/>
      <Footer/>
      
      </CartProvider>
  );
}

export default App;
