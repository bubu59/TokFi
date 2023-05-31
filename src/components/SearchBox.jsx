import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const SearchBox = () => {
  return (
        <div className='border-[1px] border-white p-2 pl-5 pr-5 opacity-50 rounded-[10px] flex flex-row bg-slate-200 justify-center'>
            <input className='rounded-[10px] bg-transparent outline-none text-slate-900' placeholder='Search'/>
            <SearchOutlinedIcon className='cursor-pointer text-slate-900'/>
        </div>
  )
}

export default SearchBox