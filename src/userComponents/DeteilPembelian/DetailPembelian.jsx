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

const App = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <button
                onClick={openPopup}
                className="bg-blue-500 text-white py-2 px-4 rounded-md"
            >
                Buka Pop-Up
            </button>

            <Popup isOpen={isPopupOpen} onClose={closePopup} />
        </div>
    );
};

export default App;
