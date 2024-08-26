import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './app/AppRoutes'
import { createGlobalStyle } from 'styled-components';
import TopBar from '../components/organisms/topBar/TopBar';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: linear-gradient(45deg, #1C1C1E, #121212);
    color: #E0E0E0;
    font-family: Arial, sans-serif;
  }
`;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <Router>
      <TopBar logo="/salvatore.jpg"
        links={[
          { text: "Home", href: "/" }, 
          { text: "salve", href: "/PaginaFodase" },
          { text: "App", href: "/" },
          { text: "App", href: "/" },
        ]} />
      <AppRoutes />
    </Router>
  </React.StrictMode>
)
