import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div id="allTask" className="bg-[#1C1C1C] p-5 rounded mt-5 h-110">
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="w-1/5 text-white text-lg font-medium">Employee</h2>
        <h3 className="w-1/5 text-white text-lg font-medium">New Task</h3>
        <h5 className="w-1/5 text-white text-lg font-medium">Active Task</h5>
        <h5 className="w-1/5 text-white text-lg font-medium">Completed</h5>
        <h5 className="w-1/5 text-white text-lg font-medium">Failed</h5>
      </div>
      <div className="h-[80%] overflow-auto">
        {userData.map((e, idx) => {
          return (
            <div
              key={idx}
              className=" border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded"
            >
              <h2 className="w-1/5 text-zinc-300 text-lg font-medium">
                {e.firstName}
              </h2>
              <h2 className="w-1/5 text-blue-700 text-lg">
                {e.taskCounts.newTask}
              </h2>
              <h2 className="w-1/5 text-yellow-600 text-lg font-medium">
                {e.taskCounts.active}
              </h2>
              <h2 className="w-1/5 text-green-600 text-lg font-medium">
                {e.taskCounts.completed}
              </h2>
              <h2 className="w-1/5 text-red-600 text-lg font-medium">
                {e.taskCounts.failed}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
