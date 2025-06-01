import React from "react";

const CompleteTask = ({ data }) => {
  return (
    <div>
      <div className="flex-shrink-0 h-full w-[300px] bg-green-400 rounded-xl p-5">
        <div className="flex items-center justify-between">
          <h3 className="bg-red-500 rounded px-3 py-1 text-white text-md">
            {data.category}
          </h3>
          <h4 className="text-md">{data.taskDate}</h4>
        </div>
        <h2 className="mt-6 text-2xl font-semibold">{data.taskTitle}</h2>
        <p className="text-md mt-3">{data.taskDescription}</p>
        <div className="mt-6">
          <button className="bg-green-500 py-1 px-2 text-[14px] w-full rounded-md">
            Completed
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompleteTask;
