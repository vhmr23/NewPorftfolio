"use client"
import {motion} from 'framer-motion'

type Props = {}

function Projects({}: Props) {
    const projects = [1,2,3,4,5]
  return (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col relative h-screen text-center
        md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto
        items-center"
    >
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            Projects
        </h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x 
        snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
        {projects.map((project, i) => (
            <div key={i} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5
            items-center justify-center p-20 md:p-44 h-screen'>
                <motion.img
                    initial={{ y: -300, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: true }}
                    className='w-40 h-40 md:w-60 md:h-60 rounded-full object-cover' 
                    src="/personal.png" 
                    alt="project" 
                />

                <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                    <h4 className='text-4xl font-semibold text-center'>
                        <span className='underline decoration-[#F7AB0A]/40'>
                            Case Study {i+1} of {projects.length}:
                        </span> UPS clone
                    </h4>

                    <p className='text-lg text-center md:text-left'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod.
                        Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod.
                        Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod.
                    </p>
                </div>
            </div>
        ))}
        </div>

        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/20 left-0 h-[500px] -skew-y-12'></div>
    </motion.div>
  )
}

export default Projects