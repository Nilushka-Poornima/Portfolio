import React from 'react'

const LoadingPage = () => {
  return (
    <div className="wrapper absolute z-50 top-0 left-0 w-screen bg-black h-screen flex items-center justify-center">
        <div className="container rotate-45 w-24 grid grid-cols-3 gap-x-2 gap-y-2">
            {new Array(9).fill().map((arr)=>{
                return <div className='box w-7 h-7 bg-[#581c87] scale-0'></div>
            })}
        </div>
    </div>
  )
}

export default LoadingPage