import MainFooter from '../userComponents/navigation/MainFooter'
import CoverPelatihan from '../userComponents/coverPelatihan/coverPelatihan'
import MainProgress from '../userComponents/isiPengetahuan/mainProgress'
import MainNavbar from '../userComponents/navigation/MainNavbar'
import Komentar from '../userComponents/komentarKuis/komentarKuis'
import Keuntungan from '../userComponents/isiPengetahuan/Keuntungan'
import CardPelatihan from '../userComponents/Pelatihan/Pelatihan1/CardPelatihan'
import CardPelatihan2 from '../userComponents/Pelatihan/pelatihan2/CardPelatihan2'
import RatingResult from '../userComponents/komentarKuis/ComentRating'

const IsiPengetahuan = () => {
  return (
    <div>
      <MainNavbar />
      <CoverPelatihan/>
      <div className='flex mt-3 border-b border-black mb-5'>
      <MainProgress/>
        <div>
      <Keuntungan />
      <RatingResult />
      <Komentar />
      </div>
      </div>
      <div className=''>
      <CardPelatihan />
      </div>
      <MainFooter/>
    </div>
  )
}

export default IsiPengetahuan