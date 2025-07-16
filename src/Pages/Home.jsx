import React from 'react'
import hero_img from '../assets/hero.png'
import collection1 from '../assets/collection-1.png'
import collection2 from '../assets/collection-2.png'
import collection3 from '../assets/collection-3.png'

const Home = () => {
    return (
        <>
            {/* home-header  */}
            <div id="hero" className='container relative mt-16 sm:mt-20 py-10 xl:min-h-screen'>

                <div className='absolute top-[40%] sm:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 md:top-[45%] lg:top-1/2'>

                    <p className='text-[124px] leading-none sm:text-[170px] font-black text-[#241826] opacity-50'>
                        FRA <br />
                        GRA <br />
                        NCE
                    </p>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='text-[45px] sm:text-[70px] md:text-[90px] lg:text-[120px] xl:text-[180px] font-bold uppercase'>Celestia.</div>
                </div>

                <div className='relative -mt-16 sm:-mt-24 md:-mt-30 lg:mt-[-8rem]'>
                    <img src={hero_img} alt="" className='w-full mx-auto md:w-[450px] lg:w-[500px]' />
                    <p className='absolute bottom-[20%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-DancingScript text-[15px] sm:text-[20px] md:text-[25px] lg:text-[50px]'>made of stardust</p>
                </div>
                <div className='flex flex-col items-center w-full gap-5 md:justify-between md:gap-2 md:flex-row'>
                    <p className='max-w-80'>
                        Celestia is a unique perfume, drawn from the rarest meteorites, and is the only one to be sourced from the stars
                    </p>
                    <button className='btn'>TRY NOW</button>
                    <p className='max-w-80 md:text-right'>
                        Celestia is a unique perfume, drawn from the rarest meteorites, and is the only one to be sourced from the stars
                    </p>
                </div>
            </div>

            {/* home-collection  */}
            <section id='collection' className='bg-sectionColor'>
                <div className='container'>
                    <div className='flex flex-col items-center gap-3 text-center mb-20 md:mb-28'>
                        <h2 className='title text-titleColor'>Collection</h2>
                        <p className='subtitle max-w-2xl'>Things you need to know</p>
                    </div>

                    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-8 px-3'>
                        {/* card-1  */}
                        <div className='relative bg-cardColor rounded-xl px-10 py-20'>
                            <img src={collection1} alt="collection1" className='w-40 absolute -top-20 left-0 cursor-pointer img' />
                            <div>
                                <h2 className='cardtitle'>Real Stardust</h2>
                                <p>We've sourced the finest meteorites and have extracted the very essence of the universe.</p>
                            </div>
                            <div className='bg-titleColor w-20 h-20 rounded-full flex items-center justify-center text-2xl border-8 border-sectionColor
                        absolute -right-3 -bottom-3 cursor-pointer'>
                                <i className='ri-arrow-right-line'></i>
                            </div>
                        </div>


                        {/* card-2 */}
                        <div className='relative bg-cardColor rounded-xl px-10 py-20'>
                            <img src={collection2} alt="collection1" className='w-40 absolute -top-20 left-0 cursor-pointer img' />
                            <div>
                                <h2 className='cardtitle'>Real Stardust</h2>
                                <p>We've sourced the finest meteorites and have extracted the very essence of the universe.</p>
                            </div>
                            <div className='bg-titleColor w-20 h-20 rounded-full flex items-center justify-center text-2xl border-8 border-sectionColor
                        absolute -right-3 -bottom-3 cursor-pointer'>
                                <i className='ri-arrow-right-line'></i>
                            </div>
                        </div>


                        {/* card-3  */}
                        <div className='relative bg-cardColor rounded-xl px-10 py-20'>
                            <img src={collection3} alt="collection1" className='w-40 absolute -top-20 left-0 cursor-pointer img' />
                            <div>
                                <h2 className='cardtitle'>Real Stardust</h2>
                                <p>We've sourced the finest meteorites and have extracted the very essence of the universe.</p>
                            </div>
                            <div className='bg-titleColor w-20 h-20 rounded-full flex items-center justify-center text-2xl border-8 border-sectionColor
                        absolute -right-3 -bottom-3 cursor-pointer '>
                                <i className='ri-arrow-right-line'></i>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </>
    )
}

export default Home