import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import Background from './componenets/Background';
import { BrowserRouter as Router } from 'react-router-dom';
import Aos from 'aos';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'jquery/dist/jquery.min.js';
import 'jquery/dist/jquery.js';
import 'aos/dist/aos.css';
import 'aos/dist/aos.js';
import 'font-awesome/css/font-awesome.min.css';
import 'font-awesome/css/font-awesome.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
Aos.init();

const root = createRoot(document.getElementById('root'));

root.render(
  <>
    <Background />
    <Router>
      <App />
    </Router>
  </>
);

// Reload the app when the screen size changes
window.addEventListener('resize', () => {
  window.location.reload();
});
