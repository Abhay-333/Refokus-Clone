import Navbar from './Components/Navbar.jsx'
import Work from './Components/Work.jsx'
import Stripes from './Components/Stripes.jsx'
import Products from './Components/Products.jsx'
import Marquees from './Components/Marquees.jsx'
import Cards from './Components/Cards.jsx'
import LocomotiveScroll from 'locomotive-scroll';


function App() {
  const locomotiveScroll = new LocomotiveScroll();
  
  return (
    <div className="w-full bg-zinc-900 font-['Satoshi Variable Bold'] font-semibold">
      <Navbar />
      <Work />
      <Stripes/>
      <Products/>
      <Marquees/>
      <Cards/>
    </div>
  )
}

export default App
