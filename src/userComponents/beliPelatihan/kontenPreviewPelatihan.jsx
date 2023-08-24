import { Button } from 'antd';

const KontenPreviewPelatihan = () => {
  const modulData = [
    { modulTitle: "Modul 1", subJuduls: ["Sub Judul 1", "Sub Judul 2", "Sub Judul 3", "Sub Judul 4"] },
    { modulTitle: "Modul 2", subJuduls: ["Sub Judul 1", "Sub Judul 2", "Sub Judul 3", "Sub Judul 4"] },
    { modulTitle: "Final Quizz", subJuduls: [] },
  ];

  return (
    <div>
      <h1 className="font-bold mt-5">Konten Preview</h1>
      <div className="flex border border-black p-4 w-[64vw] mt-2">
        <div className="border border-black h-[75%] w-[30%]">
          {modulData.map((modul, index) => (
            <div key={index} className="cursor-pointer border-t border-b border-black">
              <h1 className="font-bold border border-black p-1 text-[16px]">{modul.modulTitle}</h1>
              <div className="grid grid-rows-[auto,auto,auto] gap-4 mt-2 text-[15px] p-2">
                {modul.subJuduls.map((subJudul, subIndex) => (
                  <Button key={subIndex} type="default" className="border-black">
                    <p className='text-start'>{subJudul}</p>
                  </Button>
                ))}
              </div>
            </div>
          ))}
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
