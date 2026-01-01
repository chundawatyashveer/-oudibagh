//import React from 'react';
//import logo from './logo.svg';
import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRouters from './Routes/Index';

import './assets/css/animate.css';
import './assets/css/bootstrap.css';
import './assets/css/custom-animate.css';
import './assets/css/font-awesome.css';
import './assets/css/global.css';
import './assets/css/jquery-ui.css';
import './assets/css/jquery.fancybox.min.css';
import './assets/css/responsive.css';
import './assets/css/simple-line-icons.css';
import './assets/css/style.css';
import './assets/css/swiper.css';
import 'wowjs/css/libs/animate.css';

function App() {
  useEffect(() => {
    // Initialize WOW.js for scroll animations
    // WOW.js is loaded via script tag in index.html, so it's available on window.WOW
    const initWOW = () => {
      let retries = 0;
      const maxRetries = 20; // Try for up to 2 seconds (20 * 100ms)
      
      const checkAndInit = () => {
        if (typeof window !== 'undefined' && window.WOW) {
          try {
            const wow = new window.WOW({
          boxClass: 'wow',
          animateClass: 'animated',
          offset: 0,
          mobile: true,
          live: false,
          scrollContainer: null,
          resetAnimation: true,
        });
        wow.init();
        return wow;
      } catch (error) {
            console.warn('WOW.js initialization error:', error);
          }
        } else if (retries < maxRetries) {
          retries++;
          setTimeout(checkAndInit, 100);
        } else {
          console.warn('WOW.js could not be loaded: window.WOW not available after retries');
        }
      };
      
      checkAndInit();
    };
    
    // Initialize after a short delay to ensure DOM and scripts are ready
    const timeoutId = setTimeout(initWOW, 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <AppRouters />
      </div>
    </BrowserRouter>
  );
}

export default App;