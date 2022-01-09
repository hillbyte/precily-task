import React from "react";

function WindowOne() {
  return (
    <div className="bg-slate-100 h-screen">
      <h1 className="text-xl mt-2 text-center font-semibold text-gray-600">
        Upcoming Task
      </h1>
      <div className="flex m-10 justify-center">
        <p className=" bg-white p-2 rounded-md text-gray-500 shadow-lg">
          backend api
        </p>
        <button className="bg-indigo-400 px-4 rounded-md font-semibold">
          Update
        </button>
      </div>
    </div>
  );
}

export default WindowOne;
