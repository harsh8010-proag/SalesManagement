import React from 'react';
import Navbar from './componant/Navbar';
import Heropage from './pages/Heropage';
import Product from './pages/Product';
import Features from './pages/Features';
import DownloadApp from './componant/DownloadApp';
import SalesTools from './componant/SalesTools';
import Pricing from './pages/Pricing';
import Footer from './componant/Footer';
import GrowYourBusiness from './pages/GrowYourBusiness'
import TryFieldOps from './pages/TryFieldOps'

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
      <GrowYourBusiness />
      <TryFieldOps />
      <Footer />
    </div>
  );
};

export default App;
