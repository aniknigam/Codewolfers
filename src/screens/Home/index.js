// import React from 'react'
// import Navbar from '../../components/Navbar'
// import Slides from './components/Slides'
// import Introduction from './components/Introduction'
// import Services from './components/Services'
// import WorkFlow from './components/WorkFlow'
// import MissionVision from './components/MissionVision'
// import OurTeam from './components/OurTeam'
// import Footer from '../../components/Footer'



// const Home = () => {
//   return (
//     <div>
//         <Navbar/>
//         <Slides/>
//         <Introduction/>
//         <Services/>
//         <OurTeam/>
//         <WorkFlow/>
//         <MissionVision/>
//         <Footer/>
//     </div>
//   )
// }

// export default Home


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
  // const workflowRef = useRef(null);
  const missionVisionRef = useRef(null);

  const scrollToSection = (section) => {
    if (section === 'introduction') {
      introRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'services') {
      servicesRef.current.scrollIntoView({ behavior: 'smooth' });
    } 
    // else if (section === 'ourTeam') {
    //   teamRef.current.scrollIntoView({ behavior: 'smooth' });
    // } 
    else if (section === '/') {
      homeRef.current.scrollIntoView({ behavior: 'smooth' });
    } 
    else if (section === 'missionVision') {
      missionVisionRef.current.scrollIntoView({ behavior: 'smooth' });
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
      <Footer scrollToSection={scrollToSection}/>
    </div>
  );
};

export default Home;
