"use client"
import {motion} from 'framer-motion'
import ExperienceCard from '../components/ExperienceCard'

type Props = {
  datosExp: Experience[]
}

function Experience({datosExp}: Props) {
  return (
    <motion.div 
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="flex flex-col relative h-screen text-center
        md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto
        items-center"
    >
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Expeience</h3> 
        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory pt-24
        scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
           {datosExp.map((exp) => (
              <ExperienceCard key={exp._id} experience={exp}/>
           ))}
        </div>
    </motion.div>
  )
}

export default Experience