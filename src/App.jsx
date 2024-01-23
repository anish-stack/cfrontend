
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header'
import PostPage from './Components/PostPage/PostPage';
import OtpPage from './Components/auth/OtpPage';
import Login from './Components/auth/Login';
import Contact from './Components/contact/Contact'
import JoinNow from './Components/Hero/JoinNow';
import SingleFeature from './Components/SInglefetaure/SingleFeature';
import { useEffect } from 'react';
import Faq from './Components/Footer/Faq';
import Testimonial from './Components/Testinomial/Testinomaial';
import Post from './Components/PostByRequirments/Post';
import Company from './Components/company/Company';
import Plan from './Components/Price/Plan'
import CompanyDetail from './Components/company/CompanyDetail';
import Buyers from './Components/Buyers/Buyers';
import CallBack from './Components/callBackForm/CallBack';
import Serach from './Components/SerachQuery/Serach';
import BuyerQuery from './Components/SerachQuery/BuyerQuery';
import CitySlider from './Components/CitySlider/CitySlider';
import Privacy from './Components/Policy/Privacy';
import About from './Components/about/About';

function App() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Post-Requirments" element={<PostPage />} />
        <Route path="/OtpValidate/:email" element={<OtpPage />} ></Route>
        <Route path="/Login" element={<Login />} ></Route>
        <Route path='/contact' element={<Contact/>} />
        <Route path='/faq' element= {<Faq/>} />
        <Route path="/JoinNow" element={<JoinNow />} ></Route>
        <Route path="/Product/:id" element={<SingleFeature />} ></Route>
        <Route path='/success' element={<Testimonial />} />
        <Route path='/post' element={<Post/>}/>
        <Route path='/Companies' element={<Company/>} />
        <Route path='/Plans' element={<Plan/>}/>
        <Route path='/Buyers' element={<Buyers/>} />
        <Route path='/Call-back' element={<CallBack/>} />
        <Route path="/searchproduct/:query" element={<Serach/>}/>
        <Route path="/BuyerSeacrhproduct/:query" element={<BuyerQuery/>}/>
        <Route path="/City" element={<CitySlider/>}/>
        <Route path="/privacy" element={<Privacy/>}/>
        <Route path="/about" element={<About/>}/>

        <Route
              path="/complete-details/:companyId"
              element={<CompanyDetail />}
            />

      </Routes>
      <Toaster />
      <Footer />
    </BrowserRouter>
  )
}

export default App
