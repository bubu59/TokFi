import React, { useState } from 'react'
import Image from 'next/image'
import CustomButton from './CustomButton'
// import { navLinks } from '@/constants'
import SearchBox from './SearchBox'
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Navbar = ({setPopup}) => {
    const [active, setActive] = useState('')
    const handleClick = async () => {
        
    }

  return (
    <>
    <nav className='w-full flex items-center py-3 border-b '>
        <div className='w-full flex justify-between items-center max-w-6xl mx-auto'>

            <div className='flex items-center gap-2'> 
                {/* <Image src='/vlyssIcon.png' alt='logo' height={30} width={30} className='w-18 h-18 object-contain'/> */}
                <p className='text-[28px] font-bold text-black'>TokFi</p>
            </div>

            <SearchBox/>

            {/* <ul className='list-none flex flex-row gap-x-10'>
                {navLinks.map((link) => (
                    <li
                     key={link.id}
                     className={`${active === link.title ? 'text-[#BAD4FB]' : 'text-white'} hover:text-[#BAD4FB] text-[16px] cursor-pointer`} 
                     onClick={() => setActive(link.title)}
                    >
                        <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                ))}
            </ul> */}
            
            <div className='flex flex-row items-center gap-3'>
                    <CustomButton
                        btnType='button'
                        title='Upload'
                        handleClick={handleClick}
                        styles='px-3 rounded-[5px] text-slate-900 border border-slate-300 px-7 py-2 gap-3 flex flex-row justify-center align-center'
                        icon={<AddIcon className='text-slate-900'/>}
                    />
                    <CustomButton
                        btnType='button'
                        title='Log in'
                        handleClick={handleClick}
                        styles='bg-red-600 px-7 py-2 rounded-[5px] justify-center text-center'
                    />
                    <button>
                        <MoreVertIcon className='text-slate-900 ml-3'/>
                    </button>
            </div>
        </div>
    </nav>
    <div className='w-3/4 h-0.5 white-gradient'>

    </div>
    </>
  )
}

export default Navbar