import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx'
import Contact from './components/Contact.jsx';
import Menu from './components/Menu.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='min-h-screen flex flex-col'>
        <Header />
        <div className='flex-grow'>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/menu" element={<Menu />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
