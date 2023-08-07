import { Progress } from "antd";

const MainProgress = () => {
  const progress = 50; // Assuming the progress is at 50%

  return (
    <div className="h-screen">
      <div className="border border-black overflow-y-scroll h-[75%] w-[20%]">
        <div className="p-3">
          <h1 className="font-bold mb-4">Progress</h1>
          <div className="">
            <Progress percent={progress} strokeWidth={10} strokeColor="black" />
          </div>
        </div>
        <div className="mt-4 cursor-pointer border-t border-b border-black overflow-auto">
          <h1 className="font-bold text-[14px] ml-2 flex-grow">Modul 1</h1>
        </div>
        <div className="grid grid-rows-[auto,auto,auto] gap-4 mt-2 text-[12px] h-[10rem] p-2">
          <p className="border border-black">Sub Judul 1</p>
          <p className="border border-black">Sub Judul 2</p>
          <p className="border border-black">Sub Judul 3</p>
          <p className="border border-black">Sub Judul 4</p>
        </div>

        <div className="mt-4 cursor-pointer border-t border-b border-black overflow-auto">
          <h1 className="font-bold text-[14px] ml-2 flex-grow">Modul 2</h1>
        </div>
        <div className="grid grid-rows-[auto,auto,auto] gap-4 mt-2 text-[12px] h-[10rem] p-2">
          <p className="border border-black">Sub Judul 1</p>
          <p className="border border-black">Sub Judul 2</p>
          <p className="border border-black">Sub Judul 3</p>
          <p className="border border-black">Sub Judul 4</p>
        </div>
      </div>
    </div>
  );
};

export default MainProgress;
