"use client"
import {motion} from 'framer-motion'
import { PortableText } from '@portabletext/react'
import urlFor from '../lib/urlFor'
import { RichTextComponent } from '../components/RichTextComponent';

type Props = {
    datos: PerfilInfo
}

function About({datos}: Props) {
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
            src={urlFor(datos.image).url()!}
            alt="myself"
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="z-30 mb-0 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg mb:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        />
        <motion.div 
            className='space-y-10 px-0 md:px-10'
            initial={{ y: -200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            <h4 className='text-4xl font-semibold'>
                Here is a little about me
            </h4>
            <PortableText
                value={datos.bio} 
                components={RichTextComponent}
            />
        </motion.div>
        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/20 left-0 h-[500px] skew-y-12'></div>
    </motion.div>
  )
}

export default About