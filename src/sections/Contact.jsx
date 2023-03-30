import React from 'react'
import { MdLocationPin, MdEmail, MdLocalPhone } from 'react-icons/md'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

const Contact = () => {

    const messageSchema = yup.object().shape({
        name: yup.string().required('Username is required'),
        email: yup.string().email("Must be a valid Email Address").required('Email is required'),
        phone: yup.string('Must be a valid number'),
        subject: yup.string(),
        message: yup.string().required("You can't send an empty message")
    })
    
    const { register, formState: { errors }, handleSubmit, watch, reset } = useForm({
        mode: 'onSubmit',
        reValidateMode: 'onChange',
        criteriaMode: 'all', 
        defaultValues: {name: '', email: '', phone: '', subject: '', message: ''},
        resolver: yupResolver(messageSchema) 
      })
    
    const submitForm = (data) => {
        console.log('Submitted')
        console.log(data);
        reset();
    }


  return (
    <>
      <div id="contacts-position">
            <section className="bg-[#003554] text-white">
            <form onSubmit={handleSubmit(submitForm)} >
                <div className="text-center pt-[10vh]">
                    <h2 className="font-semibold text-[30px]">Get In Touch</h2>
                    <p className='m-auto w-screen max-w-[80vw]'>I am available to work on your projects and bring your ideas to life. I am just a click away.</p>
                </div>
                <div className="lg:h-screen lg:max-h-[87.5vh] flex flex-col lg:flex-row justify-between items-center">
                    <div className="flex flex-col items-center lg:w-screen lg:max-w-[40vw] h-[80%] lg:ml-[5%] ml-0 justify-center py-10 lg:py-[100px]">
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
                    <div className="flex flex-col items-center justify-center lg:w-screen lg:max-w-[50vw] w-[70%] h-[80%] lg:mr-[5%] pb-7  text-black">
                            <div>
                                <input className="p-3 w-screen lg:max-w-[42vw] max-w-[70vw] m-auto py-[10px] rounded-[10px]" placeholder="Full Name*:" {...register('name')} />
                                <p className='text-red-600 mb-[30px]'>{errors?.name?.message}</p>
                            </div>
                            <div className="grid grid-flow-col gap-5">
                                <div>
                                    <input className="p-3 w-screen lg:max-w-[20.5vw] max-w-[35vw] py-[10px] rounded-[10px]" placeholder="Email*:" {...register('email')} />
                                    <p className='text-red-600 mb-[30px]'>{errors?.email?.message}</p>
                                </div>
                                <div>
                                    <input className="p-3 w-screen lg:max-w-[20vw] max-w-[32vw] py-[10px] mb-[30px] rounded-[10px]" placeholder="Phone Number:" {...register('phone')} />
                                    <p className='text-red-600'>{errors?.phone?.message}</p>
                                </div>
                            </div>
                            <div>
                                <input className="p-3 w-screen lg:max-w-[42vw] max-w-[70vw] py-[10px] mb-[20px] rounded-t-[10px]" placeholder="Subject:" {...register('subject')}/>
                                <p className='text-red-600'>{errors?.subject?.message}</p>
                            </div>
                            <div>
                            <textarea className=" p-3 w-screen lg:max-w-[42vw] max-w-[70vw] pb-[10px] rounded-b-[10px]" rows="8" placeholder="Enter your Message*:" {...register('message')}></textarea>
                            <p className='text-red-600'>{errors?.message?.message}</p>
                            </div>
                    </div>
                </div>
                <div className="text-center pb-[10vh]">
                    <button type='submit' className="border rounded-[20px] inline-block md:py-[15px] py-[10px] md:px-[70px] px-[60px] transition ease-in-out duration-200 hover:bg-white hover:text-[#051923]">Submit</button>
                </div>
                </form>
            </section>
        </div>
    </>
  )
}

export default Contact