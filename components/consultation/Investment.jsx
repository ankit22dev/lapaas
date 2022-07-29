import React from 'react'
import TitlePara from '../common/TitlePara'

const Investment = () => {
    return (
        <section className="section">
            <div className="section-wrapper flex justify-center items-center flex-col gap-12">
                <div className='text-center mx-auto font-normal'>
                    <h2 className='uppercase font-bold mb-4 text-5xl'>Why consultation is great investment?</h2>
                    <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nam debitis voluptate
                        iure hic architecto dolorem impedit maxime adipisci illum aspernatur voluptatem,
                        necessitatibus, id minus. Lorem ipsum dolor adipisicing elit. Quae nam debitis voluptate
                        iure hic architecto dolorem impedit maxime adipisci illum aspernatur voluptatem,
                        necessitatibus, id minus. Lorem ipsum dolor</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nam debitis voluptate
                        iure hic architecto dolorem impedit maxime adipisci illum aspernatur voluptatem,
                        necessitatibus, id minus. Lorem ipsum dolor adipisicing elit. Quae nam debitis voluptate
                        iure hic architecto dolorem impedit maxime adipisci illum aspernatur voluptatem,
                        necessitatibus, id minus. Lorem ipsum dolor</p>
                </div>
                <div className='flex justify-between items-center gap-8'>
                    <TitlePara
                        title='icon'
                        titleClassName={'text-3xl uppercase font-bold mb-6'}
                        className={'py-10 px-4 text-center'}
                        textClassName={'flex flex-col justify-center items-center gap-2'}
                        text={
                            <>
                                <h3>Save time and money</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nam debitis voluptate
                                    iure hic architecto</p>
                            </>
                        }
                    />
                    <TitlePara
                        title='icon'
                        titleClassName={'text-3xl uppercase font-bold mb-6'}
                        className={'py-10 px-4 text-center'}
                        textClassName={'flex flex-col justify-center items-center gap-2'}
                        text={
                            <>
                                <h3>Save time and money</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nam debitis voluptate
                                    iure hic architecto</p>
                            </>
                        }
                    />
                    <TitlePara
                        title='icon'
                        titleClassName={'text-3xl uppercase font-bold mb-6'}
                        className={'py-10 px-4 text-center'}
                        textClassName={'flex flex-col justify-center items-center gap-2'}
                        text={
                            <>
                                <h3>Save time and money</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nam debitis voluptate
                                    iure hic architecto</p>
                            </>
                        }
                    />
                    <TitlePara
                        title='icon'
                        titleClassName={'text-3xl uppercase font-bold mb-6'}
                        className={'py-10 px-4 text-center'}
                        textClassName={'flex flex-col justify-center items-center gap-2'}
                        text={
                            <>
                                <h3>Save time and money</h3>
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

export default Investment