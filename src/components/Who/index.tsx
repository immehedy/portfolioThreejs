import LeftContent from "./sections/LeftContent"
import RightContent from "./sections/RightContent"

const Who = () => {
  return (
    <div className="h-screen text-white snap-center flex gap-2 items-center justify-around">
        <LeftContent/>
        <RightContent/>
    </div>
  )
}

export default Who