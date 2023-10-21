import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Plans", href: "#" },
  { name: "Company", href: "#" },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-backgroundColor">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>

              <svg
                width="94"
                height="36"
                viewBox="0 0 188.281 71.973"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  id="svgGroup"
                  strokeLinecap="round"
                  fillRule="evenodd"
                  fontSize="9pt"
                  stroke="#10E3A7"
                  strokeWidth="0.25mm"
                  fill="#10E3A7"
                  style={{
                    stroke: "#324A43",
                    strokeWidth: "0.25mm",
                    fill: "#324A43",
                  }}
                >
                  <path
                    d="M 176.367 0 L 188.281 0 L 188.281 71.973 L 176.367 71.973 L 148.145 22.364 L 148.145 71.973 L 136.23 71.973 L 136.23 0 L 148.145 0 L 176.367 49.61 L 176.367 0 Z M 45.02 8.887 L 11.914 8.887 L 11.914 31.543 L 41.992 31.543 L 41.992 39.551 L 11.914 39.551 L 11.914 63.086 L 45.02 63.086 L 45.02 71.973 L 0 71.973 L 0 0 L 45.02 0 L 45.02 8.887 Z M 88.672 71.973 L 61.426 71.973 L 61.426 0 L 83.105 0 Q 92.188 0 99.072 2.881 A 36.152 36.152 0 0 1 106.076 6.725 A 30.085 30.085 0 0 1 110.498 10.547 A 31.452 31.452 0 0 1 117.285 21.436 A 36.062 36.062 0 0 1 119.531 33.985 A 70.255 70.255 0 0 1 119.263 40.286 Q 118.817 45.234 117.627 49.17 A 46.564 46.564 0 0 1 115.764 54.289 Q 114.441 57.328 112.793 59.717 A 28.074 28.074 0 0 1 109.577 63.618 A 22.027 22.027 0 0 1 106.201 66.407 Q 102.539 68.848 99.121 70.069 A 35.774 35.774 0 0 1 96.243 70.969 Q 94.464 71.439 92.871 71.631 A 80.978 80.978 0 0 1 91.547 71.781 Q 90.216 71.919 89.311 71.958 A 15.039 15.039 0 0 1 88.672 71.973 Z M 73.145 63.379 L 84.766 63.379 Q 93.342 63.379 98.477 59.432 A 16.28 16.28 0 0 0 101.953 55.762 A 25.625 25.625 0 0 0 105.268 48.768 Q 106.309 45.438 106.796 41.391 A 64.511 64.511 0 0 0 107.227 33.692 A 37.294 37.294 0 0 0 106.152 24.805 A 18.928 18.928 0 0 0 102.002 16.846 Q 98.926 13.282 93.652 11.084 A 25.155 25.155 0 0 0 89.056 9.703 Q 85.098 8.887 79.98 8.887 L 73.145 8.887 L 73.145 63.379 Z"
                    vector-effect="non-scaling-stroke"
                  />
                </g>
              </svg>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-10 sm:py-8 lg:py-8">
          <img
            src="https://images.squarespace-cdn.com/content/v1/650f36695ef4386d769fcf46/1696640265091-OQA379C7JSSCL2ELQWKO/image-asset.jpeg"
            alt="House Garden"
            className="rounded-3xl shadow-2xl sm:rounded-6xl sm:shadow-3xl max-h-60 sm:max-h-52 xs:max-h-80 mx-auto"
          />
        </div>
        <div className="mx-auto max-w-2xl py-20 sm:py-20 lg:py-6">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Transform your relationship with your outdoor space.{" "}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Our Mission <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              The DIY approach to Professional Landscaping
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We aim to turn each homeowner's unique vision of a dream yard into
              an attainable reality, step by step. We believe in a personalized,
              consultative approach that values customer input as much as expert
              recommendations.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-buttonPrimary px-3.5 py-2.5 text-sm font-semibold text-buttonTextPrimary shadow-sm hover:bg-buttonHover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
