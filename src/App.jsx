import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavComponent from "./components/NavComponent";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import abt from "./assets/abstract2.png";
import Footer from './components/Footer';
import 'flowbite'
import CareerPage from './pages/CareerPage';
import Security from './pages/Security';

function App() {
 return (
   <Router>
     <div className='bg-primarygray min-h-screen relative font-lexend'>
       <img src={abt} alt="background design" className="absolute top-0 left-[-20px] z-10" />
       <div className="container mx-auto p-20">
         <NavComponent />
         <Routes>
           <Route path="/" element={<HomePage />} />
           <Route path="/about" element={<AboutPage />} />
           <Route path="/career" element={<CareerPage />} />
           <Route path='/security' element={<Security />} />
         </Routes>
         <Footer />
       </div>
     </div>
   </Router>
 );
}

export default App;
