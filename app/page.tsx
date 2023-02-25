import '../styles/globals.css'
import {groq} from 'next-sanity'
import Header from './Header'
import Hero from './Hero'
import About from './About'
import Experience from './Experience'
import Skills from './Skills'
import Projects from './Projects'
import { client } from '../lib/sanity.client'

const query = groq`*[_type == "socials"]`
const perfil = groq`*[_type == "perfilInfo"][0]`
const exp = groq`*[_type == "experience"]{
  ...,
  tecnologies[]->,
}| order(dateEnded desc)`
const skill = groq`*[_type == "skills"]`

export default async function page() {

  const socials = await client.fetch(query)
  const datosPerfil = await client.fetch(perfil)
  const experience = await client.fetch(exp)
  const skills = await client.fetch(skill)

  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory 
    overflow-scroll z-0 overflow-y-scroll overflow-x-hidden scrollbar-color-[rgb(36,36,36)]
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>

      <Header socials={socials} />
      <section id='hero' className='snap-start'>
        <Hero/>
      </section>

      <section id='about' className='snap-center'>    
        <About datos={datosPerfil} />
      </section>

      <section id='experience' className='snap-center'>
        <Experience datosExp={experience}/>
      </section>

      <section id='skills' className='snap-start'>
        <Skills datoSkills={skills}/>
      </section>

      <section id='projects' className='snap-center'>
        <Projects/>
      </section>
    </div>
  )
}
