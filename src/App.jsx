import { AboutMe } from "./components/AboutMe"
import { DefaultTemplate } from "./components/DefaultTemplate"
import { ProjectSection } from "./components/ProjectList"
import { TechSection } from "./components/TechSection"
import { Banner } from "./components/banner"
import { technologies } from "./data/technologies"
import "./styles/index.css"


function App() {
  return (
    <DefaultTemplate>
      <Banner/>
      <AboutMe/>
      <TechSection name= {technologies[1].name} img = {technologies[1].img} /> 
      <ProjectSection/>
    </DefaultTemplate>
  )
}

export default App
