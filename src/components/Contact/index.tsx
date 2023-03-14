import { ToastContainer } from "react-toastify"
import LeftContent from "./sections/Form"
import MapChart from "./sections/MapChart"

const Contact = () => {
  return (
    <div className="h-screen snap-center text-white">
      <div className="relative">
        <MapChart/>
        <LeftContent/>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}

export default Contact