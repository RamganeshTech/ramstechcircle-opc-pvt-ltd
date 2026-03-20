import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ScrollToTop from './components/ScrollToTop'

import Header from './components/Header'
import Footer from './components/Footer'
import { lazy } from 'react'

const About = lazy(()=> import('./pages/About')); 
const Services = lazy(()=> import('./pages/Services')); 
const Contact = lazy(()=> import('./pages/Contact')); 
const PrivacyPolicy = lazy(()=> import('./pages/PrivacyPolicy')); 
const NotFound = lazy(()=> import('./pages/NotFound')); 
const TermsOfUse = lazy(()=> import('./pages/TermsOfUse')); 
const CookiePolicy = lazy(()=> import('./pages/CookiePolicy')); 
const CorporateCredentials = lazy(()=> import('./pages/CorporateCredentials')); 
const Support = lazy(()=> import('./pages/Support')); 
const DataDeletion = lazy(()=> import('./pages/DataDeletion')); 
const Careers = lazy(()=> import('./pages/Career')); 
const Disclaimer = lazy(()=> import('./pages/Disclaimer')); 
const AppPrivacy = lazy(()=> import('./pages/AppPrivacy')); 
const RefundPolicy = lazy(()=> import('./pages/RefundPolicy')); 
const HRSection = lazy(()=> import('./pages/HRSection')); 

function App() {

  return (

    <>
      <ScrollToTop /> {/* 2. Add it here */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        {/* Legal & Compliance (Required for DUNS/Meta) */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />

        {/* Business & Support (Required for App Stores) */}
        <Route path="/corporate-credentials" element={<CorporateCredentials />} />
        <Route path="/support" element={<Support />} />
        <Route path="/data-deletion" element={<DataDeletion />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/app-privacy" element={<AppPrivacy />} />
        <Route path="/refund-cancellation-policy" element={<RefundPolicy />} />
        <Route path="/hr-section" element={<HRSection />} />
        <Route path="/career" element={<Careers   />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App


