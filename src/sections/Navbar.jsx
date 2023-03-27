import React, {useState} from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {

    const [nav, setNav] = useState(false)
    
    const navToggleHandler = () =>{
      setNav(!nav)
    }

  return (
    <>
        <div id='about-position' className='flex justify-between items-center h-screen max-h-[8vh] mx-auto px-4 text-white bg-[#051923] border'>
        <h1 className='w-full text-xl font-bold text-white hover:text-[#00a6fb]'><a href="#">Olawumi Oluwabusayo</a></h1>
        <ul className='hidden md:flex'>
            <li className='p-4 hover:text-[#00a6fb]'><a href="#about-position">About</a></li>
            <li className='p-4 hover:text-[#00a6fb]'><a href="#skills-position">Skills</a></li>
            <li className='p-4 hover:text-[#00a6fb]'><a href="#projects-position">Projects</a></li>
            <li className='p-4 hover:text-[#00a6fb]'><a href="#contacts-position">Contact</a></li>
        </ul>
        <button onClick={navToggleHandler} className={'block md:hidden'}>
            {nav ? <AiOutlineClose size={20} /> :  <AiOutlineMenu size={20}/>} 
        </button>
        <div className={nav ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] p-4 ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <h1 className='w-full mt-4 text-3xl font-bold text-[#00df9a]'>REACT.</h1>
            <ul className='uppercase p-4'>
                <li className='p-4 border-b border-gray-600'>Home</li>
                <li className='p-4 border-b border-gray-600'>Company</li>
                <li className='p-4 border-b border-gray-600'>Resources</li>
                <li className='p-4 border-b border-gray-600'>About</li>
                <li className='p-4'>Contact</li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Navbar