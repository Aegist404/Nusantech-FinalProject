import React from 'react';
import { Link } from 'react-router-dom';

const Registrasi = () => {
    return (
        <div className="flex justify-center">
            <div className="w-2/3">
                <h1 className="text-2xl font-bold mb-4">REGISTRASI</h1>

                <div className="flex justify-end mb-4">
                    <Link to="/registrasi/edit" className="text-blue-500 underline">Edit</Link>
                </div>

                <div className="mb-4">
                    <div className="text-right">
                        <h1 className="text-xl font-bold mb-2">DETAIL PEMBELI</h1>
                        <p>Nama Lengkap: MARRY AYANA</p>
                        <p>Email: MARRYAYANA</p>
                        <p>Nomor Hp: 089764656</p>
                    </div>
                    <div className="text-right mt-4">
                        <h1 className="text-xl font-bold mb-2">DETAIL PESANAN</h1>
                        <p>Judul Pelatihan: Lorem, ipsum dolor.</p>
                        <p>Kategori: Kategori A</p>
                        <p>Masa berlaku lisensi: Selamanya</p>
                        <p>Harga: 100.000</p>
                    </div>
                </div>

                <div className="flex justify-end">
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-md" onClick={() => {}}>
                        BAYAR
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Registrasi;
