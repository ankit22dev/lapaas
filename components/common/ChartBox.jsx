import React from "react";

const ChartBox = ({ data }) => {
  return (
    <div className="border-2 w-[30rem] py-4 rounded-xl px-2 flex flex-col gap-2">
      {data?.map((info, i) => {
        return (
          <div className="w-full flex justify-center items-center" key={i}>
            <div className="w-1/4">
              <h6 className="text-3:lg font-bold uppercase md:text-xl">
                {info.name}
              </h6>
            </div>
            <div className="w-2/3">
              <div className="relative w-full rounded h-4 bg-white">
                <span
                  className={`absolute h-full bg-mainRed rounded`}
                  style={{ width: `${100 - info.percantage}%` }}
                >
                  <span className="absolute left-full text-black font-bold top-1/2 -translate-y-1/2 pl-3">
                    {info.percantage}%
                  </span>
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChartBox;
