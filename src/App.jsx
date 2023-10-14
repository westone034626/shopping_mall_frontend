import './App.css';
import { Route, Routes, Outlet } from 'react-router-dom';
import { RegisterPage, LoginPage, LandingPage } from './pages';
import { Footer, NavBar } from './layout';

function Layout() {
  return (
    <div>
      <NavBar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<LandingPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}

export default App;
