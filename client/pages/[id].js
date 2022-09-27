import { useRouter } from "next/router";

function details() {
  const router=useRouter();
  return (
    <div>
        <h1>Detail Page of {router.query.id}</h1>
    </div>
  )
}

export default details;