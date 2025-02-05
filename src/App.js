// App.js
import React, { useEffect } from "react";
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';  
import HomeSection from './components/pages/home/HomeSection';
import ServicesSection from "./components/pages/home/ServicesSection"
import HealthCheck from './components/pages/home/HealthCheck';
import Vaccinations from "./components/pages/home/Vaccinations"
import DentalCare from "./components/pages/home/DentalCare"
import Emergency from './components/pages/home/Emergency';
import Medinice from './components/pages/home/Medinice';
import Pharmecy from './components/pages/home/Pharmecy';
import Surgery from './components/pages/home/Surgery';
import SpraySection from './components/pages/home/SpraySection';
import Travel from './components/pages/home/Travel';
 import Skin from "./components/pages/home/Skin"
import MicroChipping from './components/pages/home/MicroChipping';
import Laser from './components/pages/home/Laser';
import Hospice from './components/pages/home/Hospice';
import Dignostics from './components/pages/home/Dignostics';
import Washington from './components/pages/home/Washington';
import JoinPage from './components/pages/home/JoinPage';
import AboutNebula from './components/pages/home/AboutNebula';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
function App() {
    useEffect(() => {
    AOS.init({
      once: true,  
    });
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
        <Routes>
        <Route path='/' element={<HomeSection />} />
        <Route path='/service' element={<ServicesSection />} />
        <Route path='/health-check' element={<HealthCheck />} />
            <Route path='/vaccination' element={<Vaccinations/>} />
            <Route path='/dental' element={<DentalCare/> } />
            <Route path='/emergency' element={<Emergency />} />
            <Route path='/medicine' element={ <Medinice/> } />
            <Route path='/pharmecy' element={ <Pharmecy/>} />
            <Route path='/surgery' element={<Surgery />} />
            <Route path='/spray' element={ <SpraySection/>} />
            <Route path='/travel' element={ <Travel/> } />
            <Route path='/skin' element={<Skin />} />
            <Route path='/micro' element={ <MicroChipping/>} />
            <Route path='/laser' element={ <Laser/>} />
            <Route path='/hospice' element={<Hospice />} />
            <Route path='/digno' element={ <Dignostics/>} />
            <Route path='/washing' element={<Washington />} />
            <Route path='/join' element={<JoinPage />} />
            <Route path='/about' element={  <AboutNebula/>} />
          </Routes>
        </Layout>
      </BrowserRouter>
      
      
      
    </div>
  );
}

export default App;
