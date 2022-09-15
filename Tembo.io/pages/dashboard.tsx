import React from "react";

import Footer from "../components/Footer";

import NavComponent from "../components/NavComponent";
import { NftCardWithButton } from "../components/NftCard";

const data = [
  {
    image: "1.png",
  },
  {
    image: "2.png",
  },
  {
    image: "3.png",
  },
  {
    image: "4.png",
  },
  {
    image: "5.png",
  },
  {
    image: "six.png",
  },
  {
    image: "7.png",
  },
  {
    image: "8.png",
  },
  {
    image: "9.png",
  },

];


export default function dashboard() {
  return (
    <>
      <div className="relative ">
        <div className="absolute  -z-10 top-[-50rem] -left-[40rem] ">
          <img src="Group47.svg" className="relative top-[20rem]" />
        </div>
      </div>

      <NavComponent />

      <div className="flex items-center justify-center mt-5">
  <div className="inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="group">
    <button type="button" className="rounded-l inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out">My Contributions</button>
    <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out">Digital Certificate</button>
    <button type="button" className=" rounded-r inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out">My Orphan NFT Journey</button>
  </div>
</div>


      <div className="flex flex-col my-10  px-10 ">
      <div className="max-w-[608px]">
          <h1 className="text-5xl sm:text-[80px]">Non-Fungible Journey</h1>
          <p className="text-xl mt-2">  
          Claim weekly NFT-progress Airdrops as you embark on a non-Fungible with your orphan as he grows from the time in captive care to their ultimate release back in the wild. 
          </p>
        </div>
        <div className="border-2 min-h-[300px] sm:py-4 min-w-[250px] rounded-xl  sm:rounded-md ">
      <div className="flex flex-wrap mt-8 justify-between ml-10 mr-10 mt-5 mb-7 items-center ">
        {/* <div className="grid grid-flow-row grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  w-full justify-center items-center  grid-rows-4 gap-10"> */}

        {data.map((n, index) => {
          return  <NftCardWithButton image={n.image} key={index} />;
        })}
      </div>
      </div>

      <div className="border-2 min-h-[300px] sm:py-4 min-w-[250px] mt-10 rounded-xl  sm:rounded-md ">
  Digital Certificate Section
 
      </div>

      <div className="border-2 min-h-[300px] sm:py-4 min-w-[250px] mt-10 rounded-xl  sm:rounded-md ">
    My Contribution section

 
      </div>

      <div className="border-2 min-h-[300px] sm:py-4 min-w-[250px] mt-10 rounded-xl  sm:rounded-md ">
    Daily blog section 
 
      </div>

    </div>
      <Footer />
    </>
  );
}
