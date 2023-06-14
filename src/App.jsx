import Footer from "./component/Footer/Footer"
import Navbar from "./component/Navbar"
import { Hero , Galleries , Wedding , About } from "./component/Hero"


function App() {
  return (
    <div>
      <Navbar />
      <Hero /> 
      <About />
      <Wedding />
      <Galleries />
      <Footer />
    </div>
  )
}

export default App
