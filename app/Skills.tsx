"use client"
import {motion} from 'framer-motion'
import Skill from '../components/Skill'

type Props = {
  datoSkills: Skill[]
}

export default function skills({datoSkills}: Props) {
  //console.log(datoSkills)
  return (
    <motion.div 
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="flex flex-col relative h-screen text-center
        md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto
        items-center"
    >
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Skills</h3>

        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
            Hover over a skill for currency profieciency
        </h3>

        <div className='grid grid-cols-4 gap-5 mt-48'>
          {
            datoSkills.map((skill) => (
              <Skill key={skill._id} skill={skill}/>
            ))
          }
        </div>
    </motion.div> 
  )
}