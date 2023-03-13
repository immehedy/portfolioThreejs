import LeftContent from "./sections/LeftContent"
import MapChart from "./sections/MapChart"

const Contact = () => {
  return (
    <div className="h-screen snap-center text-white items-center">
      <div className="relative">
        <MapChart/>
        <LeftContent/>
      </div>
    </div>
  )
}

export default Contact