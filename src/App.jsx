import { Routes , BrowserRouter , Route } from "react-router-dom"
import Home from "./userPages/Home"
import KategoriPelatihanPage from "./userPages/KategoriPelatihan"
import Login from "./userPages/login"
import Register from "./userPages/register"
import IsiPengetahuan from "./userPages/IsiPengetahuan"


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <>
      <Route path="/" element={<Home/>} />
      <Route path="/kategoriPilihan" element={<KategoriPelatihanPage/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/isipengetahuan" element={<IsiPengetahuan/>} />
    </>
    </Routes>
    </BrowserRouter>
  )
}

export default App