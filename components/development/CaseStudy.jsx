import React from 'react'
import TitlePara from '../common/TitlePara'
import Image from 'next/image'
import LeftArrow from '../../public/svgs/left-arrow.svg'

const CaseStudy = () => {
    return (
        <section className="section">
            <div className="section-wrapper flex justify-center items-center flex-col gap-8 lg:gap-12">
                <div className='text-center max-w-3xl mx-auto'>
                    <h2 className='uppercase font-bold mb-4 text-xl lg:text-5xl'>Lapaas learning case study</h2>
                    <p className='font-light md:font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nam debitis voluptate
                        iure hic architecto dolorem impedit maxime adipisci illum aspernatur voluptatem,
                        necessitatibus, id minus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Mollitia explicabo repudiandae dolorem illum ut, dicta saepe assumenda.
                        Sit molestiae id omnis repellat sunt corrupti eius?</p>
                </div>
                <div className='flex flex-col lg:flex-row justify-between items-center gap-2'>
                    <TitlePara
                        title='icon reserch'
                        titleClassName={'text-3xl uppercase font-bold mb-6'}
                        className={'py-6 lg:py-10 px-4 text-center'}
                        textClassName={'flex flex-col justify-center items-center gap-2'}
                        text={
                            <>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nam debitis voluptate
                                    iure hic architecto</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nam debitis voluptate
                                    iure hic architecto</p>
                            </>
                        }
                    />
                    <div className='w-10 rotate-90 lg:rotate-0 lg:w-auto'>
                        <Image src={LeftArrow} alt='LeftArrow' className='w-full h-full' />
                    </div>
                    <TitlePara
                        title='icon reserch'
                        titleClassName={'text-3xl uppercase font-bold mb-6'}
                        className={'py-6 lg:py-10 px-4 text-center'}
                        textClassName={'flex flex-col justify-center items-center gap-2'}
                        text={
                            <>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nam debitis voluptate
                                    iure hic architecto</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nam debitis voluptate
                                    iure hic architecto</p>
                            </>
                        }
                    />
                    <div className='w-10 rotate-90 lg:rotate-0 lg:w-auto'>
                        <Image src={LeftArrow} alt='LeftArrow' className='w-full h-full' />
                    </div>
                    <TitlePara
                        title='icon reserch'
                        titleClassName={'text-3xl uppercase font-bold mb-6'}
                        className={'py-6 lg:py-10 px-4 text-center'}
                        textClassName={'flex flex-col justify-center items-center gap-2'}
                        text={
                            <>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nam debitis voluptate
                                    iure hic architecto</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nam debitis voluptate
                                    iure hic architecto</p>
                            </>
                        }
                    />
                    <div className='w-10 rotate-90 lg:rotate-0 lg:w-auto'>
                        <Image src={LeftArrow} alt='LeftArrow' className='w-full h-full' />
                    </div>
                    <TitlePara
                        title='icon reserch'
                        titleClassName={'text-3xl uppercase font-bold mb-6'}
                        className={'py-6 lg:py-10 px-4 text-center'}
                        textClassName={'flex flex-col justify-center items-center gap-2'}
                        text={
                            <>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nam debitis voluptate
                                    iure hic architecto</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nam debitis voluptate
                                    iure hic architecto</p>
                            </>
                        }
                    />
                </div>
            </div>
        </section>
    )
}

export default CaseStudy