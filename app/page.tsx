import '../styles/globals.css'
import Header from './Header'
import Hero from './Hero'
import About from './About'
import Experience from './Experience'
import Skills from './Skills'
import Projects from './Projects'

type Props = {}

export default function page({}: Props) {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory 
    overflow-scroll z-0 overflow-y-scroll overflow-x-hidden scrollbar-color-[rgb(36,36,36)]
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Header />
      <section id='hero' className='snap-start'>
        <Hero/>
      </section>

      <section id='about' className='snap-center'>    
        <About/>
      </section>

      <section id='experience' className='snap-center'>
        <Experience/>
      </section>

      <section id='skills' className='snap-start'>
        <Skills/>
      </section>

      <section id='projects' className='snap-center'>
        <Projects/>
      </section>
    </div>
  )
}