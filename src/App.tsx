import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Work from "./components/Work";

function App() {
  return (
    <div className="h-screen snap-mandatory snap-y scroll-smooth overflow-y-auto scrollbar-hide bg-main-bg">
      <Hero />
      <Who />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
