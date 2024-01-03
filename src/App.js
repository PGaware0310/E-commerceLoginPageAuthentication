import  Header  from './components/Header/Header';
import './App.css';
import AlbumList from './components/AlbumList/AlbumList';
import NavBar from './components/Header/NavBar';
import Footer from './components/Header/Footer';

const App=()=> {
  return (
    <>
   <NavBar/>
      <Header/>
      <AlbumList/>
      <Footer/>
      </>
  );
}

export default App;
