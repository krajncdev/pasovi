import Image from 'next/image';
import React from 'react';

import Delavnica from '@/public/aboutus/delavnica.jpg';

const AboutUs = () => {
  return (
    <section
      id='o-nas'
      className='bg-dark flex justify-center py-10 md:py-20 lg:py-40 mt-20 lg:mt-60'
    >
      <div className='container grid md:grid-cols-2 md:gap-8 lg:gap-12 xl:gap-24 justify-items-center md:justify-items-start '>
        <Image
          src={Delavnica}
          alt='delavnica-jpg'
          className='rounded-lg aspect-[5/6] object-cover w-2/3 md:w-full md:max-h-[600px] md:max-w-[500px] md:justify-self-end'
        />
        <div className='text-white  md:max-h-[600px] md:max-w-[500px] justify-self-beg mt-12 md:mt-0'>
          <h2 className='text-xl md:text-4xl font-bold'>O NAS</h2>
          <p className='md:text-2xl mt-4 text-base md:mt-12'>
            Aliquam tristique in sapien ac vestibulum. Mauris vulputate at leo a
            sollicitudin. Curabitur sollicitudin egestas lorem, in mollis leo
            mollis id. Etiam in nisl vehicula.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
