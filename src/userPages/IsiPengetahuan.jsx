import MainFooter from '../userComponents/navigation/MainFooter'
import CoverPelatihan from '../userComponents/coverPelatihan/coverPelatihan'
import MainProgress from '../userComponents/isiPengetahuan/mainProgress'
import MainNavbar from '../userComponents/navigation/MainNavbar'
import Komentar from '../userComponents/komentarKuis/komentarKuis'
import Keuntungan from '../userComponents/isiPengetahuan/Keuntungan'

const IsiPengetahuan = () => {
  return (
    <div>
      <MainNavbar />
      <CoverPelatihan/>
      <div className='flex'>
      <MainProgress/>
        <div>
      <Keuntungan />
      <Komentar />
      </div>
      </div>
      <MainFooter/>
    </div>
  )
}

export default IsiPengetahuan