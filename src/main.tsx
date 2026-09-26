import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import backgroundImage from '@/assets/background/hero image.png';

document.documentElement.style.setProperty('--site-background-image', `url("${backgroundImage}")`);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
