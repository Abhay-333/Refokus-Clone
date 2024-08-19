import Navbar from './Components/Navbar.jsx'
import Work from './Components/Work.jsx'
import Stripes from './Components/Stripes.jsx'

function App() {

  return (
    <div className="h-screen w-full bg-zinc-900 font-['Satoshi Variable Bold'] font-semibold">
      <Navbar />
      <Work />
      <Stripes/>
    </div>
  )
}

export default App
