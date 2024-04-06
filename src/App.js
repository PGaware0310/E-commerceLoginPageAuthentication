import Header from "./components/Header/Header";
import "./App.css";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import AlbumList from "./components/AlbumList/AlbumList";
import CartProvider from "./store/CartProvider";
import AboutUs from "./components/About/AboutUs";
import ContactUs from "./components/Contact/ContactUs";
import AlbumDetails from "./components/AlbumList/AlbumDetails";


const App = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" exact element={<Header />}/>
          <Route path="/about"  element={<AboutUs />}/>
          <Route path="/store"  element={<AlbumList />}/>
          <Route path="/contactus"  element={<ContactUs/>}/>
          <Route path="/store/:productId"  element={<AlbumDetails/>}/>
          </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
