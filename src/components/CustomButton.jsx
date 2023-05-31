import React from 'react'

const CustomButton = ({btnType, title, handleClick, styles, icon }) => {
  return (
    <button 
        type={btnType}
        className={`font-epilouge text-[16px] leading-[26px] ${styles}`}
        onClick={handleClick}
    >
        { icon }
        {title}
    </button>
  )
}

export default CustomButton