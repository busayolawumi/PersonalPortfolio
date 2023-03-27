import React from 'react'
import { FaGithubSquare, FaLinkedin, FaStackOverflow, FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
        <div className="text-white bg-[#051923] flex justify-between pt-[10vh]">
            <div className="h-screen max-h-[20vh] flex items-end ml-[5%] pb-[30px] grow-[0.1] justify-between">
                <a href="https://github.com/busayolawumi" target="_blank"><FaGithubSquare className='hover:text-[#00a6fb]' size={31} /></a>
                <a href="https://twitter.com/busayocodes" target="_blank"><FaTwitterSquare className='hover:text-[#00a6fb]' size={31} /></a>
                <a href="https://www.linkedin.com/in/busayolawumi" target="_blank"><FaLinkedin className='hover:text-[#00a6fb]' size={31} /></a>
                <a href="https://stackoverflow.com/users/19370667/busayolawumi?tab=profile" target="_blank"><FaStackOverflow className='hover:text-[#00a6fb]' size={31} /></a>
            </div>
            <div className="h-screen max-h-[20vh] flex items-end mr-[5%] text-right pb-[30px]">
                <div>
                    <p>Would you like to support me?</p>
                    <div className="trans-div">
                        <a target="_blank" className="semi-transparent-button hover:text-black" href="https://www.buymeacoffee.com/busayolawumi">☕Buy me a coffee</a>
                    </div>
                    <p>Copyright &copy; 2022 <b className='text-[#00a6fb]'>Olawumi Oluwabusayo.</b></p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer