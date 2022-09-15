import React from "react";
import { NftCardWithButton } from "./NftCard";

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
 
];

export default function Discover() {
  return (
    <div className="flex flex-col my-10  px-10 ">
      <div className="max-w-[608px]">
          <h1 className="text-5xl sm:text-[80px]">Discover our latest NFTs </h1>
          <p className="text-xl mt-2">  
          Discover our latest featured collection. Purchase a crypto Calf today and hel save the life of a calf.
          </p>
        </div>
       
      <div className="flex flex-wrap mt-8 justify-between  items-center ">
        {/* <div className="grid grid-flow-row grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  w-full justify-center items-center  grid-rows-4 gap-10"> */}

        {data.map((n, index) => {
          return  <NftCardWithButton image={n.image} key={index} />;
        })}
      </div>
    </div>
  );
}
