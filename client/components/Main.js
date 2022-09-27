import Navbar from "./Navbar"
import Page from "./Page"
function Main() {
  return (
    <div className="flex">
      <div className="basis-3/12">
      <Navbar />
      </div>
      <div className="pt-10">
      <Page />
      </div>
    </div>
  )
}

export default Main