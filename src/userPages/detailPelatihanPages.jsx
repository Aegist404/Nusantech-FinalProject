import React from "react";
import MainNavbar from "../userComponents/navigation/mainNavbar";
import DetailPelatihan from "../userComponents/beliPelatihan/detailPelatihan";
import TanggalPelatihan from "../userComponents/beliPelatihan/tanggalPelatihan";
import KontenPreviewPelatihan from "../userComponents/beliPelatihan/kontenPreviewPelatihan";
import TargetPelatihan from "../userComponents/beliPelatihan/targetPelatihan";

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
