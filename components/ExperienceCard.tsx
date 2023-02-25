"use client"
import {motion} from 'framer-motion'
import urlFor from '../lib/urlFor'

type Props = {
    experience: Experience
}

function ExperienceCard({experience}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10
    hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <img
            className='w-32 h-24 xl:w-[200px] xl:h-[100px] object-center'
            src={urlFor(experience.JobImage).url()!}
            alt="" 
        />

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>{experience.jobTitle}</h4>
            <p className='font-bold text-2xl mt-1'>{experience.companyTitle}</p>
            <div className='flex space-x-2 my-2'>
                {
                    experience.tecnologies.map((tec) => (
                        <img 
                            className='h-10 w-16 rounded-full'
                            src={urlFor(tec.mainImage).url()!}
                            alt="" 
                        />
                    ))
                }
            </div>
            <p className='uppercase py-5 text-gray-300'>{experience.dateStared} - {experience.dateEnded}</p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>
                {
                    experience.points.map((point) => (
                        <li>{point}</li>
                    ))
                }

            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard