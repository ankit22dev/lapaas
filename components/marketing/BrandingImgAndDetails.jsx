import TitleImgCard from '../common/TitleImgCard'

const BrandingImgAndDetails = ({
    imgName,
    description,
    order = false
}) => {
    return (
        <section className='section'>
            <div className={`section-wrapper flex justify-between items-center ${order && 'flex-row-reverse'}`}>
                <TitleImgCard
                    title={'Branding'}
                    titleClassName={'heading z-10'}
                    imgName={imgName}
                    imgClassName={'absolute top-0 left-0 bottom-0 right-0 z-0'}
                    className={'w-[28rem] h-[32rem] relative overflow-hidden'}
                />
                <p className='max-w-2xl text-2xl'>{description}</p>
            </div>
        </section>
    )
}

export default BrandingImgAndDetails