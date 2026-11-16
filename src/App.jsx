import React from 'react';
import Navbar from './componant/Navbar';
import Heropage from './pages/Heropage';
import Product from './pages/Product';
import Features from './pages/Features';
import DownloadApp from './componant/DownloadApp';
import SalesTools from './componant/SalesTools';
import Pricing from './pages/Pricing';

const App = () => {
  return (
    <div className="min-h-screen bg-[#FAFBFD] overflow-x-hidden">
      <Navbar />
      <Heropage />
      <Product />
      <Features />
      <DownloadApp />
      <SalesTools />
      <Pricing />
    </div>
  );
};

export default App;
