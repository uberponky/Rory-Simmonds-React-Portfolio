import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <>
        <Navbar/>
        <Routes>
          <Route path="*" element={<Projects/>} />
          <Route path="/about/*" element={<About/>} />
          <Route path="/contact/*" element={<Contact/>} />
        </Routes>
        <Footer/>
      </>
    </Router>
  )
}

export default App
