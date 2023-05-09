import { navigationList } from '@/config/constants';

const HomeLoading = () => {
  return (
    <>
      <header className='h-28 w-full flex bg-dark items-center justify-center'>
        <div className='flex items-center container'>
          <div className='h-1/2  flex-1 flex justify-start gap-4 items-center'>
            <div className='h-8 w-8 rounded-full bg-gray-200 animate-pulse'></div>
            <div className='w-24 h-6 bg-gray-200 animate-pulse'></div>
          </div>

          <ul className='flex gap-4 flex-1 justify-center'>
            {navigationList.map((item) => (
              <li key={item.id} className='text-white text-xs'>
                {item.content.toUpperCase()}
              </li>
            ))}
          </ul>

          <ul className='flex-1 flex gap-3 justify-end'>
            {Array.from({ length: 3 }, (_, index) => (
              <li
                key={index}
                className='h-4 w-4 rounded-full animate-pulse bg-gray-200'
              ></li>
            ))}
          </ul>
        </div>
      </header>
      <main className='h-[calc(90vh)] md:h-[calc(100vh-5rem)] flex w-full justify-center items-center'>
        <div
          className='animate-spin inline-block h-12 w-12 md:w-16 md:h-16 border-[3px] md:border-[5px] border-current border-t-transparent text-bright_red rounded-full'
          role='status'
          aria-label='loading'
        >
          <span className='sr-only'>Loading...</span>
        </div>
      </main>
    </>
  );
};

export default HomeLoading;
