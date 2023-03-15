import React from 'react'

const About = () => {
  return (
    <>
      <section class="navSticky">
            <nav class="navbar navbar-expand-md darkBlue-bg">
                <div class="container-fluid my-nav">
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
        </section>
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