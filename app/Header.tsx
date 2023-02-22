"use client"

import { SocialIcon } from 'react-social-icons';
import {motion} from 'framer-motion'

type Props = {}

function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        <motion.div 
            className='flex flex-row items-center'
            initial={{opacity: 0, x: -500, scale: 0.5}}
            animate={{opacity: 1, x: 0, scale: 1}}
            transition={{ duration: 1.5 }}
        >
            <SocialIcon 
                url="https://www.linkedin.com/in/victor-hugo-montoya-rada-7a525789/" 
                bgColor="transparent"
                fgColor="gray"
            />
            <SocialIcon 
                url="https://www.instagram.com/vhmr19/" 
                bgColor="transparent"
                fgColor="gray"
            />
            <SocialIcon 
                url="https://github.com/vhmr23" 
                bgColor="transparent"
                fgColor="gray"
            />
        </motion.div>
        <motion.div 
            className='flex flex-row items-center text-gray-300 cursor-pointer'
            initial={{opacity: 0, x: 500, scale: 0.5}}
            animate={{opacity: 1, x: 0, scale: 1}}
            transition={{ duration: 1 }}
        >
            <SocialIcon
                className='cursor-pointer' 
                network="email" 
                bgColor="transparent"
                fgColor="gray"
            />
            <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
                Get in touch
            </p>
        </motion.div>
    </header>
  )
}

export default Header