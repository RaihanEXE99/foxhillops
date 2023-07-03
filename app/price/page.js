import Image from 'next/image';
const PricingCard = ({ title, description, price,perwhat,lst }) => (
  <div className="flex flex-col p-6 mx-3 max-w-lg text-center text-gray-100 bg-gray-900 rounded-lg border border-orange-500 shadow">
    <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
    <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">{description}</p>
    <div className="flex justify-center items-baseline my-8">
      <span className="mr-2 text-5xl font-extrabold">{price}</span>
      <span className="text-gray-500 dark:text-gray-400">/{perwhat}</span>
    </div>
    <ul role="list" className="mb-8 space-y-4 text-left">
      {lst.map((i,e)=>{
        return <li class="flex items-center space-x-3 " key={e}>               
        <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span>{i}</span>
      </li>
      })}
      {/* <li class="flex items-center space-x-3">               
          <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
          <span>e-commerce/retail b2c </span>
      </li>
      <li class="flex items-center space-x-3"> 
          <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
          <span>b2b wholesale clients</span>
      </li> */}
    </ul>
    <a
      href="#"
      className="transition ease-in-out delay-150 duration-300 hover:scale-90 text-white bg-orange-600 hover:bg-red-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
    >
      Get started
    </a>
  </div>
);

const MainHero = () =>(
    <div className="grid items-center xl:gap-x-20 gap-y-10 grid-cols-1 xl:grid-cols-2 place-content-end mx-10 mt-16 ">
      <div>
        <div className='flex justify-center'>
          <Image src="/FFON.png" alt="ffo" width={400} height={200} className='lg:max-w-5xl' />
        </div>
        <h1 className='text-bold text-xl xl:text-5xl text-center italic'>We do not sell fluff or hyperbole. We guarantee fewer losses.</h1>
      </div>
      <div>
        <h1 className='text-5xl xl:text-6xl font-bold text-center underline underline-offset-8 orange_gt'>OUR GUARANTEE</h1>
        <ol className="list-decimal text-2xl xl:text-4xl font-bold">
          <li className="my-6">Our services are primarily focused on finding, then fixing weaknesses to prevent losses. That is what we do.</li>
          <li className="my-6">We take the confidentiality of clients, especially regarding potential fraud exposure, as priority number one.</li>
          <li className="my-6">We take fraud prevention **very** seriously and it is already serious enough. We **never** exaggerate.</li>
          <li className="my-6">We are not in the business of being paid to do nothing. If there is nothing we can do, we do not charge.We are not in the business of being paid to do nothing. If there is nothing we can do, we do not charge.</li>
          <li className="my-6">If we promise specific results and we dont deliver, we refund.</li>
        </ol>
      </div>
      {/* <div>
        <h1 className='text-5xl xl:text-6xl font-bold text-center underline underline-offset-8 orange_gt'>PRICING</h1>
        <ol className="list-disc text-2xl xl:text-4xl font-bold">
          <li className="my-6">
            <h1 className='text-bold text-3xl text-yellow-500'>[$2,000/client] SMB Intro Review</h1>
            <p>Typically, e-commerce/retail b2c or b2b wholesale clients, 5-50 employees; however we can and will work with any customer facing business.</p>
          </li>
          <li className="my-6">
            <h1 className='text-bold text-3xl text-yellow-500'>[$4,000/client] Bank Intro Review</h1>
            <p>Typically, e-commerce/retail b2c or b2b wholesale clients, 5-50 employees; however we can and will work with any customer facing business.</p>
          </li>
        </ol>
      </div> */}
    </div>
  );

export default function Page() {
    return (
        <div className='flex flex-col'>
            <main className="flex flex-col items-center mt-12 lg:mt-28 ">
            <div className="gradient_bg"></div>
            <MainHero />
            <section>
        <div className="py-8 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-3xl md:text-6xl tracking-tight font-extrabold text-white">
              OUR <span className="orange_gt">PRICING</span>
            </h2>
            <p className="mb-5 font-light text-gray-500 text-md md:text-xl dark:text-gray-400">
              We do not sell fluff or hyperbole. We guarantee fewer losses
            </p>
          </div>
          <div className="space-y-8 lg:grid lg:grid-cols-3 gap-x-6 xl:gap-10 lg:space-y-0">
            <PricingCard
              title="SMB Intro Review"
              description="Typically, e-commerce/retail b2c or b2b wholesale clients, 5-50 employees; however we can and will work with any customer facing business."
              price="$2000"
              perwhat="CLIENT"
              lst ={["e-commerce/retail b2c","b2b wholesale"]}
            />
            <PricingCard
              title="Bank Intro Review"
              description="Banks have far far more data to review and far higher exposure. We can work with banks of any size in any country."
              price="$4000"
              perwhat="CLIENT"
              lst = {["banks of any size ","any country"]}
            />
            <PricingCard
              title="Monthly Retainer"
              description="Including but not limited to same day response and ongoing dark web monitoring/osint for exposed data."
              price="$2750"
              perwhat="MONTH"
              lst = {["dark web monitoring","osint for exposed data"]}
            />
            {/* Add more PricingCard components for different plans */}
          </div>
        </div>
      </section>
            </main>
        </div>
    )
  }