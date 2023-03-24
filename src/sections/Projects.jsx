import React from 'react'
import { projectArray } from '../Scripts/projectArray'

const Projects = () => {
  return (
    <>
      <div className="container-fluid main" id="projects-position">
            <section className=" darkBlue-bg project-section">
                <div className=" featured-proj">
                    <h2><u>FEATURED PROJECTS</u></h2>

                    {projectArray.map(({ imgLink, name, description, languages, website}) => (
                        <>
                    <div className="card-div">
                        <div className="card-img">
                            <img src={imgLink } alt="" />
                        </div>
                        <div className="card-desc">
                            <h2 className="proj-name">{name}</h2><br />
                            <p className="proj-desc">{description}
                                <br /><br />
                                {languages}
                                <br /><br />
                            </p>
                            <a href={website} target="_blank" className="visit-btn">Visit</a>
                        </div>
                    </div>
                    <br />
                    <hr className='last:hidden'/><br />
                    </>
                    ))}
                    
                    <div className="more-div">
                        <a href="#/" className="more-button">View More</a>
                    </div>
                </div><br />
            </section>
        </div>
    </>
  )
}

export default Projects