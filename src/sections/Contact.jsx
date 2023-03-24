import React from 'react'
import { MdLocationPin } from 'react-icons/md'

const Contact = () => {
  return (
    <>
      <div id="contacts-position">
            <section className="bg-[#003554] text-white">
                <div className="text-center pt-[10vh]">
                    <h2 className="font-semibold text-[30px]">Get In Touch</h2>
                    <p className='mb-[30px] m-auto w-screen max-w-[80vw]'>I am available to work on your projects and bring your ideas to life. I am just a click away.</p>
                </div>
                <div className="h-screen max-h-[87.5vh] flex justify-between items-center">
                    <div className="flex flex-col items-center w-screen max-w-[40vw] h-[80%] ml-[5%] justify-center">
                        <div className="inline-block">
                            <a className='hover:text-[#00a6fb]' href="https://goo.gl/maps/S1r7tEdgowbYjKXDA" target="_blank">
                                <h3>
                                    <div className="cont-back">
                                        <span>
                                            <i className="fa-solid fa-location-dot fa-2xl"></i>
                                        </span>
                                    </div>
                                    Abuja, F.C.T.
                                </h3><br />
                            </a>
                            <a className='hover:text-[#00a6fb]' href="mailto:oluwabusayolawumi@gmail.com">
                                <h3>
                                    <div className="cont-back">
                                        <span className="con-span">
                                            <i className="fa-solid fa-envelope fa-2xl"></i>
                                        </span>
                                    </div>
                                    oluwabusayolawumi@gmail.com
                                </h3><br />
                            </a>
                            <a className='hover:text-[#00a6fb]' href="tel: +234 903 118 2727">
                                <h3>
                                    <div className="cont-back">
                                        <span className="con-span">
                                            <i className="fa-solid fa-phone fa-2xl"></i></span>
                                    </div>
                                    +234 903 118 2727
                                </h3><br />
                            </a>
                        </div>
                        <a className="more-button" target="_blank" href="Oluwabusayo's Resume.pdf">Download my Resume</a>
                    </div>
                    <div className="text-me">
                        <form action="https://formsubmit.co/oluwabusayolawumi@gmail.com" method="POST" />
                        <div className="mb-3">
                            <input type="text" className="form-control name" id="exampleFormControlInput1" placeholder="Full Name:" name="fullName" />
                        </div>
                        <div className="row">
                            <div className="mb-3 col">
                                <input type="text" className="form-control email" id="exampleFormControlInput1" placeholder="Email:" name="emailAddress" />
                            </div>
                            <div className="mb-3 col">
                                <input type="text" className="form-control number" id="exampleFormControlInput1" placeholder="Phone Number:" name="phoneNumber" />
                            </div>
                        </div>
                        <div className="mb-3 col">
                            <input type="text" className="form-control subject" id="exampleFormControlInput1" placeholder="Subject(Optional):" name="subject" />
                        </div>
                        <textarea className="form-control message" id="exampleFormControlTextarea1" rows="7" placeholder="Enter your Message" name="message"></textarea>
                    </div>
                </div>
                <div className="submit-div">
                    <button className="submit-button">Submit</button>
                </div>
            </section>
        </div>
    </>
  )
}

export default Contact