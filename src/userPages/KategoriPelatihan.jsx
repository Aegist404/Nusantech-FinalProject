import MainNavbar from '../userComponents/navigation/MainNavbar'
import MainFooter from '../userComponents/navigation/MainFooter'
import KategoriPelatihan from '../userComponents/kategoriPelatihan/kategoriPelatihan'

const KategoriPelatihanPage = () => {
    return (
        <>
            <div>
                <MainNavbar />
                <KategoriPelatihan />
                <MainFooter />
            </div>
        </>
    )
}

export default KategoriPelatihanPage