const KontenPreviewPelatihan = () => {
  return (
    <div>
      <h1 className="font-bold">Konten Preview</h1>
      <div className="flex border border-black p-4 w-[64vw] mt-2">
        <div className="border border-black h-[75%] w-[30%]">
          <div className="cursor-pointer border-t border-b border-black">
            <h1 className="font-bold text-[16px] ml-2">Modul 1</h1>
          </div>
          <div className="grid grid-rows-[auto,auto,auto] gap-4 mt-2 text-[15px] p-2">
            <p className="border border-black p-1">Sub Judul 1</p>
            <p className="border border-black p-1">Sub Judul 2</p>
            <p className="border border-black p-1">Sub Judul 3</p>
            <p className="border border-black p-1">Sub Judul 4</p>
          </div>
          <div className="cursor-pointer border-t border-b border-black">
            <h1 className="font-bold text-[16x] ml-2">Modul 2</h1>
          </div>
          <div className="grid grid-rows-[auto,auto,auto] gap-4 mt-2 text-[15px] p-2">
            <p className="border border-black p-1">Sub Judul 1</p>
            <p className="border border-black p-1">Sub Judul 2</p>
            <p className="border border-black p-1">Sub Judul 3</p>
            <p className="border border-black p-1">Sub Judul 4</p>
          </div>
          <div className="cursor-pointer border-t border-b border-black mt-3">
            <h1 className="font-bold text-[16x] ml-2">Final Quizz</h1>
          </div>
        </div>

        <div className="border border-black w-[70%] ml-[10px] p-[10px]">
          <div className="border border-black h-[40vh] w-[41.3vw]">
          <h1 className="center">Konten Pelatihan</h1>
          </div>
          <div className="border border-black h-[28.4vh] mt-[15px] w-[41.3vw]">
          <h1 className="center">Konten Pelatihan</h1>
          </div>
        </div>

      </div>
    </div>
  );
};

export default KontenPreviewPelatihan;
