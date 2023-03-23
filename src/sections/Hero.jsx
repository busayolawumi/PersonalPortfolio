import React from 'react'

const Hero = () => {
  return (
    <>
    
    <section class="bg-[#051923] text-white h-screen max-h-[50vh] flex items-end">
      <div class="ml-[7%] leading-4">
          <h3 className="text-[#00a6fb] text-[30px] mb-10">Olawumi Oluwabusayo</h3>
          <h2 className="text-[60px] font-semibold mb-7">Self-taught Web Developer</h2>
      </div>
    </section>
    <section class="bg-[#003554] text-white h-screen max-h-[50vh] flex">
      <div class="ml-[7%] leading-4">
          <h2 className="big-desc pt-7">School-taught Computer Scientist</h2>
          <h3 className="small-desc mt-10">Well...I build websites!</h3>
      </div>
    </section>
    </>
  )
}

export default Hero