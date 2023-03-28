import React, {useState} from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {

    const [nav, setNav] = useState(false)
    
    const navToggleHandler = () =>{
      setNav(!nav)
    }

  return (
    <>
      <div className='sticky top-0 z-50 flex justify-between items-center h-screen max-h-[8vh] mx-auto px-4 text-white bg-[#051923]'>
        <h1 className='w-full max-w-[60%] text-xl font-bold text-white hover:text-[#00a6fb]'><a href="#">Olawumi Oluwabusayo</a></h1>
        <ul className='hidden md:flex'>
            <li className='p-4 hover:text-[#00a6fb]'><a href="#about-position">About</a></li>
            <li className='p-4 hover:text-[#00a6fb]'><a href="#skills-position">Skills</a></li>
            <li className='p-4 hover:text-[#00a6fb]'><a href="#projects-position">Projects</a></li>
            <li className='p-4 hover:text-[#00a6fb]'><a href="#contacts-position">Contact</a></li>
        </ul>
        <button onClick={navToggleHandler} className={'block md:hidden'}>
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20}/>} 
        </button>
        <div className={nav ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#051923] p-4 ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <h1 className='w-full mt-0 text-xl font-bold text-white'>Olawumi Oluwabusayo</h1>
            <ul className='uppercase p-4'>
            <li className='p-4 hover:text-[#00a6fb] border-b border-gray-600'><a href="#about-position">About</a></li>
            <li className='p-4 hover:text-[#00a6fb] border-b border-gray-600'><a href="#skills-position">Skills</a></li>
            <li className='p-4 hover:text-[#00a6fb] border-b border-gray-600'><a href="#projects-position">Projects</a></li>
            <li className='p-4 hover:text-[#00a6fb] border-b border-gray-600'><a href="#contacts-position">Contact</a></li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Navbar