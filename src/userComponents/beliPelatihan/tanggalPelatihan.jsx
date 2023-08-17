import React from "react";
// import ContentBox from './bebas';

const TanggalPelatihan = () => {
  return (
    <div className="mt-[-18%] ml-[2%]">
      <div className="border w-[100%] border-2 border-black p-4">
        <h1 className="mb-2">Pembuat</h1>
        <div className="border border-black mb-2"></div>
        <p className="text-gray-600">Tanggal dibuat : 23-09-2022</p>
      </div>
      <h1 className="font-bold mt-5">Yang Kamu Dapatkan</h1>
      <div className="border border-2 border-black w-[100%] p-4">
        <ol className="list-inside list-disc text-[12px]">
          <li>4 menit total vidio pembelajaran</li>
          <li>5 bahan bacaan</li>
          <li>5 konten dapat diunduh</li>
          <li>Kuis yang dapat dikerjakan</li>
          <li>Sertifikat dapat diunduh</li>
        </ol>
      </div>
      <div className="border border-2 w-[100%] border-black p-4 mt-[15px]">
        <h1 className="mb-2">Transaksi</h1>
        <div className="border border-black mb-2"></div>
        <p className="text-gray">Harga : <span className="font-bold ml-[60px]">Rp. 100.000,-</span></p>
        <button className="border border-black p-[5px] w-[17vw] mt-6">
          Beli Sekarang
        </button>
      </div>
    </div>
  );
};

export default TanggalPelatihan;
