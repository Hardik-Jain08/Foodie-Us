import './App.css'; import Body from './components/Body'; import Header from './components/Header';
import ErrorPage from './components/ErrorPage'; import ContactPage from './components/ContactPage';
import Cart from './components/Cart'; import About from './components/About';
import LoginPage from './components/LoginPage'; import { createBrowserRouter, Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import RestaurantMenu from './components/RestaurantMenu';

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export const appRouter = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '/',
          element: <Body />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/contact',
          element: <ContactPage />,
        },
        {
          path: '/cart',
          element: <Cart />,
        },
        {
          path: '/login',
          element: <LoginPage />,
        },
        {
          path: '/restaurant/:resId',
          element: <RestaurantMenu />,
        }
      ],
      errorElement: <ErrorPage />
}
]);

export default App;
