import React from "react";
import BGPattern from "../UI/BGPattern"
import maleimg from "../assets/male.png"
import femaleimg from "../assets/female.jpeg"

const StudentCard = ({ name, email, branch, gender, year }) => {

  var image;
  if (gender === "Male"){
    image = <img src={maleimg} alt="Student profile Pic" className="rounded-full w-full h-full object-cover" />
  } else {
    image = <img src={femaleimg} alt="Student profile Pic" className="rounded-full w-full h-full object-cover" />
  }

  return (
    <div className="relative flex w-[350px] h-[220px] md:w-[400px] md:h-[230px] ring-[6px] ring-purple-600 bg-purple-50  cursor-pointer rounded-xl overflow-hidden hover:scale-[1.05] shadow-2xl shadow-violet-700 hover:shadow-violet-300 transition duration-300 ease-in">
      <div className="absolute -right-[94px] -top-[86px] md:-right-[104px] md:-top-[104px] ">
        <BGPattern />
      </div>
      <div className="w-full flex  justify-between px-4 z-10">
        <div className="flex py-10 pl-2 flex-col space-y-1">
          <h2 className="font-inter font-bold text-violet-800 text-2xl capitalize">{name}</h2>
          <p className="font-inter font-semibold text-violet-900 text-md capitalize">{gender}</p>
          <p className="font-inter font-semibold text-violet-900 text-sm ">{email}</p>
          <p className="font-inter font-semibold text-violet-900 text-sm">{branch}</p>
          <p className="font-inter font-semibold text-violet-900 text-sm">{year}</p>
        </div>
        <div className="mt-6 md:mt-4 w-32 h-32 md:w-40 md:h-40 z-10">
          {image}
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
