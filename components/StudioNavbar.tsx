"use client"
import Link from "next/link"
import {ArrowUturnLeftIcon} from "@heroicons/react/24/solid"

function StudioNavbar(props: any) {
  return (
    <div>
        <div className="flex items-center justify-between p-5">
            <Link className="text-[#D4B86E] flex items-center" href="/"> 
                <ArrowUturnLeftIcon 
                  className="h-6 w-6 text-[#D4B86E] mr-2" 
                  width={20} 
                  height={20}
                />
                Go to the website 
            </Link>
        </div>
      <>{props.renderDefault(props)}</>
    </div>
  )
}

export default StudioNavbar