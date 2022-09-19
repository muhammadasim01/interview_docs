import React, { useState } from "react";
import { BiTrashAlt } from "react-icons/bi";
import { FiEdit3 } from "react-icons/fi";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";

const Content = ({ catagory, question, answer }) => {
  const [showVerticleBar, setShowVerticleBar] = useState(false);
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <div
        className={`pt-5 grid justify-items-start `}
        onMouseEnter={() => setShowVerticleBar(true)}
        onMouseLeave={() => setShowVerticleBar(false)}
      >
        <div className="flex justify-between items-center w-[45vw]">
          <h2 className="text-xl font-medium">{question}</h2>
          <i className="flex-end ">
            {showVerticleBar && (
              <div className="flex justify-between w-11">
                <i className="cursor-pointer">
                  <FiEdit3 />
                </i>
                <i className="cursor-pointer">
                  <BiTrashAlt />{" "}
                </i>
              </div>
            )}
          </i>
        </div>
        <p className="text-sm font-normal text-gray-600 leading-6 font-sans">
          {answer}
        </p>
      </div>
    </Box>
  );
};

export default Content;
