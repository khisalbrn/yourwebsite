import { useState } from 'react';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import EmergencyPage from './pages/EmergencyPage';
import ContentPage from './pages/ContentPage';
import type { CategoryKey } from './data/content';

type Page = 'login' | 'home' | 'emergency' | 'content';

export default function App() {
  const [page, setPage] = useState<Page>('login');
  const [category, setCategory] = useState<CategoryKey | null>(null);
  const [prevPage, setPrevPage] = useState<Page>('home');

  const goHome = () => {
    setCategory(null);
    setPage('home');
  };

  const handleHomeSelect = (key: CategoryKey | 'emergency') => {
    if (key === 'emergency') {
      setPrevPage('home');
      setPage('emergency');
    } else {
      setCategory(key);
      setPrevPage('home');
      setPage('content');
    }
  };

  const handleEmergencySelect = (key: CategoryKey) => {
    setCategory(key);
    setPrevPage('emergency');
    setPage('content');
  };

  const handleBack = () => {
    if (page === 'content') {
      if (prevPage === 'emergency') {
        setCategory(null);
        setPage('emergency');
      } else {
        goHome();
      }
    } else if (page === 'emergency') {
      goHome();
    }
  };

  return (
    <>
      {page === 'login' && <LoginPage onSuccess={() => setPage('home')} />}
      {page === 'home' && <HomePage onSelect={handleHomeSelect} />}
      {page === 'emergency' && (
        <EmergencyPage onSelect={handleEmergencySelect} onBack={goHome} />
      )}
      {page === 'content' && category && (
        <ContentPage
          key={category}
          category={category}
          onBack={handleBack}
          onHome={goHome}
        />
      )}
    </>
  );
}
