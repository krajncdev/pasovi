import { contactList } from '@/config/constants';
import Image from 'next/image';

const Contact = () => {
  return (
    <section
      className='container mt-20 md:mt-30 lg:mt-40 mb-20 md:mb-60 mx-auto flex flex-col items-center'
      id='kontakt'
    >
      <h2 className='text-xl md:text-4xl font-bold text-black'>KONTAKT</h2>

      <ul className='grid gap-y-8 md:gap-y-0 md:grid-cols-3 mt-12'>
        {contactList.map((item) => (
          <li key={item.id} className='flex flex-col items-center gap-y-2'>
            <div className=' bg-bright_red rounded-full p-2'>
              <Image
                src={item.image}
                alt={item.image}
                className='h-8 w-8 sm:h-10 sm:w-10 md:h-8 md:w-8'
              />
            </div>
            <p className='text-base md:text-xl text-medium text-center'>
              {item.paragraph}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Contact;
