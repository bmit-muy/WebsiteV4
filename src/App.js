import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/home';
import KnowHow from './pages/know_how';
import AboutMe from './pages/about_me';
import Projects from './pages/projects'
import ContactPage from './pages/contact_page' 
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navigation />
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/aboutme' element={<AboutMe />} />
          <Route path='/KnowHow' element={ <KnowHow />} />
          <Route path='/Projects' element={ <Projects />} />
          <Route path='/Contact' element={ <ContactPage/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
