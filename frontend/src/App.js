import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './components/Checkout';
import GenerateQRCode from './components/GenerateQRCode';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <Navigation />

        {/* Main Application Routes */}
        <Routes>
          <Route path="/" element={<Checkout />} />
          <Route path="/generate" element={<GenerateQRCode />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;