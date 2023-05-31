import React, { useState } from 'react'
import { user, dashboardLinks, helpLinks } from '@/constants'
import Image from 'next/image'
import FeatureCard from './FeatureCard'
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

const Sidebar = ({ setDisplay, setInvoice }) => {
    
    const [isActive, setIsActive] = useState('')
    

  return (
    <div className=' h-screen flex flex-col justify-between col-span-1 ml-5 mt-5'>
        <div className='flex flex-col'>
            {/* <div className='flex flex-col gap-3'>
                <button className='border-white border-[1px] rounded-[10px] items-center' onClick={() => setInvoice(true)}>
                    <div className='flex flex-row gap-3 px-3 py-1 items-center'>
                        <NoteAddOutlinedIcon/>
                        <span>New Invoice</span>
                    </div>
                </button>

                <div className='flex flex-row gap-3'>
                    <button>
                        <div className='px-1 py-1 border-white border-[1px] items-center justify-center flex rounded-[10px]'>
                            <NotificationsNoneOutlinedIcon/>
                        </div>
                    </button>
                </div>
            </div> */}

            <ul className='list-none flex flex-col'>
            {dashboardLinks.map((link) => (
                <FeatureCard 
                    key={link.id}
                    {...link}
                    isActive={isActive}
                    handleClick={() => {
                        setIsActive(link.name)
                        // setDisplay(link.name)
                    }}
                />
            ))}
            </ul>
        </div>

        

        {/* <ul className='list-none flex flex-col gap-5'>
            {helpLinks.map((link) => (
                <FeatureCard 
                    key={link.id}
                    {...link}
                    isActive={isActive}
                    handleClick={() => {
                        setIsActive(link.name)
                        if(isActive === "Logout") {
                            // localStorage.removeItem("accessToken")
                            logoutUser()
                            router.push("/")
                        }
                    }}
                />
            ))}
        </ul> */}

    </div>
  )
}

export default Sidebar