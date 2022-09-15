import React from "react";
import Footer from "../components/Footer";
import NavComponent from "../components/NavComponent";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'


export default function adopt() {
  return (
    <>
      <div className="relative ">
        <div className="absolute  -z-10 top-[-50rem] -left-[40rem] ">
          <img src="Group47.svg" className="relative top-[20rem]" />
        </div>
      </div>

      <NavComponent />
      <div className="relative bg-[#060707]">
      <nav className=" relative  flex justify-between z-10 items-center px-5 py-5 w-full ">
        <div className="flex font-IBMPlexBold">

        </div>
      </nav>
      <div className=" items-center min-h-screen flex justify-around relative flex-wrap px-5">
        <>
          <div className="bg-[#15d98bfd] h-[362px] w-[362px] absolute rounded-full blur-[120px] filter -top-[100px]  -left-20 opacity-75"></div>
        </>
        <div className="max-w-xl relative">
          <h1 className="font-IBMPlexBold text-6xl max-w-md text-left uppercase">
          Adopt an orphan elephant, rhino or giraffe <span className="">for yourself or as a gift</span> 
          </h1>
          <p className="font-IBMPlexRegular text-left">
            - offering life and hope to an animal in need
          </p>
          <div className="hidden md:block py-5">
       
          </div>
        </div>
        <div>
          <img
            width="500"
            height="500"
            alt="bg-image"
            src="https://i.ibb.co/ykwtGsd/pexels-antony-trivet-8466448.jpg"
          />
        </div>
      </div>
    </div>

    <div className="flex space-x-2 mt-5 justify-center">
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md border border-green-300 bg-green-700 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-900 focus:outline-none focus:ring-1 focus:ring-green-50 focus:ring-offset-1 focus:ring-offset-green-50">
         All species
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  species 1
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  species 2
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  species 3
                </a>
              )}
            </Menu.Item>
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full px-4 py-2 text-left text-sm'
                    )}
                  >
                    species 4
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
 
  <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md border border-green-300 bg-green-700 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-900 focus:outline-none focus:ring-1 focus:ring-green-50 focus:ring-offset-1 focus:ring-offset-green-50">
         All ages
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  0-5 months
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  5-10 months
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  10-1 year
                </a>
              )}
            </Menu.Item>
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full px-4 py-2 text-left text-sm'
                    )}
                  >
                    1 year plus
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>


  <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md border border-green-300 bg-green-700 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-900 focus:outline-none focus:ring-1 focus:ring-green-50 focus:ring-offset-1 focus:ring-offset-green-50">
         All genders
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Male
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Female
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  
  <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md border border-green-300 bg-green-700 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-900 focus:outline-none focus:ring-1 focus:ring-green-50 focus:ring-offset-1 focus:ring-offset-green-50">
         All rescue locations
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Location 1
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Location 2
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Location 3
                </a>
              )}
            </Menu.Item>
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full px-4 py-2 text-left text-sm'
                    )}
                  >
                    Location 4
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>

  <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md border border-green-300 bg-green-700 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-900 focus:outline-none focus:ring-1 focus:ring-green-50 focus:ring-offset-1 focus:ring-offset-green-50">
         All current locations
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Location 1
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Location 2
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 Location 3
                </a>
              )}
            </Menu.Item>
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full px-4 py-2 text-left text-sm'
                    )}
                  >
                    Location 4
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
 
    
</div>

      <div className="flex flex-wrap mt-8 space-y-7 justify-between  items-center ">

      <div className="max-w-lg p-6 rounded-md shadow-md bg-green-800">
        <img
          src="https://i.ibb.co/PxLZ9v7/pexels-russell-towers-8942378.jpg"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            Title
          </span>
          <h2 className="text-xl font-semibold tracking-wide">Semi</h2>
        </div>
        <p className="text-gray-300">
        Her injuries must have caused her great discomfort, but she stoically faced the pain and cooperated with the Keepers treatments. 
        She took to her milk bottle right away, supplementing her diet with nutritious greens that were placed in her stable. 
        A few good days expanded to a few weeks, and slowly, she regained her strength.
        </p>
        <div className="flex items-center justify-center">
          <button
            type="button"
            className="flex items-center justify-center w-1/2 p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-white"
          >
            Read more
          </button>
        </div>
      </div>

      <div className="max-w-lg p-6 rounded-md shadow-md bg-green-800">
        <img
          src="https://i.ibb.co/PDZdV1x/pexels-pixabay-70080.jpg" 
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            Title
          </span>
          <h2 className="text-xl font-semibold tracking-wide">Asante</h2>
        </div>
        <p className="text-gray-300">
        She must have been in excruciating pain from her wounds, but she bravely endured it and helped the Keepers treat her. 
        She quickly adapted to drinking milk from a bottle and supplemented her diet with the wholesome greens that were put in her stable. 
        She had a few good days that turned into a few weeks as she gradually regained her vigor.
        </p>
        <div className="flex items-center justify-center">
          <button
            type="button"
            className="flex items-center justify-center w-1/2 p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-white"
          >
            Read more
          </button>
        </div>
      </div>

      <div className="max-w-lg p-6 rounded-md shadow-md bg-green-800">
        <img
          src="https://i.ibb.co/LSSqhYz/pexels-casey-allen-16040.jpg"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            Title
          </span>
          <h2 className="text-xl font-semibold tracking-wide">Kifaru</h2>
        </div>
        <p className="text-gray-300">
        He was running around aimlessly, there being no sign of his mother.  Our Keepers monitored the little rhino until dusk from a good distance so as not to disturb him or the possibility of his mother returning, and when there was still no sign of the mother, something had to be done to spare him from being taken by predators during the night.
        </p>
        <div className="flex items-center justify-center">
          <button
            type="button"
            className="flex items-center justify-center w-1/2 p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-white"
          >
            Read more
          </button>
        </div>
      </div>

      <div className="max-w-lg p-6 rounded-md shadow-md bg-green-800">
        <img
          src="https://i.ibb.co/J2BgByq/pexels-roman-odintsov-11760852.jpg"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            Title
          </span>
          <h2 className="text-xl font-semibold tracking-wide">Tulivu</h2>
        </div>
        <p className="text-gray-300">
        We do not know what happened to the calfs mother or why she was left alone. No elephant carcass were found in the immediate area, human-wildlife conflict was an unlikely culprit. Possibly, her mother died elsewhere and she trailed a herd until eventually dropping from their ranks. Perplexingly, she was in good condition, unlike so many orphans who spent days without their mothers milk before being rescued.
        </p>
        <div className="flex items-center justify-center">
          <button
            type="button"
            className="flex items-center justify-center w-1/2 p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-white"
          >
            Read more
          </button>
        </div>
      </div>

      <div className="max-w-lg p-6 rounded-md shadow-md bg-green-800">
        <img
          src="https://i.ibb.co/sC7wNTx/pexels-magda-ehlers-771406.jpg"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            Title
          </span>
          <h2 className="text-xl font-semibold tracking-wide">Zee</h2>
        </div>
        <p className="text-gray-300">
        The mother of the calf is unknown, as is the reason she was abandoned. 
        Conflict between people and wildlife was the unlikely offender. 
        It's possible that her mother passed away somewhere else, and she followed the herd until she eventually fell out of favor. 
        She was in good shape, which was puzzling.
        </p>
        <div className="flex items-center justify-center">
          <button
            type="button"
            className="flex items-center justify-center w-1/2 p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-white"
          >
            Read more
          </button>
        </div>
      </div>

      <div className="max-w-lg p-6 rounded-md shadow-md bg-green-800">
        <img
          src="https://i.ibb.co/x5MN9KQ/pexels-james-lee-5120281.jpg"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            Title
          </span>
          <h2 className="text-xl font-semibold tracking-wide">Shupavu</h2>
        </div>
        <p className="text-gray-300">
        He was pacing around aimlessly since his mother was nowhere to be found. In order to avoid disturbing him or the potential that his mother would return, our Keepers kept an eye on the young calf until sunset. However, when the mother was still nowhere to be seen, something had to be done to protect him from nighttime predators.
        </p>
        <div className="flex items-center justify-center">
          <button
            type="button"
            className="flex items-center justify-center w-1/2 p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-white"
          >
            Read more
          </button>
        </div>
      </div>







    </div>

      <Footer />
    </>
  );
}
