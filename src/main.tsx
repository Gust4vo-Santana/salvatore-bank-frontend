import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './app/AppRoutes'
import TopBar from '../components/organisms/topBar/TopBar';
import GlobalStyle from './GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <Router>
      <TopBar logo="/salvatore.jpg"
        links={[
          { text: "Home", href: "/" }, 
          { text: "About us", href: "/" },
          { text: "Page 1", href: "/" },
          { text: "Page 2", href: "/" },
        ]} />
      <AppRoutes />
    </Router>
  </React.StrictMode>
)
