// App.js
import './App.css';
import Navbar from './components/common/Navbar';
import Sidebar from './components/common/Sidebar';
import { useState } from 'react';
import HomeSection from './components/pages/home/HomeSection';
import Footer from './components/common/Footer';
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
import Lacer from "./components/pages/home/Laser"
import Laser from './components/pages/home/Laser';
import Hospice from './components/pages/home/Hospice';
import HeroDigno from './components/Dignostics/HeroDigno';
import Dignostics from './components/pages/home/Dignostics';
import Washington from './components/pages/home/Washington';
import JoinPage from './components/pages/home/JoinPage';
import AboutNebula from './components/pages/home/AboutNebula';
 function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="App">
      <header>
        <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={toggleSidebar} />
        <Navbar setIsSidebarOpen={toggleSidebar} />
        <HomeSection />
        {/* <ServicesSection /> */}
        {/* <HealthCheck /> */}
         {/* <Vaccinations/> */}
        {/* <DentalCare/> */}
        {/* <Emergency/> */}
        {/* <Medinice/> */}
        {/* <Pharmecy/> */}
        {/* <Surgery/> */}
        {/* <SpraySection/> */}
         {/* <Travel/> */}
        {/* <Skin/>  */}
        {/* <MicroChipping/> */}
        {/* <Laser/> */}
        {/* <Hospice/> */}
        {/* <Dignostics/> */}
        {/* <Washington/> */}
        {/* <JoinPage/> */}
        {/* <AboutNebula/> */}
        <Footer/> 
      </header>
    </div>
  );
}

export default App;
