import AboutComponent from '../components/home/AboutComponent'
import ExperienceComponent from '../components/home/ExperienceComponent'
import Hero from '../components/home/Hero'
import ProjectsComponent from '../components/home/ProjectsComponent'
import SkillsComponent from '../components/home/SkillsComponent'

const Home = () => {
  return (
    <div>
        <Hero />
        <div className="h-20"></div>
        <ProjectsComponent />
        <div className="h-20"></div>
        <AboutComponent />
        <div className="h-20"></div>
        <SkillsComponent />
        <div className="h-20"></div>
        <ExperienceComponent />
        <div className="h-20"></div>
    </div>

  )
}

export default Home