"use client"
import {motion} from 'framer-motion'

type Props = {
    directionLeft?: boolean
}

function Skill({directionLeft}: Props) {
  return (
    <div className='group realitive flex cursor-pointer'>
        <motion.img
            className='border border-gray-500 w-24 h-24 
            rounded-full object-cover xl:w-32 xl:h-32
            filter group-hover:grayscale transition duration-300 easy.in-out' 
            initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            src="/personal.png"
        />

        <div className='absolute opacity-0 group-hover:opacity-80 trasition
        duration-300 easy-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28
        xl:w-32 xl:h-32 rounded-full z-0'
        >
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>100%</p>
            </div>
        </div>
    </div>
  )
}

export default Skill