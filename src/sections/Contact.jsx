import React from 'react'

const Contact = () => {
  return (
    <>
      <div class="container-fluid main" id="contacts-position">
            <section class="lightBlue-bg ">
                <div class="contact-header">
                    <h2 class="big-contact-desc">Get In Touch</h2>
                    <p>I am available to work on your projects and bring your ideas to life. I am just a click away.</p>
                </div>
                <div class="contact-section contacts">
                    <div class="my-contacts">
                        <div class="inner-contact">
                            <a href="https://goo.gl/maps/S1r7tEdgowbYjKXDA" target="_blank">
                                <h3>
                                    <div class="cont-back">
                                        <span>
                                            <i class="fa-solid fa-location-dot fa-2xl"></i>
                                        </span>
                                    </div>
                                    Abuja, F.C.T.
                                </h3><br />
                            </a>
                            <a href="mailto:oluwabusayolawumi@gmail.com">
                                <h3>
                                    <div class="cont-back">
                                        <span class="con-span">
                                            <i class="fa-solid fa-envelope fa-2xl"></i>
                                        </span>
                                    </div>
                                    oluwabusayolawumi@gmail.com
                                </h3><br />
                            </a>
                            <a href="tel: +234 903 118 2727">
                                <h3>
                                    <div class="cont-back">
                                        <span class="con-span">
                                            <i class="fa-solid fa-phone fa-2xl"></i></span>
                                    </div>
                                    +234 903 118 2727
                                </h3><br />
                            </a>
                        </div>
                        <a class="more-button" target="_blank" href="Oluwabusayo's Resume.pdf">Download my Resume</a>
                    </div>
                    <div class="text-me">
                        <form action="https://formsubmit.co/oluwabusayolawumi@gmail.com" method="POST" />
                        <div class="mb-3">
                            <input type="text" class="form-control name" id="exampleFormControlInput1" placeholder="Full Name:" name="fullName" />
                        </div>
                        <div class="row">
                            <div class="mb-3 col">
                                <input type="text" class="form-control email" id="exampleFormControlInput1" placeholder="Email:" name="emailAddress" />
                            </div>
                            <div class="mb-3 col">
                                <input type="text" class="form-control number" id="exampleFormControlInput1" placeholder="Phone Number:" name="phoneNumber" />
                            </div>
                        </div>
                        <div class="mb-3 col">
                            <input type="text" class="form-control subject" id="exampleFormControlInput1" placeholder="Subject(Optional):" name="subject" />
                        </div>
                        <textarea class="form-control message" id="exampleFormControlTextarea1" rows="7" placeholder="Enter your Message" name="message"></textarea>
                    </div>
                </div>
                <div class="submit-div">
                    <button class="submit-button">Submit</button>
                </div>
            </section>
        </div>
    </>
  )
}

export default Contact