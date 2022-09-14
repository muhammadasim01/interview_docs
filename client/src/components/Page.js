import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
function Page() {
  const [showVerticleBar, setShowVerticleBar] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  return (
    <div className="bg-white h-5/6 w-1/2 self-center rounded-lg shadow-sm shadow-zinc-100 p-10 flex flex-col">
      <h1 className="grid justify-items-center text-3xl font-medium text-gray-500 underline">
        REACT
      </h1>
      <div
        className={`pt-5 grid justify-items-start `}
        onMouseEnter={() => setShowVerticleBar(true)}
        onMouseLeave={() => setShowVerticleBar(false)}
      >
        <div className="flex justify-between items-center w-[45vw]">
          <h2 className="text-xl font-semibold">What is JSX?</h2>
          <i
            className="flex-end hover:cursor-pointer"
            onClick={() => setShowPopUp(true)}
          >
            {showVerticleBar && <BsThreeDotsVertical />}
          </i>
        </div>
        <p className="text-sm font-semibold text-gray-600 leading-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa tenetur
          est tempore adipisci, voluptatem blanditiis, nam voluptas cupiditate
          perspiciatis optio quod. Consectetur, inventore explicabo error eaque
          a magni beatae rem!
        </p>
      </div>
      {showPopUp&&<div
        className="popup bg-[whitesmoke] rounded-sm border-gray border-2 w-[6rem] p-2"
        style={{ position: "relative" ,left:"37rem",bottom: "4.5rem"}}
      >
        <div className="edit mb-1  w-14">Edit</div>
        <div className="delete  w-14">Delete</div>
      </div>}
    </div>
  );
}

export default Page;
