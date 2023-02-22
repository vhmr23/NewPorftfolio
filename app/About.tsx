"use client"
import {motion} from 'framer-motion'

type Props = {}

function About({}: Props) {
  return (
    <motion.div 
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="flex flex-col relative h-screen text-center
        md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto
        items-center"
    >
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3> 
        <motion.img 
            src="/personal2.png"
            alt="myself"
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="mb-0 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg mb:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        />
        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>
                Here is a little about me
            </h4>
            <p className='text-base'>
                I'm Victor H. Montoya R. Based in Venezuela. 
                Full stack web development - freelance. 
                I am proactive, curious, dedicated to achieving goals, and a life-long learner.
                Handling of React, redux, React Native, Nodejs, Express, mongo, laravel, firebase, heroku, Github, php, MySQL, postgresql, Graphql, Flutter, git, bootstrap, material desing, Ant design.
                Support in WordPress and Woocommerce.
            </p>
        </div>
    </motion.div>
  )
}

export default About