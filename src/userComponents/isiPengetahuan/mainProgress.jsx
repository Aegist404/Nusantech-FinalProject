import { Progress, Button } from "antd";

const MainProgress = () => {
  const progress = 50; // Assuming the progress is at 50%

  const modules = [
    { title: "Modul 1", subtitles: ["Sub Judul 1", "Sub Judul 2", "Sub Judul 3", "Sub Judul 4"] },
    { title: "Modul 2", subtitles: ["Sub Judul 1", "Sub Judul 2", "Sub Judul 3", "Sub Judul 4"] }
  ];

  return (
    <div className="h-screen">
      <div className="border border-black overflow-y-scroll h-[75%] w-[20%]">
        <div className="p-3">
          <h1 className="font-bold mb-4">Progress</h1>
            <Progress percent={progress} strokeWidth={10} strokeColor="black" />
        </div>
        {modules.map((module, index) => (
          <div>
          <div key={index} className="mt-4 cursor-pointer border-t border-b border-black overflow-auto">
            <h1 className="font-bold text-[14px] ml-2 p-1">{module.title}</h1>
          </div>
          <div key={`grid-${index}`} className="grid grid-rows-[auto,auto,auto] my-4 gap-2 text-[12px] p-2">
            {module.subtitles.map((subtitle, subIndex) => (
              <Button key={`button-${index}-${subIndex}`} className="border-black"><p className="text-start">{subtitle}</p></Button>
              ))}
          </div>
              </div>
        ))}
      </div>
    </div>
  );
};

export default MainProgress;
