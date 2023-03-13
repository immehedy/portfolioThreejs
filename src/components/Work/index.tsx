import LeftContent from "./sections/LeftContent"
import RightContent from "./sections/RightContent"

const Work = () => {
  return (
    <div className="h-screen snap-center text-white flex gap-2 items-center justify-around">
      <LeftContent/>
      <RightContent/>
    </div>
  )
}

export default Work