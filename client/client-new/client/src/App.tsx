import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/common/navbar.tsx'
import Footer from './components/common/footer.tsx'
import HomePage from './pages/homepage.tsx'
import AboutPage from './pages/aboutpage.tsx'
import ProjectsPage from './pages/projectspage.tsx'
import BlogPage from './pages/blogpage.tsx'
import ContactPage from './pages/contactpage.tsx'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        {/* Common Navigation Bar */}
        <NavBar />

        {/* Main Content Area */}
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        {/* Common Footer */}
        <Footer />
      </div>
    </Router>
  )
}

export default App
