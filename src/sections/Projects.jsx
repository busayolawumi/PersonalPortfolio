import React from 'react'

const Projects = () => {
  return (
    <>
      <div class="container-fluid main" id="projects-position">
            <section class=" darkBlue-bg project-section">
                <div class=" featured-proj">
                    <h2><u>FEATURED PROJECTS💻</u></h2>
                    {/* <!-- FIRST PROJECT --> */}
                    <div class="card-div">
                        <div class="card-img">
                            {/* <img src="https://bit.ly/3Gh2Ts7" alt=""> */}
                        </div>
                        <div class="card-desc">
                            <h2 class="proj-name">SCORE KEEPER</h2><br />
                            <p class="proj-desc">It's a bit tricky when keeping count for a game of Ping Pong/Table Tennis, so I decided I should make a simple Ping Pong Score Keeper for that.
                                <br /><br />
                                • HTML • Bulma • JavaScript
                                <br /><br />
                            </p>
                            <a href="https://ping-pong-counter.vercel.app/" target="_blank" class="visit-btn">Visit</a>
                        </div>
                    </div>
                    <br />
                    <hr /><br />
                    {/* <!-- SECOND PROJECT --> */}
                    <div class="card-div">
                        <div class="card-img">
                            {/* <img src="https://bit.ly/3g2WAxL" alt=""> */}
                        </div>
                        <div class="card-desc">
                            <h2 class="proj-name">2048</h2><br />
                            <p class="proj-desc">2048 is an easy and fun sliding puzzle game. Even if you don't love numbers you will love this game. Try and beat your high score.
                                <br /><br />
                                • HTML • CSS • JavaScript
                                <br /><br />
                            </p>
                            <a href="https://play2048.vercel.app/" target="_blank" class="visit-btn">Visit</a>
                        </div>
                    </div>
                    <br />
                    <hr /><br />
                    {/* <!-- THIRD PROJECT --> */}
                    {/* <!-- <div class="card-div">
                        <div class="card-img">
                            <img src="https://bit.ly/3Gh2Ts7" alt="">
                        </div>
                        <div class="card-desc">
                            <h2 class="proj-name">SCORE KEEPER</h2><br>
                            <p class="proj-desc">It's a bit tricky when keeping count for a game of Ping Pong/Table Tennis, so I decided I should make a simple Ping Pong Score Keeper, that makes it easier for you to keep score.
                                <br><br>
                                • HTML • JavaScript • Bulma
                                <br><br>
                            </p>
                            <a href="https://ping-pong-counter.vercel.app/" target="_blank" class="visit-btn">Visit</a>
                        </div>
                    </div>
                    <br>
                    <hr><br> -->
                    {/* <!-- FOURTH PROJECT --> */}
                    {/* <div class="card-div">
                        <div class="card-img">
                            <img src="https://bit.ly/3Gh2Ts7" alt="">
                        </div>
                        <div class="card-desc">
                            <h2 class="proj-name">SCORE KEEPER</h2><br />
                            <p class="proj-desc">It's a bit tricky when keeping count for a game of Ping Pong/Table Tennis, so I decided I should make a simple Ping Pong Score Keeper, that makes it easier for you to keep score.
                                <br><br>
                                • HTML • JavaScript • Bulma
                                <br><br>
                            </p>
                            <a href="https://ping-pong-counter.vercel.app/" target="_blank" class="visit-btn">Visit</a>
                        </div>
                    </div>
                    <br>
                    <hr><br> */}
                    {/*  FIFTH PROJECT */}
                    {/* <div class="card-div">
                        <div class="card-img">
                            <img src="https://bit.ly/3Gh2Ts7" alt="">
                        </div>
                        <div class="card-desc">
                            <h2 class="proj-name">SCORE KEEPER</h2><br>
                            <p class="proj-desc">It's a bit tricky when keeping count for a game of Ping Pong/Table Tennis, so I decided I should make a simple Ping Pong Score Keeper, that makes it easier for you to keep score.
                                <br><br>
                                • HTML • JavaScript • Bulma
                                <br><br>
                            </p>
                            <a href="https://ping-pong-counter.vercel.app/" target="_blank" class="visit-btn">Visit</a>
                        </div>
                    </div> */}
                    <div class="more-div">
                        <a href="#/" class="more-button">View More</a>
                    </div>
                </div><br />
            </section>
        </div>
    </>
  )
}

export default Projects