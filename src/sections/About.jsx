import React from 'react'
import Selfie from '../assets/Selfie.png'

const About = () => {

  return (
    <>
        <div>
            <section className="text-white bg-[#051923] sm:h-screen max-h-[92vh] h-auto sm:pb-0 pb-[30px] sm:pt-0 pt-[30px] flex justify-around items-center sm:flex-row flex-col md:py-[5%] ">
                <div className="w-screen lg:max-w-[60vw] md:max-w-[55vw] max-w-[70vw] xl:text-[30px] lg:text-[26px] md:text-[24px] sm:text-[22px] ml-[5%] mr-[20px] pb-[20px]">
                    <h2 className="text-[#00a6fb] xl:text-[50px] lg:text-[40px] md:text-[30px] text-[25px] font-semibold">Hello, Oluwabusayo Here...</h2><br />
                    <p>I'm a Front-End Developer in Abuja, NG.</p>
                    <p>I've been building websites since 2020 with a focus on responsive design, accessibility and pleasing aesthetics.
                    </p>
                    <a href="#contacts-position" className="text-[#00a6fb]">
                        <p>Let's make something special.</p>
                    </a>
                    {/* <!-- <button>More About Me</button> --> */}
                </div>
                <div className="xl:h-[70%] lg:h-[50%] md:h-[40%] sm:h-[40%] sm:w-auto w-screen max-w-[55vw] sm:ml-0 ml-[7%] sm:pt-0 pt-[10px] mr-[5%]">
                    <img className="w-screen sm:max-w-[30vw] max-w-[100%] h-full" src={Selfie} alt="Busayo looking all professional" />
                </div>
            </section>
        </div>
    </>
  )
}

export default About