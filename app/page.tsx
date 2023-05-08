import Image from 'next/image';

import { AboutUs, Contact, Hero, MostSold } from './components';
import WaveUp from '@/public/wave-up.svg';
import PageLayout from '@/components/PageLayout';

export default function Home() {
  return (
    <PageLayout>
      <Hero />
      <Image src={WaveUp} alt='wave-up' className='w-full' />
      {/* @ts-expect-error Async Server Component */}
      <MostSold />
      <AboutUs />
      <Contact />
    </PageLayout>
  );
}
