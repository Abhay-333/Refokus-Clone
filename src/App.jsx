import Navbar from './Components/Navbar.jsx'
import Work from './Components/Work.jsx'
import Stripes from './Components/Stripes.jsx'
import Products from './Components/Products.jsx'

function App() {

  return (
    <div className="w-full bg-zinc-900 font-['Satoshi Variable Bold'] font-semibold">
      <Navbar />
      <Work />
      <Stripes/>
      <Products/>
    </div>
  )
}

export default App
