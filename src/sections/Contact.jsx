import React from 'react'
import { MdLocationPin, MdEmail, MdLocalPhone } from 'react-icons/md'

const Contact = () => {
  return (
    <>
      <div id="contacts-position">
            <section className="bg-[#003554] text-white">
                <div className="text-center pt-[10vh]">
                    <h2 className="font-semibold text-[30px]">Get In Touch</h2>
                    <p className='m-auto w-screen max-w-[80vw]'>I am available to work on your projects and bring your ideas to life. I am just a click away.</p>
                </div>
                <div className="h-screen max-h-[87.5vh] flex justify-between items-center">
                    <div className="flex flex-col items-center w-screen max-w-[40vw] h-[80%] ml-[5%] justify-center">
                        <div className="inline-block">
                            <a className='hover:text-[#00a6fb]' href="https://goo.gl/maps/S1r7tEdgowbYjKXDA" target="_blank">
                                <h3 className='flex gap-2'>
                                    <div className="relative top-[-15px] bg-[#051923] rounded-[50%] h-[50px] w-[50px]">
                                        <span className="relative top-[10px] left-[9px]">
                                        <MdLocationPin size={32}/>
                                        </span>
                                    </div>
                                    Abuja, F.C.T.
                                </h3><br />
                            </a>
                            <a className='hover:text-[#00a6fb]' href="mailto:oluwabusayolawumi@gmail.com">
                                <h3 className='flex gap-2'>
                                    <div className="relative top-[-15px] bg-[#051923] rounded-[50%] h-[50px] w-[50px]">
                                        <span className="relative top-[10px] left-[9px]">
                                            <MdEmail size={32}/>
                                        </span>
                                    </div>
                                    oluwabusayolawumi@gmail.com
                                </h3><br />
                            </a>
                            <a className='hover:text-[#00a6fb]' href="tel: +234 903 118 2727">
                                <h3 className='flex gap-2'>
                                    <div className="relative top-[-15px] bg-[#051923] rounded-[50%] h-[50px] w-[50px]">
                                        <span className="relative top-[10px] left-[9px]">
                                        <MdLocalPhone size={32}/>
                                        </span>
                                    </div>
                                    +234 903 118 2727
                                </h3><br />
                            </a>
                        </div>
                        <a className="border rounded-[20px] inline-block py-[12px] px-[50px] transition ease-in-out duration-200 hover:bg-white hover:text-[#051923]" target="_blank" href="Oluwabusayo's Resume.pdf">Download my Resume</a>
                    </div>

                    {/* MESSAGE SECTION */}
                    <div className="flex flex-col items-center justify-center w-screen max-w-[50vw] h-[80%] mr-[5%]">
                        <form action="https://formsubmit.co/oluwabusayolawumi@gmail.com" method="POST" />
                        <div>
                            <input type="text" className="w-screen max-w-[42vw] m-auto py-[10px] mb-[30px] rounded-[10px]" placeholder="Full Name:" name="fullName" />
                        </div>
                        <div className="grid grid-flow-col gap-9">
                            <div>
                                <input type="text" className="w-screen max-w-[19.8vw] py-[10px] mb-[30px] rounded-[10px]" placeholder="Email:" name="emailAddress" />
                            </div>
                            <div>
                                <input type="text" className="w-screen max-w-[19.8vw] py-[10px] mb-[30px] rounded-[10px]" placeholder="Phone Number:" name="phoneNumber" />
                            </div>
                        </div>
                        <div>
                            <input type="text" className="w-screen max-w-[42vw] py-[10px] mb-[20px] rounded-t-[10px]" placeholder="Subject(Optional):" name="subject" />
                        </div>
                        <textarea className="w-screen max-w-[42vw] pb-[10px] rounded-b-[10px]" rows="8" placeholder="Enter your Message" name="message"></textarea>
                    </div>
                </div>
                <div className="text-center pb-[10vh]">
                    <button className="border rounded-[20px] inline-block py-[15px] px-[70px] transition ease-in-out duration-200 hover:bg-white hover:text-[#051923]">Submit</button>
                </div>
            </section>
        </div>
    </>
  )
}

export default Contact