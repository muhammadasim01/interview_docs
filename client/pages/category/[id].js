import { Pinterest } from "@mui/icons-material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Page from "../../components/Page";
const axios = require('axios').default;
function details() {
  const [showVerticleBar, setShowVerticleBar] = useState(false);

  const[posts,setPosts] =useState([]);
  const router=useRouter();
  const id=router.query.id;
  console.log("The is is",id);
  let URL=`http://localhost:5555/doc/${id}`
  console.log("The Complete URL is ",URL);
// const URL="http://localhost:5555/doc/react"
  useEffect(() => {
    (async()=>{
      const response=await axios.get(URL);
      const data=await response.data;
      setPosts(data);
      })
    ();
  },[URL])
  console.log("The Value in Post is",posts);
  return (
    <div className="flex">
    <div className="basis-3/12">
    <Navbar />
    </div>
    <div className="pt-10">
    <div className="bg-gray-200 h-5/6 w-4/5 self-center rounded-lg shadow-sm shadow-zinc-100 p-10 
    flex flex-col overflow-y-auto">
      <h1 className="grid justify-items-center text-3xl font-medium text-gray-500 underline">
      {posts[0]?.topic}
      </h1>
      
     {posts?.map((post,i)=>
     (<Page key={post._id} question={post.question} answer={post.answer}/>)) }
     
    </div>
    {/* {posts.map((post,i)=>(
    <Page key={i}  post={post} />
    ))} */}
    </div>
  </div>
  )
}

export default details;


// export async function getServerSideProps(context) {
//     const URL="http://localhost:5555/doc/632081a3612c059e0be60b21"
//     let mydata;
//     // await axios.get(URL).
//     // then((res) =>{
//     //     res.json()
//     // }).then((data) =>{

//     // }
    
//     // ).catch((error) =>{
//     //     console.log(error)
//     // })
//     const response=await axios.get(URL);
//     const data=await response.data;
//     console.log("SERVER DATA",data);
//     return {
//       props: {
//         data:mydata
//       }, // will be passed to the page component as props
//     }
//   }