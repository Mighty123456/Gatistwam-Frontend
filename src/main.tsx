import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Loading from './components/Loading';

// Lazy load the main App component
const App = lazy(() => import('./App.tsx'));

// Add preload hints for critical resources
const preloadCriticalResources = () => {
  // Remove the CSS preload as it's already imported directly
  // The CSS will be handled by Vite's build process
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