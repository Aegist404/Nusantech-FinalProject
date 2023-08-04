import Home from "./userPages/Home"
import { Routes , BrowserRouter , Route } from "react-router-dom"
import KategoriPelatihanPage from "./userPages/KategoriPelatihan"
import Progres from "./userComponents/progress/Progress"

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <>
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/kategoriPilihan" element={<KategoriPelatihanPage/>} />
      <Route path="/progres" element={<Progres/>} />
      
    </>
    </Routes>
    </BrowserRouter>
  )
}

export default App