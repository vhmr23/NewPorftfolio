"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import {motion} from 'framer-motion'

type Props = {}

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            'Hello, I am Victor H. Montoya R. 👊', 
            'I am a Full Stack Developer 💻 in JS',
            'and I love design graphics 🎨',
            '{ coding and drink coffee ☕}'
        ],
        loop: true,
        delaySpeed: 2000,
    })
  return (
    <motion.div 
        className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'
        initial={{opacity: 0, y: 500, scale: 0.5}}
        animate={{opacity: 1, y: 0, scale: 1}}
        transition={{ duration: 1.5 }}
    >
        <Image 
            className="relative rounded-full content-cover mx-auto"
            src="/personal.png"
            width={150}
            height={150} 
            alt="myself" 
        />
        <div>
            <h2 className='text-sm uppercase pb-2 text-gray-500 tracking-[10px]'>
                Software Engineer and Designer
            </h2>
            <h1 className='text-5xl lg:text-6xl font-semibold scroll-px-10'>
                <span>{text}</span>
                <Cursor cursorColor='#f7ab0a' />
            </h1>
            <div className='py-5'>
                <Link href="#about">
                    <button className='heroButton'>About</button>
                </Link>
                <Link href="#experience">
                    <button className='heroButton'>Experience</button>
                </Link>
                <Link href="#skills">
                    <button className='heroButton'>Skills</button>
                </Link>
                <Link href="#projects">
                    <button className='heroButton'>Projects</button>
                </Link>
            </div>
        </div>
    </motion.div>
  )
}

export default Hero