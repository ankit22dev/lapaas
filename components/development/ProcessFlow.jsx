import React, { useState } from 'react'
import TitleCard from '../common/TitleCard'
import Image from 'next/image'
import Spaceship from '../../public/imgs/spaceship.png'
import Logo from '../../public/imgs/logoWithName.png'

const ProcessFlow = () => {
    const [currentTab, setCurrentTab] = useState(0)

    return (
        <section className="section transition-all">
            <div className="section-wrapper w-full flex justify-center items-center gap-10 lg:py-4">
                <div className='w-full'>
                    {
                        (currentTab == 0 || currentTab == 2 || currentTab == 4) ? (
                            <div className='w-52'>
                                <Image src={Spaceship} alt='Spaceship' />
                            </div>
                        ) : (
                            <div className='w-52'>
                                <Image src={Logo} alt='Spaceship' />
                            </div>
                        )
                    }
                </div>
                <div className='w-full flex flex-col justify-center items-center h-full'>
                    <div className='max-w-xl mx-auto'>
                        {
                            (currentTab == 0 || currentTab == 2 || currentTab == 4) ? (
                                <article className='flex justify-evenly items-center w-full h-full'>
                                    <p className='max-w-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus aperiam velit incidunt, eaque eveniet quaerat. Accusamus, porro
                                        laudantium. Numquam modi molestias velit consectetur possimus, ipsum voluptatibus omnis non similique sint aspernatur, sequi eveniet
                                        sit dolorum est. Ducimus</p>
                                </article>
                            ) : (
                                <article className='flex justify-evenly items-center w-full h-full'>
                                    <p className='max-w-xl'>testttttttt ipsum dolor sit, amet consectetur adipisicing elit. Minus aperiam velit incidunt, eaque eveniet quaerat. Accusamus, porro
                                        laudantium. Numquam modi molestias velit consectetur possimus, ipsum voluptatibus omnis non similique sint aspernatur, sequi eveniet
                                        sit dolorum est. Ducimus laboriosam neque dolorem amet voluptas minima, quidem expedita harum tenetur dicta obcaecati quisquam! Lorem,
                                        ipsum dolor sit amet consectetur adipisicing elit. Commodi ab aut, beatae quas amet numquam nesciunt dolorem dolore laborum rem. Libero
                                        totam impedit quis cumque
                                        molestias similique, dolor, doloremque dolorem reprehenderit et aliquid reiciendis veritatis at, quae voluptatem harum? Delectus libero
                                        nemo aut cupiditate nesciunt magni dolorem est. Incidunt, fuga!</p>
                                </article>
                            )
                        }

                        <div className='flex justify-center items-center gap-3 flex-wrap mt-auto'>
                            <button onClick={() => setCurrentTab(0)} className={'border-2 min-w-[10rem] border-white px-3 py-2 bg-mainRed text-white'}>Consultation</button>
                            <button onClick={() => setCurrentTab(1)} className={'border-2 min-w-[10rem] border-white px-3 py-2 bg-mainRed text-white'}>Framwork</button>
                            <button onClick={() => setCurrentTab(2)} className={'border-2 min-w-[10rem] border-white px-3 py-2 bg-mainRed text-white'}>Product Development</button>
                            <button onClick={() => setCurrentTab(3)} className={'border-2 min-w-[10rem] border-white px-3 py-2 bg-mainRed text-white'}>Branding & Marketing</button>
                            <button onClick={() => setCurrentTab(4)} className={'border-2 min-w-[10rem] border-white px-3 py-2 bg-mainRed text-white'}>Testing & Scaling</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProcessFlow