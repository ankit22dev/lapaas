import React from 'react'

const ChartBox = ({data}) => {
    return (
        <div className='border-2 w-[30rem] p-6 flex flex-col gap-4'>
            {data?.map((info,i) => {
                return (
            <div className='w-full flex justify-center items-center' key={i}>
                <div className='w-1/3'>
                    <h6 className='text-3xl font-bold uppercase'>{info.name}</h6>
                </div>
                <div className='w-2/3'>
                    <div className='relative w-full h-4 bg-white'>
                        <span className={`absolute h-full bg-mainRed`} style={{width:`${100 - info.percantage}%`}}>
                            <span className='absolute left-full text-black font-bold top-1/2 -translate-y-1/2'>{info.percantage}%</span>
                        </span>
                    </div>
                </div>
            </div>
                )
            })}
        </div>
    )
}

export default ChartBox