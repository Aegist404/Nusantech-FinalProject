import MainNavbar from '../userComponents/navigation/mainNavbar'
import MainFooter from '../userComponents/navigation/MainFooter'
import CoverPelatihan from '../userComponents/coverPelatihan/coverPelatihan'
import MainProgress from '../userComponents/isiPengetahuan/mainProgress'

const IsiPengetahuan = () => {
  return (
    <div>
      <MainNavbar/>
      <CoverPelatihan/>
      <MainProgress/>
      <MainFooter/>
    </div>
  )
}

export default IsiPengetahuan