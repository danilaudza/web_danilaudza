import React from 'react'
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <div className='bg-primary w-screen h-screen flex flex-col justify-center items-center'>
      <p className='mx-auto'>Not Found</p>
      <a href="/" className='text-sm text-cyan-300 hover:text-cyan-600 transition-all duration-300'>Go back Here</a>
    </div>
  )
}

export default NotFound