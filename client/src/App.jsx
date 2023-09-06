import React from 'react';
import Navbar from './pages/components/Navbar';
import Footer from './pages/components/Footer';

const App = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default App;