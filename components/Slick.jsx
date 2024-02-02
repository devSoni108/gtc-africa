import React from 'react';
import Slider from "react-slick";
import Image from 'next/image';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slick = () => {
  
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

    return (
        <div className='flex justify-around items-center py-8 bg-stone-950'>
            <div className='max-w-300 p-10 sm:max-w-500'>
                <Slider {...settings}>
                    <div>
                        <Image
                            src='https://firebasestorage.googleapis.com/v0/b/gtc-africa.appspot.com/o/IMG-20240130-WA0009.jpg?alt=media&token=8ab7557c-cf4a-4da3-890e-1d008abfef65'
                            alt='/'
                            width={500}
                            height={500}
                            className='p-4'
                            
                        />
                    </div>
                    <div>
                        <Image
                            src='https://firebasestorage.googleapis.com/v0/b/gtc-africa.appspot.com/o/IMG-20240130-WA0008.jpg?alt=media&token=9e6be936-9731-4678-adf0-fc6d23403faa'
                            alt='/'
                            width={500}
                            height={500}
                            className='p-4'
                        />
                    </div>
                    <div>
                        <Image
                            src='https://firebasestorage.googleapis.com/v0/b/gtc-africa.appspot.com/o/IMG-20240130-WA0012.jpg?alt=media&token=f7d4ce2d-6cc8-456b-8517-2219d678ef6a'
                            alt='/'
                            width={500}
                            height={500}
                            className='p-4'
                        />
                    </div>
                    <div>
                        <Image
                            src='https://firebasestorage.googleapis.com/v0/b/gtc-africa.appspot.com/o/IMG-20240130-WA0016.jpg?alt=media&token=fda490e8-6d6f-4d27-a06d-4b66b04dea84'
                            alt='/'
                            width={500}
                            height={500}
                            className='p-4'
                        />
                    </div>
                    <div>
                        <Image
                            src='https://firebasestorage.googleapis.com/v0/b/gtc-africa.appspot.com/o/IMG-20240130-WA0010.jpg?alt=media&token=be651878-fe59-494f-bb13-c6a882ac7245'
                            alt='/'
                            width={500}
                            height={500}
                            className='p-4'
                        />
                    </div>
                    <div>
                        <Image
                            src='https://firebasestorage.googleapis.com/v0/b/gtc-africa.appspot.com/o/IMG-20240130-WA0017.jpg?alt=media&token=8a111038-2511-4130-b79f-46ef32011420'
                            alt='/'
                            width={500}
                            height={500}
                            className='p-4'
                        />
                    </div>
                    <div>
                        <Image
                            src='https://firebasestorage.googleapis.com/v0/b/gtc-africa.appspot.com/o/IMG-20240130-WA0014.jpg?alt=media&token=ba6bd541-8442-446e-b7f5-4837f6446bd5'
                            alt='/'
                            width={500}
                            height={500}
                            className='p-4'
                        />
                    </div>
                    <div>
                        <Image
                            src='https://firebasestorage.googleapis.com/v0/b/gtc-africa.appspot.com/o/IMG-20240130-WA0013.jpg?alt=media&token=7bab98c3-f645-49ea-9113-34d96837a924'
                            alt='/'
                            width={500}
                            height={500}
                            className='p-4'
                        />
                    </div>
                    <div>
                        <Image
                            src='https://firebasestorage.googleapis.com/v0/b/gtc-africa.appspot.com/o/IMG-20240130-WA0011.jpg?alt=media&token=5b33b34a-a997-4161-a04f-f185524c9698'
                            alt='/'
                            width={500}
                            height={500}
                            className='p-4'
                        />
                    </div>
                    <div>
                        <Image
                            src='https://firebasestorage.googleapis.com/v0/b/gtc-africa.appspot.com/o/IMG-20240130-WA0015.jpg?alt=media&token=5f117795-324f-4a93-b7ae-d0067418eac2'
                            alt='/'
                            width={500}
                            height={500}
                            className='p-4'
                        />
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Slick