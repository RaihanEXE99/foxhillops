import Image from 'next/image';
const MainHero = () =>(
    <div className="grid items-center xl:gap-x-20 gap-y-10 grid-cols-1 place-content-end mx-10 mt-16 ">
      <div>
        <div className='flex justify-center'>
          <Image src="/FFON.png" alt="ffo" width={400} height={200} className='lg:max-w-5xl' />
        </div>
        <h1 className='text-bold text-lg xl:text-5xl text-center italic'>Schedule a free 15 minute consultation call to discuss your fraud concerns with our team.</h1>
      </div>
      <div style={{height:"630px"}}><iframe src="https://meeting.calendarhero.com/meeting/new/649dd1eb8ca53900127ee2ec/meeting?embedded=true" width="100%" height="100%" frameborder="0"></iframe></div>
    </div>
  );

export default function Page() {
    return (
        <div className='flex flex-col'>
            <main className="flex flex-col items-center mt-12 lg:mt-28 ">
            <div className="gradient_bg"></div>
            <MainHero />
            </main>
        </div>
    )
  }