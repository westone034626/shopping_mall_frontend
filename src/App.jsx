import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, Outlet, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RegisterPage, LoginPage, LandingPage, ProtectedPage, UploadProductPage, HistoryPage, CartPage, DetailProductPage } from './pages';
import { Footer, NavBar } from './layout';
import { authUser } from './store/thunkFunctions';
import { ProtectedRoutes, NotAuthRoutes } from './components';

function Layout() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <ToastContainer
        position='bottom-right'
        theme='light'
        pauseOnHover={true}
        autoClose={1500}
      />

      <NavBar />

      <main className="mb-auto w-10/12 max-w-4xl mx-auto">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.user?.isAuth);
  const { pathname } = useLocation();

  useEffect(() => {
    if (isAuth) {
      dispatch(authUser());
    }
  }, [dispatch, isAuth, pathname]);

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<LandingPage />} />

        <Route element={<ProtectedRoutes isAuth={isAuth} />}>
          <Route path="/protected" element={<ProtectedPage />} />
          <Route path="/product/upload" element={<UploadProductPage />} />
          <Route path="/product/:productId" element={<DetailProductPage />} />
          <Route path="/user/cart" element={<CartPage />} />
          <Route path="/history" element={<HistoryPage />} />
        </Route>

        <Route element={<NotAuthRoutes isAuth={isAuth} />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
