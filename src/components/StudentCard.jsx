import React from "react";
import BGPattern from "../UI/BGPattern"


const StudentCard = ({ name, email, branch, gender, year }) => {


  return (
    <div className="relative flex w-[335px] h-[200px] md:w-[380px] md:h-[200px] ring-[6px] ring-purple-600 bg-purple-50  cursor-pointer rounded-xl overflow-hidden hover:scale-[1.05] shadow-2xl shadow-violet-700 hover:shadow-violet-300 transition duration-300 ease-in">
      <div className="absolute -right-[94px] -top-[86px] md:-right-[104px] md:-top-[104px] ">
        <BGPattern gender={gender} />
      </div>
      <div className="w-full flex  justify-between pl-0 pr-4 z-10">
        <div className="flex py-10 pl-2 flex-col space-y-1">
          <h2 className="font-inter font-bold text-violet-800 text-2xl capitalize">{name}</h2>
          <p className="font-inter font-semibold text-violet-900 text-md capitalize">{gender}</p>
          <p className="font-inter font-semibold text-violet-900 text-sm z-20">{email}</p>
          <p className="font-inter font-semibold text-violet-900 text-sm">{branch}</p>
          <p className="font-inter font-semibold text-violet-900 text-sm">{year}</p>
        </div>

      </div>
    </div>
  );
};

export default StudentCard;
