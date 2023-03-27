import React from 'react'
import Selfie from '../assets/Selfie.jpg'

const About = () => {

  return (
    <>
        <div className="" id="">
            <section className="text-white bg-[#051923] h-screen max-h-[92vh] flex justify-around items-center">
                <div className="w-screen max-w-[60vw] text-[30px] ml-[5%] mr-[20px] pb-[20px]">
                    <h2 className="text-[#00a6fb] text-[50px] font-semibold">Hello, Oluwabusayo Here...</h2><br />
                    <p>I'm a Front-End Developer in Abuja, NG.</p>
                    <p>I've been building websites since 2020 with a focus on responsive design, accessibility and pleasing aesthetics.
                    </p>
                    <a href="#contacts-position" className="text-[#00a6fb]">
                        <p>Let's make something special.</p>
                    </a>
                    {/* <!-- <button>More About Me</button> --> */}
                </div>
                <div className="h-[80%] mr-[5%] pb-[20px]">
                    <img className="w-screen max-w-[30vw] h-full" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStrjeNFV5XzUs_EHUPXkBkuNKk02M6f2gK3qv2JQx6piaCwc-JQ2zKjZYBPRQSL8gV9L0&usqp=CAU'} alt="Busayo looking all professional" />
                </div>
            </section>
        </div>
    </>
  )
}

export default About