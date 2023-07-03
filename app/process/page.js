import Image from 'next/image';
const MainHero = () =>(
    <div className="grid items-center xl:gap-x-20 gap-y-10 grid-cols-1 xl:grid-cols-2 place-content-end mx-10 mt-16 ">
      <div>
        <div className='flex justify-center'>
          <Image src="/FFON.png" alt="ffo" width={400} height={200} className='lg:max-w-5xl' />
        </div>
        <ol className="list-decimal text-xl xl:text-4xl font-bold">
          <li className="my-6">Review ALL previous fraud events, for existing unaddressed weaknesses.</li>
          <li className="my-6">Search for and investigate exposed company data; leaks and stolen data.</li>
          <li className="my-6">Identify undiscovered weaknesses by simulating fraud events; zero risk, fully controlled and documented.</li>
          <li className="my-6">Correct identified weaknesses from the ground up.</li>
          <li className="my-6">Monitor in real time for red flags and suspicious activity.</li>
        </ol>
      </div>
      <div>
        <h1 className='text-4xl xl:text-6xl font-bold text-center underline underline-offset-8 orange_gt'>WHY THIS PROCESS?</h1>
        <ol className="list-none text-xl xl:text-4xl font-bold">
          <li className="my-6">Every single customer-facing day is a new possibility for exposure. We plan for long term instead of only putting today's fires out.</li>
          <li className="my-6">Executives do not truly see things the way a motivated fraudster will, no more than a patient understands a virus; Analysts no more than a doctor does. Fraud, like a virus, evolves and mutates and prevention efforts try to catch up. We look for weaknesses the way scammers do and find them first.</li>
          <li className="my-6">Alot of fraud happens with assistance, knowingly or not, at the ground level in companies; The lowest paid employees, due to pressure, opportunity and rationalization. Pressure and rationalization cannot be fixed but we remove opportunity.</li>
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