// import { Link } from "react-router-dom"
// import { Button } from "react-bootstrap"
import '../styles/landingPage.css';
import Header from "../components/landingPage/Header";
import { useMediaQuery } from 'react-responsive';
import HeroSection from '../components/landingPage/HeroSection'
import ServiceSection from '../components/landingPage/ServiceSection'
import WhyUsSection from '../components/landingPage/WhyUsSection'
import TestimonialSection from '../components/landingPage/TestimonialSection'
import GettingStarted from '../components/landingPage/GettingStarted';
import FAQSection from '../components/landingPage/FAQSection';
import Footer from '../components/landingPage/Footer';


const Home = () => {

  const isDesktop = useMediaQuery({ minWidth: 1200 });

  return (
    <>
      <Header />
      <HeroSection />
      <ServiceSection />
      <WhyUsSection />
      {isDesktop && <TestimonialSection />}
      <GettingStarted />
      <FAQSection />
      <Footer />
    </>
  )
}


// const Home = () => {
//   return (
//     <div>
//       <Header />
//       <h2>Home Page</h2>
//       <Button variant="warning">
        
//         <Link to="/dashboard" className="white">Login</Link>
//       </Button>
//     </div>
//   )
// }

export default Home
