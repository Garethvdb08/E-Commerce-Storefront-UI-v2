import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import ComingSoon from './components/ComingSoon';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    // Listen for browser's back/forward navigation
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', onLocationChange);

    // Intercept local link clicks to prevent page reloads
    const handleLinkClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a');
      if (
        link &&
        link.origin === window.location.origin && // Internal link
        link.target !== '_blank' && // Not a new tab link
        !event.metaKey && // Not a command-click
        !event.ctrlKey // Not a control-click
      ) {
        event.preventDefault();
        if (link.pathname !== currentPath) {
          window.history.pushState({}, '', link.pathname);
          onLocationChange(); // Update state to trigger re-render
        }
      }
    };
    document.addEventListener('click', handleLinkClick);

    return () => {
      window.removeEventListener('popstate', onLocationChange);
      document.removeEventListener('click', handleLinkClick);
    };
  }, [currentPath]);

  const renderPage = () => {
    if (currentPath === '/coming-soon') {
      return <ComingSoon />;
    }
    // Default to home for "/" or any other unrecognized path
    return <Home />;
  };

  return (
    <div className="bg-white text-gray-800 flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;