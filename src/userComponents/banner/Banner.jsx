import banner from "../../assets/banner-1.png"

const Banner = () => {
  return (
    <>
      <div className="w-full h-100 bg-gray-300 flex items-center justify-center">
        <img src={banner} alt="Banner Image" className="w-full h-full object-cover" />
      </div>
    </>
  )
}

export default Banner
