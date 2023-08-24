import MainFooter from '../userComponents/navigation/MainFooter'
import CoverPelatihan from '../userComponents/coverPelatihan/coverPelatihan'
import MainProgress from '../userComponents/isiPengetahuan/mainProgress'
import MainNavbar from '../userComponents/navigation/MainNavbar'

const IsiPengetahuan = () => {
  return (
    <div>
      <MainNavbar />
      <CoverPelatihan/>
      <MainProgress/>
      <MainFooter/>
    </div>
  )
}

export default IsiPengetahuan