import React from 'react'

const FeatureCard = ({ icon, name, isActive, handleClick, title, isCol, number }) => {
  return (
    <>
    {isCol ? (
        <div className='flex flex-col items-center'>
            <div className='text-slate-900 opacity-50'>{ title }</div>
            <p className='text-slate-900 text-[25px]'>{ number}</p>
        </div>
        ) : (
        <div className='flex flex-row gap-5 items-center cursor-pointer hover:bg-slate-100 py-3 font-bold' onClick={handleClick} >
            <div className={`${isActive === name ? 'text-red-600' : 'text-slate-900'}`}>{ icon }</div>
            <p className={`${isActive === name ? 'text-red-600' : 'text-slate-900'} cursor-pointer`}>{title}</p>
        </div>
        )
    }
    </>
    
  )
}

export default FeatureCard