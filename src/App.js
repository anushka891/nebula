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
        {/* <HomeSection /> */}
        {/* <ServicesSection /> */}
        {/* <HealthCheck /> */}
         {/* <Vaccinations/> */}
      <DentalCare/>
        <Footer/> 
      </header>
    </div>
  );
}

export default App;
