import React from 'react'
import { projectArray } from '../Scripts/projectArray'

const Projects = () => {
  return (
    <>
      <div className="container-fluid main" id="projects-position">
            <section className=" darkBlue-bg h-auto flex items-center justify-center ml-0 pt-[100px] pb-[30px]">
                <div className="flex flex-col">
                    <h2 className='text-[30px] font-bold pb-[30px]'><u>FEATURED PROJECTS</u></h2>

                    {projectArray.map(({ imgLink, name, description, languages, website}) => (
                        <>
                    <div className="bg-[#003554] h-screen max-h-[50vh] w-screen max-w-[80vw] flex m-auto">
                        <div className="w-screen max-w-[30vw] box-border">
                            <img className="h-screen max-h-[50vh] w-full" src={imgLink} alt="" />
                        </div>
                        <div className="w-screen max-w-[70vw] flex flex-col ml-[30px] justify-center">
                            <h2 className="text-[30px] font-bold pt-[20px]">{name}</h2><br />
                            <p className="mb-[10px] w-[90%]">{description}
                                <br /><br />
                                {languages}
                                <br /><br />
                            </p>
                            <a href={website} target="_blank" className="inline-block w-[80px] h-[30px] border rounded-[20px] ml-[35vw] text-center pt-[3px] transition ease-in-out duration-200 hover:bg-white hover:text-[#051923]">Visit</a>
                        </div>
                    </div>
                    <br />
                    <hr className='last:hidden'/><br />
                    </>
                    ))}
                    
                    <div className="text-center pb-[7vh] m-auto">
                        <a href="#/" className="border rounded-[20px] inline-block py-[12px] px-[50px] transition ease-in-out duration-200 hover:bg-white hover:text-[#051923]">View More</a>
                    </div>
                </div><br />
            </section>
        </div>
    </>
  )
}

export default Projects