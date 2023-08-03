const MainNavbar = () => {
    return (
        <>
            <nav className="text-md bg-500 p-4 flex justify-between items-center shadow-md">
                {/* Logo Perusahaan */}
                <div className="text-lg font-medium ms-10">Nusa Learning</div>

                {/* Search Bar */}
                <div className="flex-grow mx-40">
                    <input
                        type="text"
                        className="w-full p-2 bg-gray-10 border focus:outline-none"
                        placeholder="Cari pelatihan..."
                    />
                </div>

                {/* Link dengan Icon */}
                <div className="flex space-x-10 me-10">
                    <a href="#" className="hover:underline">
                        Beranda
                    </a>
                    <a href="#" className="hover:underline">
                        Pelatihan
                    </a>
                    <a href="#" className="hover:underline">
                        ID v
                    </a>
                    <a href="#" className="hover:underline">
                        -
                    </a>
                    <a href="#" className="hover:underline">
                        Login
                    </a>
                </div>
            </nav>
        </>
    )
}

export default MainNavbar;