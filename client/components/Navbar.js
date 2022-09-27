import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from "axios";
import { useEffect, useState } from 'react';
function Navbar() {
  const[lists,setLists] =useState([]);
  const router =useRouter();
  const Category=(item)=>{
  router.push(`/category/${item.toLowerCase()}`);
  }
  useEffect(() => {
    (async()=>{const response= await axios.get("http://localhost:5555/getcatagory");
    const list= await response.data;
    // console.log("The Category=",list);
    setLists(list)})();
    
  }, [])
  
  // const lists=['React','Express','Node','MongoDB','React-Native'];
  return (
    <div className="navbar" style={{minHeight:"100vh",display: 'flex',justifyContent: 'center',alignItems: 'center',cursor:"pointer"}}>
    <nav>
        <ul style={{minWidth:"10vw" ,overflow:"auto", height:"50vh"}}>
          {lists?.map((item)=>(
             <li onClick={()=>Category(item)} className="p-3  border-b-2 border-gray-200">{item.toUpperCase()}</li>
          )
            )}
            {/* <Link className="p-3  border-b-2 border-gray-200">Next js</Link> */}
            {/* <li className="p-3  border-b-2 border-gray-200">Express js</li>
            <li className="p-3  border-b-2 border-gray-200">Express js</li>
            <li className="p-3  border-b-2 border-gray-200">Express js</li>
            <li className="p-3  border-b-2 border-gray-200">Express js</li>
            <li className="p-3  border-b-2 border-gray-200">Express js</li>
            <li className="p-3  border-b-2 border-gray-200">Express js</li>
            <li className="p-3  border-b-2 border-gray-200">Express js</li>
            <li className="p-3  border-b-2 border-gray-200">Express js</li>
            <li className="p-3  border-b-2 border-gray-200">Express js</li> */}
        </ul>
        
    </nav>
    </div>
  );
}
  
  export default Navbar;
  // }className="flex flex-grow p-14 items-center h-full cursor-pointer overflow-y-auto border-4 border-black"