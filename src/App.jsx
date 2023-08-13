import { Routes , BrowserRouter , Route } from "react-router-dom"
import Home from "./userPages/Home"
import KategoriPelatihanPage from "./userPages/KategoriPelatihan"
import Login from "./userPages/login"
import Register from "./userPages/register"
import Progres from "./userPages/progres"
import DetailPelatihanPages from "./userPages/detailPelatihanPages"


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <>
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/kategoriPilihan" element={<KategoriPelatihanPage/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/progres" element={<Progres/>} />
      <Route path="/detailPelatihan" element={<DetailPelatihanPages/>} />
    </>
    </Routes>
    </BrowserRouter>
  )
}

export default App