import Header from "./components/Header/Header";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AlbumList from "./components/AlbumList/AlbumList";
import CartProvider from "./store/CartProvider";
import AboutUs from "./components/About/AboutUs";
import ContactUs from "./components/Contact/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/store",
    element: <AlbumList />,
  },
  {
    path: "/contactus",
    element: <ContactUs />,
  },
]);
const App = () => {
  return (
    <CartProvider>
      <RouterProvider router={router} />
      {/* <AlbumList/> */}
    </CartProvider>
  );
};

export default App;
