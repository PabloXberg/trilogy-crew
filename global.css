import { Navigate, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import DjPage from './pages/DjPage';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dj/:slug" element={<DjPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </>
  );
}
