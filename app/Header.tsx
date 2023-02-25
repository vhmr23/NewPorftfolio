"use client"
import { SocialIcon } from 'react-social-icons';
import {motion} from 'framer-motion'

type Props = {
    socials: Social[]
}

function Header({socials}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-50 xl:items-center'>
        <motion.div 
            className='flex flex-row items-center'
            initial={{opacity: 0, x: -500, scale: 0.5}}
            animate={{opacity: 1, x: 0, scale: 1}}
            transition={{ duration: 1.5 }}
        >
            {socials.map((social) => (
                <SocialIcon 
                    key={social._id}
                    url={social.url} 
                    bgColor="transparent"
                    fgColor="gray"
                    target={'_blank'}
                />
            ))}
        </motion.div>
        <motion.div 
            className='flex flex-row items-center text-gray-300 cursor-pointer mr-5'
            initial={{opacity: 0, x: 500, scale: 0.5}}
            animate={{opacity: 1, x: 0, scale: 1}}
            transition={{ duration: 1 }}
        >
            <SocialIcon
                className='cursor-pointer' 
                network="whatsapp" 
                bgColor="transparent"
                fgColor="gray"
            />
            <a href="https://wa.link/q9np0k" target="_blank">
                <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
                    Get in touch
                </p>
            </a>
        </motion.div>
    </header>
  )
}

export default Header