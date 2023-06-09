import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section>
      <div className='drop-shadow-sm' style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Image
            src='https://firebasestorage.googleapis.com/v0/b/gtc-africa.appspot.com/o/hero.jpg?alt=media&token=67c05447-4a72-4a1e-8e15-540fffafdbce'
            alt='Heavy vehicle excavators'
            width={1920}
            height={450}
            style={{ width: '100%', height: '450px', objectFit: 'cover', objectPosition: 'center' }}
            loading="lazy"
          />
        {/* Overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            zIndex: 0
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1,
            width: '100%',
            textAlign: 'left',
            color: 'white',
          }}
        >
          <div className='px-4 sm:px-8'>
            <h1 className='pt-4 text-4xl font-semibold md:text-5xl max-w-500'>Unleashing the <span className='text-yellow-500'>Power</span> of your Machinery</h1>
            <h2 className='py-6 text-sm md:text-xl  sm:max-w-600 '>Experience the full potential of your earth moving equipment with our engineering and mechanical services.</h2>
            <div className='block sm:flex'>
              <div className='pr-2 pt-2'>
                <Link href='/services' passHref>
                  <button className='px-2 py-1 text-xs text-stone-950 bg-amber-300 font-semibold rounded border border-amber-200 hover:text-amber-300 hover:bg-stone-800 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-stone-800 focus:ring-offset-2 uppercase md:px-4 md:py-2'>Our Solutions</button>
                </Link>
              </div>
              <div className='pt-2'>
                <Link href='/contact' passHref>
                  <button className='px-3 py-1 text-xs text-stone-950 bg-white font-semibold rounded border border-stone-400 hover:text-white hover:bg-stone-800 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-stone-800 focus:ring-offset-2 uppercase md:px-4 md:py-2'>Contact Us</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
