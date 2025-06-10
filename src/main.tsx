import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import Loading from './components/Loading';
import './styles/index.css';

// Lazy load the main App component
const App = lazy(() => import('./App.tsx'));

// Add preload hints for critical resources
const preloadCriticalResources = () => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'style';
  link.href = '/styles/index.css';
  document.head.appendChild(link);
};

// Initialize preload hints
preloadCriticalResources();

// Render with Suspense for better loading experience
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  </StrictMode>
);