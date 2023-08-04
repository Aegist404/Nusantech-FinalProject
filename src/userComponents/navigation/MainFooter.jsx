import { InstagramFilled, FacebookFilled, TwitterSquareFilled, YoutubeFilled } from "@ant-design/icons"
const mainFooter = () => {

    const icon = { fontSize: '30px' }

    return (
        <>
            <footer className="shadow-md py-8 px-20 flex flex-col lg:flex-row justify-between justify-items-center">
                {/* 5 About Sections */}
                <div className="flex flex-col mb-4 lg:mb-0">
                    <h3 className="text-lg font-semibold">NusaLearning</h3>
                    <p className="mt-2 w-40">2022 NusaLearning All right reserved PT. Solusi Teknologi Nusantara</p>
                </div>

                <div className="flex flex-col mb-4 lg:mb-0">
                    <h3 className="text-lg font-semibold">About</h3>
                    <p className="mt-2">
                        <ul>
                            <li><a href="">Pripacy Policy</a></li>
                            <li><a href="">Help Center</a></li>
                            <li><a href="">Terms & Condition</a></li>
                        </ul>
                    </p>
                </div>

                <div className="flex flex-col mb-4 lg:mb-0">
                    <h3 className="text-lg font-semibold">Service</h3>
                    <p className="mt-2">
                        <a href="">Check Certificate</a>
                    </p>
                </div>

                <div className="flex flex-col mb-4 lg:mb-0">
                    <h3 className="text-lg font-semibold">Follow Us On</h3>
                    <p className="mt-2">
                        <ul className="flex space-x-5">
                            <li><a href=""><FacebookFilled style={icon} /></a></li>
                            <li><a href=""><InstagramFilled style={icon} /></a></li>
                            <li><a href=""><TwitterSquareFilled style={icon} /></a></li>
                            <li><a href=""><YoutubeFilled style={icon} /></a></li>
                        </ul>
                    </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col space-y-4">
                    <div>
                        <h3 className="text-lg font-semibold">Download NusaLMS Mobile</h3>
                        <div className="    space-x-2">
                            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:bg-green-600">
                                Playstore
                            </button>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                                App Store
                            </button>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default mainFooter