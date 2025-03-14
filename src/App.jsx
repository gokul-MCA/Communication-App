import { Route, Routes } from "react-router-dom"
import Home from "./components/home/Home"
import Header from "./components/header/Header"
import Events from "./components/events-listing/Events"
import Footer from "./components/footer/Footer"

function App() {
 

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events-listing" element={<Events/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
