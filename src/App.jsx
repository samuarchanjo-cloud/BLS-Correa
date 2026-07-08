import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Training from './components/Training'
import Documentation from './components/Documentation'
import FirePrevention from './components/FirePrevention'
import AboutContact from './components/AboutContact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Training />
        <Documentation />
        <FirePrevention />
        <AboutContact />
      </main>
      <Footer />
    </>
  )
}

export default App
