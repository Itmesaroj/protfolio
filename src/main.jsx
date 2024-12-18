import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ThemeToggleProvider } from './Context/themeContext.jsx';
import { ChakraProvider } from '@chakra-ui/react';

createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <ThemeToggleProvider>
      <App />
    </ThemeToggleProvider>
  </ChakraProvider>
);