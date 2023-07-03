import Image from 'next/image';
import Link from 'next/link';

const MainHero = () =>(
  <div className="grid xl:gap-x-20 gap-y-10 grid-cols-1 xl:grid-cols-2 place-content-end mx-10 mt-16 ">
    <div>
      <div className='flex justify-center'>
        <Image src="/FFON.png" alt="ffo" width={400} height={200} className='lg:max-w-5xl' />
      </div>
      <ul className="list-disc text-2xl xl:text-4xl font-bold">
        <li className="my-6">YTD 2023, there's been 190,000+ reports of Identity Theft.</li>
        <li className="my-6">YTD 2023 70% of fraud incident losses were &lt; $2000 dollars. 14% of incidents were more than $10,000.</li>
        <li className="my-6">Account takeovers have affected 22% of U.S. adults: average loss $12,000</li>
        <li className="my-6">Median losses for small businesses: $200,000; Average of 5% revenue lost to fraud, annually.</li>
      </ul>
    </div>
    <div>
      <h1 className='text-5xl xl:text-6xl font-bold text-center underline underline-offset-8 orange_gt'>CRITICAL QUESTIONS THAT WE ANSWER</h1>
      <ol className="list-decimal text-2xl xl:text-4xl font-bold">
        <li className="my-6">Could outside party(s) cause you 6 figures in losses, or more?</li>
        <li className="my-6">Are preventable fraud events being prevented? has it been good policy or just good luck so far?</li>
        <li className="my-6">Are your internal controls able to grow with an evolving threat or is your policy outdated?</li>
      </ol>
      <h1 className='text-3xl xl:text-5xl font-bold text-center text-yellow-600 italic '>We do not sell fluff or hyperbole. We guarantee less losses.</h1>
      <Link className="flex justify-center mt-6 " href="/"> 
          <button class=" font-bold text-xl xl:text-3xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-orange-500 hover:bg-red-500 duration-300">
            <h1>LOSSES PREVENTED, GUARANTEED.</h1>
            <p className='animate-pulse'>CLICK HERE TO HIRE US</p>
          </button>
      </Link>
    </div>
  </div>
);
export default function Home() {
  return (
    <div className='flex flex-col'>
      <main className="flex flex-col items-center mt-12 lg:mt-28 ">
      <div className="gradient_bg"></div>
      <MainHero />
      </main>
    </div>
  );
}