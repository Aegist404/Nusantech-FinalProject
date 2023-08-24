import React from "react";
import MainNavbar from "../userComponents/navigation/MainNavbar";
import DetailPelatihan from "../userComponents/beliPelatihan/detailPelatihan";
import KontenPreviewPelatihan from "../userComponents/beliPelatihan/kontenPreviewPelatihan";
import TanggalPelatihan from "../userComponents/beliPelatihan/tanggalPelatihan";
import TargetPelatihan from "../userComponents/beliPelatihan/targetPelatihan";
import Komentar from "../userComponents/komentarKuis/komentarKuis";



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
        <Komentar />
    </div>
        <MainFooter />
    </>
  );
};

export default DetailPelatihanPages;
