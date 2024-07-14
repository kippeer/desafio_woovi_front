import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Page2 from './pages/Page2';
import PaymentScreen from './components/PaymentScreen/PaymentScreen';
import Fim from './pages/Fim';
const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/page1/:valorParcelaId" element={<PaymentScreen />} />
      <Route path="/page2" element={<Page2 />} />
      <Route path="/fim" element={<Fim />} />
      
    </Routes>
  </Router>
);

export default App;
