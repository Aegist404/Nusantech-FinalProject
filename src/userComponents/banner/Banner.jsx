

const Banner = () => {
  return (
    <>
      <div className="flex items-center justify-center h-64 bg-gray-300">
        <div className="flex flex-col w-1/2">
          <img src='' alt="Banner Image" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col w-1/2 p-4 bg-white">
          <h2 className="text-3xl font-bold">Judul Banner</h2>
          <p className="mt-2 w-[95%] text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident consectetur quod ipsa eligendi ad excepturi quo ducimus minus, quasi impedit. Quae, sapiente facere laudantium vel impedit blanditiis itaque eligendi qui necessitatibus alias voluptas cumque dignissimos harum magnam id nobis, labore ex minima. Temporibus maxime molestias ipsum? Corrupti ad iure dignissimos.</p>
        </div>
      </div>
    </>
  )
}

export default Banner
