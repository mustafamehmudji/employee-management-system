import React from "react";

const TaskListNumbers = ({ data }) => {
  return (
    <div className="flex justify-between gap-5 mt-10 screen">
      <div className="w-[25%] py-6 px-9 bg-blue-500 rounded-xl">
        <h2 className="text-3xl font-semibold">{data.taskCounts.newTask}</h2>
        <h1 className="text-xl font-medium">New Task</h1>
      </div>
      <div className="w-[25%] py-6 px-9 bg-green-500 rounded-xl">
        <h2 className="text-3xl font-semibold">{data.taskCounts.completed}</h2>
        <h1 className="text-xl font-medium">Completed Task</h1>
      </div>
      <div className="w-[25%] py-6 px-9 bg-yellow-500 rounded-xl">
        <h2 className="text-3xl font-semibold">{data.taskCounts.active}</h2>
        <h1 className="text-xl font-medium">Accepted Task</h1>
      </div>
      <div className="w-[25%] py-6 px-9 bg-red-500 rounded-xl">
        <h2 className="text-3xl font-semibold">{data.taskCounts.failed}</h2>
        <h1 className="text-xl font-medium">Failed Task</h1>
      </div>
    </div>
  );
};

export default TaskListNumbers;
