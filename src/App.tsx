import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import NotFound from './pages/NotFound'
import TermsOfUse from './pages/TermsOfUse'
import CookiePolicy from './pages/CookiePolicy'
import CorporateCredentials from './pages/CorporateCredentials'
import Support from './pages/Support'
import DataDeletion from './pages/DataDeletion'
import Careers from './pages/Career'

function App() {

  return (

    <>
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
          <Route path="/career" element={<Careers />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App


