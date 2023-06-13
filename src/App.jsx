import Footer from "./component/Footer/Footer"
import About from "./component/Hero/About"
import Galleries from "./component/Hero/Galleries"
import Wedding from "./component/Hero/Wedding"
import Hero from "./component/Hero/hero"
import Navbar from "./component/Navbar"


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
