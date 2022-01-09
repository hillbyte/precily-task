import React from "react";

function WindowTwo() {
  return (
    <div className="bg-slate-100 h-screen">
      <nav className="w-full bg-yellow-400 py-2">
        <h1 className="text-center text-md font-bold">Assignment Task</h1>
      </nav>
      <div className="flex flex-col w-full pt-2 items-center justify-center">
        <div>
          <form className="bg-white rounded-md py-2 px-12 shadow-lg">
            <h1 className="text-xl mt-2 text-center font-semibold text-gray-600">
              Write Down Your Task
            </h1>
            <div className="mt-6 flex space-x-4 m-10 justify-center">
              <p className="mt-3 text-gray-500">Clicked</p>
              <input
                type="number"
                placeholder={0}
                min={0}
                className="cursor-pointer bg-gray-100 w-10 text-center rounded-md pl-2 outline-none py-2 border-2"
              />
              <input
                placeholder="write here"
                className="bg-gray-100 rounded-md py-2 px-4 border-2 outline-none"
              />
              <button className="bg-yellow-400 px-4 rounded-md font-semibold">
                Add Task
              </button>
            </div>
          </form>

          <p className="mt-6 bg-white p-6 rounded-md text-gray-500 shadow-lg">
            simply dummy text of the printing
          </p>
        </div>
      </div>
    </div>
  );
}

export default WindowTwo;
