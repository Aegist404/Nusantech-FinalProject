import React from "react";
import MainNavbar from "../../userComponents/navigation/mainNavbar";
import DetailPelatihan from "../../userComponents/Transaksi/beliPelatihan/detailPelatihan";
import KontenPreviewPelatihan from "../../userComponents/Transaksi/beliPelatihan/kontenPreviewPelatihan";
import TanggalPelatihan from "../../userComponents/Transaksi/beliPelatihan/tanggalPelatihan"
import TargetPelatihan from "../../userComponents/Transaksi/beliPelatihan/targetPelatihan"

const DetailPelatihanPages = () => {
  return (
    <>
      <MainNavbar />
    <div className="px-20 py-5">
      <div>
        <DetailPelatihan />
        <div className="flex gap-4">
          <KontenPreviewPelatihan />
          <TanggalPelatihan />
        </div>
        <TargetPelatihan />
      </div>
    </div>
    </>
  );
};

export default DetailPelatihanPages;
