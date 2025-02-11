
import { CheckIcon } from '@heroicons/react/20/solid'

function OurServices(){
    const includedFeatures = [
        'Access to vast amount of Information',
        'Request your own Articles to be published under your own name',
        'Build your carrer. Gives your ideas a platform',
        'Analytics of your published blogs',
      ];
      const pricing=`₹ 120`;
      const currency = `INR`;
    return(
<div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">No cap!</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Providing you good content requires research. That&apos;s why we have a payment based model to keep our services running
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Monthly Subscription</h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              We only support monthly payments. But we do offer you great features so that you don&apos;t feel regret of.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-transparent bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] bg-clip-text">What’s included</h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-[#ff7e5f]" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">per Month</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">{pricing}</span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">{currency}</span>
                </p>
                <a
                  href="#"
                  className="mt-10 block w-full rounded-md mainBgC px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#feb47b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get access
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Can&apos;t afford it? Still you can see all the free content. But you won&apos;t be able to request your own articles to be published.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default OurServices