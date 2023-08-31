import React, { useState } from 'react';


const Popup = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    return isOpen ? (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="w-1/3 p-6 bg-white border rounded-md shadow-md">
                <h1 className="text-xl font-bold mb-4">Edit Data Pembelian</h1>
                <form>
                    <div className="mb-4">
                        <label className="block font-semibold">Nama Lengkap:</label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                            placeholder="Nama Lengkap"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-semibold">Email:</label>
                        <input
                            type="email"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                            placeholder="Email"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-semibold">No Hp:</label>
                        <input
                            type="tel"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                            placeholder="No hp"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md"
                    >
                        Simpan
                    </button>
                </form>
                <button
                    onClick={onClose}
                    className="mt-4 w-full bg-gray-300 text-gray-700 py-2 px-4 rounded-md"
                >
                    Tutup
                </button>
            </div>
        </div>
    ) : null;
};

const Registrasi = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };
    return (
        <div className="flex justify-center mt-5">
            <div className="w-2/3">
                <h1 className="text-2xl font-bold mb-4">REGISTRASI</h1>
                <div className='flex justify-end'>
                    <button onClick={openPopup} className="text-black-500 mb-[-30px] text-none no-underline">Edit</button>
                    <Popup isOpen={isPopupOpen} onClose={closePopup} />
                </div>
                <div className="flex items-center mb-4 ">
                    <table className="w-2/4 ml-auto">
                        <h1 className="text-xl font-bold mb-2">DETAIL PEMBELI</h1>
                        <tbody>
                            <tr>
                                <td className="border border-black mb-4 p-4">
                                    <p>Nama Lengkap: MARRY AYANA</p>
                                    <p>Email: MARRYAYANA</p>
                                    <p>Nomor Hp: 089764656</p>
                                </td>
                            </tr>
                            <h1 className="text-xl font-bold mb-2">DETAIL PESANAN</h1>
                            <tr>
                                <td className="border border-black p-4">
                                    <p>Judul Pelatihan: Lorem, ipsum dolor.</p>
                                    <p>Kategori: Kategori A</p>
                                    <p>Masa berlaku lisensi: Selamanya</p>
                                    <p>Harga: 100.000</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* <div className='bg-blue-100 w-80 h-72 '>
                    hallo
                </div> */}

                <div className="flex justify-end">
                    <a href="/pembayaran"><button className="bg-blue-500 mb-4 text-white py-2 px-4 rounded-md" onClick={() => { }}>
                        BAYAR
                    </button></a>
                </div>
            </div>
        </div>
    );
}

export default Registrasi;
