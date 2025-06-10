import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Loading from './components/Loading';

// Lazy load the main App component
const App = lazy(() => import('./App.tsx'));

// Render with Suspense for better loading experience
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  </StrictMode>
);