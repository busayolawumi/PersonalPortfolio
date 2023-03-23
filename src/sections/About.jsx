import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const About = () => {

    const [nav, setNav] = useState(false)
    
    const navToggleHandler = () =>{
      setNav(!nav)
    }

  return (
    <>
    <div className='flex justify-between items-center h-screen max-h-[8vh] mx-auto px-4 text-white bg-[#051923] border'>
        <h1 className='w-full text-xl font-bold text-white hover:text-[#00a6fb]'>Olawumi Oluwabusayo</h1>
        <ul className='hidden sm:flex'>
            <li className='p-4 hover:text-[#00a6fb]'>About</li>
            <li className='p-4 hover:text-[#00a6fb]'>Skills</li>
            <li className='p-4 hover:text-[#00a6fb]'>Projects</li>
            <li className='p-4 hover:text-[#00a6fb]'>Contact</li>
        </ul>
        <button onClick={navToggleHandler} className={'block sm:hidden'}>
            {nav ? <AiOutlineClose size={20} /> :  <AiOutlineMenu size={20}/>} 
        </button>
        <div className={nav ? 'fixed sm:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] p-4 ease-in-out duration-500' : 'fixed left-[-100%]'}>
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
        {/* <!-- ABOUT ME --> */}
        <div class="container-fluid main" id="about-position">
            <section class="darkBlue-bg third-section">
                <div class="about-text">
                    <h2 class="about-header">Hello, Oluwabusayo Here...</h2><br />
                    <p>I'm a Front-End Developer in Abuja, NG.</p>
                    <p>I've been building websites since 2020 with a focus on responsive design, accessibility and pleasing aesthetics.
                    </p>
                    <a href="#contacts-position" class="special">
                        <p>Let's make something special.</p>
                    </a>
                    {/* <!-- <button>More About Me</button> --> */}
                </div>
                <div class="about-pic-div">
                    {/* <img class="about-pic" src="https://i.imgur.com/SosaKFa.jpg" alt="Busayo's Picture"> */}
                </div>
            </section>
        </div>
    </>
  )
}

export default About


{/* <section class="navSticky">
            <nav class="navbar navbar-expand-md darkBlue-bg">
                <div class="flex justify-between">
                    <a class="navbar-brand" href="#">Olawumi Oluwabusayo</a>
                    <button class="navbar-toggler collapsed custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="navbar-collapse collapse collapse-color" id="navbarNav">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="#about-position">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#skills-position">Skills</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#projects-position">Projects</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " href="#contacts-position">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section> */}