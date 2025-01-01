import { useEffect, useState } from "react";

const ProgressBar = () => {
  const [width, setWidth] = useState(0);
  

  useEffect(() => {
    let progress = setInterval(() => {
      if (width < 100) {
        setWidth((width) => width + 1);
      }
    }, 20);

    return () => {
      clearInterval(progress);
    };
  }, [width]);

  return (
    <div className="flex flex-col gap-8 justify-center items-center h-[200px] w-[800px] bg-blue-600">
      <div className=" w-[600px] h-[18px] bg-gray-500 rounded-xl">
        <div
          className="h-[18px] flex justify-center items-center rounded-xl bg-lime-500"
          style={{ width: `${width}%` }}
        >
          <p className=" text-lg">{width}%</p>
        </div>
      </div>
      <button className="bg-green-500 px-2 text-lg rounded-lg hover:bg-green-600 transition-all duration-300 "
      onClick={() => setWidth(0)}
      >
        start{" "}
        </button>
    </div>
  );
};

export default ProgressBar;
