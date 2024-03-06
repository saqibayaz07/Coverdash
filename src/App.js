
import './App.css';
import Businesses from './components/ExploreBusiness/Business';
import Simplified from './components/SmplifiedInsurance/Simplified';
import CarrierPartners from './components/CarrierPartners/CarrierPartners';
import BecomePartner from './components/BecomePartner/BecomePartner';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/Footer';
import Axhaji from './components/4/axhaji';
import Banner from './components/Banner/Banner';
import Steps from './components/Steps/Steps';
import Press from './components/Press/Press';
import Insure from './components/Insure/Insure';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Banner></Banner>
      <Press></Press>
      <Steps></Steps>
      <Insure></Insure>
      <Businesses />
      <Simplified></Simplified>
      <CarrierPartners></CarrierPartners>
      <BecomePartner></BecomePartner>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
