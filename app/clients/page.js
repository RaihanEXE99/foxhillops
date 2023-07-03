import Image from 'next/image';
const MainHero = () =>(
    <div className="grid items-center xl:gap-x-20 gap-y-10 grid-cols-1 xl:grid-cols-2 place-content-end mx-10 mt-16 ">
      <div>
        <div className='flex justify-center'>
          <Image src="/FFON.png" alt="ffo" width={400} height={200} className='lg:max-w-5xl' />
        </div>
        <h1 className='text-bold text-xl xl:text-5xl text-center italic'>We do not sell fluff or hyperbole. We guarantee fewer losses.</h1>
      </div>
      <div>
        <h1 className='text-4xl xl:text-6xl font-bold text-center underline underline-offset-8 orange_gt'>CLIENT CONFIDENTIALITY</h1>
        <ol className="list-none text-xl xl:text-4xl font-bold">
          <li className="my-6">Due to the sensitive nature of our clients' needs, as a matter of policy, we do not publicize previous clients.</li>
          <li className="my-6">Quite simply, we help clients with the most severe, often business critical, fraud concerns. We do not feel it is necessary to publicize which companies entrust us with those concerns.</li>
          <li className="my-6">We are willing to do without the social proof for our clients' benefit, whether it be just a theoretical concern or not.</li>
        </ol>
      </div>
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