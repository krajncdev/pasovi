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
            Smo proizvajalci vrhunskih pasov za harmoniko že več kot 50 let. Vse
            naše izdelke ročno izdelujemo v naši domači delavnici. Uporabljamo
            najkakovostnejše materiale in združujemo tradicionalne tehnike z
            najnovejšimi inovacijami. Naši pasovi so udobni, vzdržljivi in
            prilagojeni posameznim glasbilom. Z veseljem vam pomagamo najti
            popoln pas, ki bo izpolnil vaše potrebe. Zahvaljujemo se vam za
            podporo skozi leta in veselimo se sodelovanja z vami!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
