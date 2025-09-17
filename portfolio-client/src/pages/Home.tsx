import AboutComponent from '../components/home/AboutComponent'
import ExperienceComponent from '../components/home/ExperienceComponent'
import Hero from '../components/home/Hero'
import ProjectsComponent from '../components/home/ProjectsComponent'
import SkillsComponent from '../components/home/SkillsComponent'

const Home = () => {
  return (
    <div>
        <div className="fixed inset-0 z-10">
          <Hero />
        </div>
        <div className="relative z-20">
          <AboutComponent />
          <ProjectsComponent />
          <SkillsComponent />
          <ExperienceComponent />
        </div>
    </div>

  )
}

export default Home