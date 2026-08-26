// FILE: frontend/src/App.jsx
// MODIFIED: Added Header and Footer wrappers

import { Outlet } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

function App() {
  // Auth state will come from Redux in a future phase
  const isAuthenticated = false;
  const user = null;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 flex flex-col">
      <Header isAuthenticated={isAuthenticated} user={user} />
      
      <main className="flex-1 pt-16 sm:pt-20">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;