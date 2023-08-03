import Home from "./userPages/Home"
import { Routes , BrowserRouter , Route } from "react-router-dom"
import KategoriPelatihanPage from "./userPages/KategoriPelatihan"

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <>
      <Route path="/home" element={<Home/>} />
      <Route path="/kategoriPilihan" element={<KategoriPelatihanPage/>} />
    </>
    </Routes>
    </BrowserRouter>
  )
}

export default App
