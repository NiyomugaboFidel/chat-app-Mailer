import React from 'react'
import SideBar from '../SideBar/SideBar'

const Home:React.FC = () => {
  return (
    <div>
        <div className='w-full h-full block md:flex items-center justify-center gap-[10px]'>
            <div className='md:w-1/3 w-full  h-[100vh]'>
               <SideBar />
            </div>
            <div className='hidden md:block  md:w-2/3 w-full bg-Blue-300 h-[100vh] '>

            </div>
        </div>
    </div>
  )
}

export default Home