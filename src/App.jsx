
import {Navbar} from "./MAIN COMPONENT/Navbar.jsx"
import {Hero} from "./MAIN COMPONENT/Hero.jsx"
import {Contact} from "./MAIN COMPONENT/Contact.jsx"
import {Education} from "./MAIN COMPONENT/Education.jsx"
import {Experience} from "./MAIN COMPONENT/Experience.jsx"
import {Footer} from "./MAIN COMPONENT/Footer.jsx"
import {Project} from "./MAIN COMPONENT/Project.jsx"
import {TechStack} from "./MAIN COMPONENT/TechStack.jsx"
function App() {
  

  return (
    <div className="min-h-screen bg-[#0B1120] text-[#F8FAFC] overflow-x-hidden">
      <Navbar />
      <Hero />
      <TechStack />
      <Experience />
      <Project />
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
