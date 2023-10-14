import { Route, Routes, Outlet } from 'react-router-dom';
import { RegisterPage, LoginPage, LandingPage } from './pages';
import { Footer, NavBar } from './layout';

function Layout() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <NavBar />

      <main className="mb-auto w-10/12 max-w-4xl mx-auto">
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
