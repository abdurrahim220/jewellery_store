import React from "react";

const WeekendDeals = () => {
  return (
    <div className="container mx-auto lg:px-0 px-3 py-5">
      <div className="lg:flex gap-3">
        <div className="lg:w-[75%]">
          <div className="flex justify-between border-b py-2 ">
            <div className="flex gap-2 justify-center items-center">
              <h1 className="font-manrope text-sm font-bold">Deals of the Week</h1>
              <p className="font-jost text-base font-normal">Dont miss out on this weeks deals</p>
            </div>
            <div>
                <h1>View All</h1>
            </div>
          </div>

          <div className="py-2 grid grid-cols-2 lg:grid-cols-4">

          </div>
        </div>
        <div className="lg:w-[25%]"></div>
      </div>
    </div>
  );
};

export default WeekendDeals;
