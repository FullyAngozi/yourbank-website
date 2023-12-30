import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavComponent from "./components/NavComponent";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import abt from "./assets/abstract2.png";
import Footer from './components/Footer';
import 'flowbite'

function App() {
 return (
   <Router>
     <div className='bg-primarygray min-h-screen relative'>
       <img src={abt} alt="background design" className="absolute top-0 left-[-20px] z-10" />
       <div className="container mx-auto p-10">
         <NavComponent />
         <Routes>
           <Route path="/" element={<HomePage />} />
           <Route path="/about" element={<AboutPage />} />
           <Route path="/contact" element={<ContactPage />} />
         </Routes>
         <Footer />
       </div>
     </div>
   </Router>
 );
}

export default App;
