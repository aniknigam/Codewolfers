import React, { useRef } from 'react';
import Navbar from '../../components/Navbar';
import Slides from './components/Slides';
import Introduction from './components/Introduction';
import Services from './components/Services';
import WorkFlow from './components/WorkFlow';
import MissionVision from './components/MissionVision';
import OurTeam from './components/OurTeam';
import Footer from '../../components/Footer';

const Home = () => {
  const introRef = useRef(null);
  const servicesRef = useRef(null);
  const homeRef = useRef(null);
  const missionVisionRef = useRef(null);

  const scrollToSection = (section) => {
    const navbarHeight = document.querySelector('nav').offsetHeight;
    let sectionRef;

    switch (section) {
      case 'introduction':
        sectionRef = introRef;
        break;
      case 'services':
        sectionRef = servicesRef;
        break;
      case 'missionVision':
        sectionRef = missionVisionRef;
        break;
      case '/':
        sectionRef = homeRef;
        break;
      default:
        return;
    }

    if (sectionRef.current) {
      window.scrollTo({
        top: sectionRef.current.offsetTop - navbarHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div>
      <Navbar scrollToSection={scrollToSection} />
      <div ref={homeRef}><Slides /></div>
      <div ref={introRef}><Introduction /></div>
      <div ref={servicesRef}><Services /></div>
      <div><OurTeam /></div>
      <div><WorkFlow /></div>
      <div ref={missionVisionRef}><MissionVision /></div>
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default Home;
