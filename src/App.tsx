import Hero from "./components/Hero"
import Who from "./components/Who"

function App() {
  return (
    <div className="h-screen snap-mandatory snap-y scroll-smooth overflow-y-auto">
      <Hero/>
      <Who/>
    </div>
  )
}

export default App
