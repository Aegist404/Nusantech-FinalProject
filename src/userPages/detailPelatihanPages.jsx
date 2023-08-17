import React from "react";
import MainNavbar from "../userComponents/navigation/mainNavbar";
import DetailPelatihan from "../userComponents/beliPelatihan/detailPelatihan";
import TanggalPelatihan from "../userComponents/beliPelatihan/tanggalPelatihan";
import KontenPreviewPelatihan from "../userComponents/beliPelatihan/kontenPreviewPelatihan";
import TargetPelatihan from "../userComponents/beliPelatihan/targetPelatihan";

const DetailPelatihanPages = () => {
  return (
    <div>
      <MainNavbar />
      <div className="p-10">
        <DetailPelatihan />
        <div className="flex">
          <KontenPreviewPelatihan />
          <TanggalPelatihan />
        </div>
        <TargetPelatihan />
      </div>
    </div>
  );
};

export default DetailPelatihanPages;
