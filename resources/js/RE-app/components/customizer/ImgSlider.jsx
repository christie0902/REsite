import React from 'react'

const ImgSlider = ({ label, value, onChange, step }) => {
  return (
    <div  className="flex flex-col items-left mb-5">
    <div className='flex justify-between'>
        <label className="mr-2">{label}</label>
        <p>{value}</p>
    </div>

    <input
      type="range"
      min="0"
      max="100"
      value={value}
      onChange={(e) => onChange(parseFloat(e.target.value))}
      className="w-64"
      step={step}
    />
    
  </div>
  )
}

export default ImgSlider