import Footer from "./component/Footer/Footer"
import Navbar from "./component/Navbar"
import HomePage from "./pages/HomePage"
import { useRoutes } from "raviger"
import Room from "./pages/Room"
import NotFound from "./pages/404"
import ContactPage from "./pages/ContactPage"


// npm install raviger
const route = {
  '/'  : ()=> <HomePage />,
  '/rooms-and-suites' : ()=> <Room/>,
  '/contacts' : ()=> <ContactPage />,
  '*' : ()=> <NotFound />
}
function App() {
  const currentPage = useRoutes (route)
  return (
    <div>
      <Navbar />
      {currentPage}
      <Footer />
    </div>
  )
}

export default App
