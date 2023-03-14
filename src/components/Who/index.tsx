import LeftContent from "./sections/LeftContent"
import RightContent from "./sections/RightContent"

const Who = () => {
  return (
    <div className="h-screen text-white snap-center grid grid-cols-2 items-center">
        <LeftContent/>
        <RightContent/>
    </div>
  )
}

export default Who