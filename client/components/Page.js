import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiTrashAlt } from "react-icons/bi";
import { FiEdit3 } from "react-icons/fi";
function Page({question,answer}) {
  const [showVerticleBar, setShowVerticleBar] = useState(false);
  return (
    <div
    className={`pt-5 grid justify-items-start `}
    onMouseEnter={() => setShowVerticleBar(true)}
    onMouseLeave={() => setShowVerticleBar(false)}
  >
    <div className="flex justify-between items-center w-[45vw]">
      <h2 className="text-xl font-semibold">{question}</h2>
      <i
        className="flex-end hover:cursor-pointer"
        onClick={() => setShowPopUp(true)}
      >
        {showVerticleBar && (<div className="flex justify-between w-11">
            <i className="cursor-pointer">
              <FiEdit3 />
            </i>
            <i className="cursor-pointer">
              <BiTrashAlt />
            </i>
          </div>)}
      </i>
    </div>
    <p className="text-sm font-semibold text-gray-600 leading-6">
    {answer}
    </p>
  </div>
  );
}

export default Page;