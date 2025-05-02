import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import TermsAndConditions from './components/TermsAndConditions';
import PrivacyPolicy from './components/PrivacyPolicy';
import HeroSection from './components/Hero';
import PremiereServices from './components/PremiereServices';
import HeroSection2 from './components/Hero2';
import HeroSection3 from './components/Hero3';
import List1 from './components/List1';
import List2 from './components/List2';
import Testimonial from './components/Testimonial';
import TexasTrashCanLogo from './components/TexasTrashCanLogo';
import TexasTrashCanLogo2 from './components/TexasTrashCanLogo2';
import TexasTrashCanHero from './components/TexasTrashCanHero';
import TexasTrashCanFlyer1 from './components/TexasTrashCanFlier1';
import TexasTrashCanFlyer2 from './components/TexasTrashCanFlier2';
import TexasTrashCanFlyer3 from './components/TexasTrashCanFlier3';
import PricingSection from './components/PricingSection';


function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path= '/termsandconditions' element={<TermsAndConditions/>}/>
      <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
      <Route path='/hero' element={<HeroSection/>}/>
      <Route path='/hero2' element={<HeroSection2/>}/>
      <Route path='/hero3' element={<HeroSection3/>}/>
      <Route path='/premiereservices' element={<PremiereServices/>}/>
      <Route path='/list1' element={<List1/>}/>
      <Route path='/list2' element={<List2/>}/>
      <Route path='/testimonial' element={<Testimonial/>}/>
      <Route path='/texastrashcanlogo' element={<TexasTrashCanLogo/>}/>
      <Route path='/texastrashcanlogo2' element={<TexasTrashCanLogo2/>}/>
      <Route path='/texastrashcanhero' element = {<TexasTrashCanHero/>}/>
      <Route path='/texastrashcanflier1' element={<TexasTrashCanFlyer1/>}/>
      <Route path='/texastrashcanflier2' element={<TexasTrashCanFlyer2/>}/>
      <Route path='/texastrashcanflier3' element={<TexasTrashCanFlyer3/>}/>
      <Route path='/pricingsection' element={<PricingSection/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
