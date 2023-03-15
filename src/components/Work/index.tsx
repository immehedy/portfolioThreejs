import LeftContent from "./sections/LeftContent"

const Work = () => {
  return (
    <div className="h-screen snap-center text-white flex gap-2 items-center justify-around">
      <LeftContent/>
      <div>
      <img
        src="/img/web.png"
        className="h-[600px] w-full animate-bouncing-slow"
        alt="astronot"
      />
      </div>
    </div>
  )
}

export default Work