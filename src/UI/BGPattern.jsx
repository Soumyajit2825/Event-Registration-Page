import React from 'react'
import maleimg from "../assets/male.png"
import femaleimg from "../assets/female.jpeg"


const BGPattern = ({gender}) => {

    var image;
    if (gender === "Male"){
      image = <img src={maleimg} alt="Student profile Pic" className="rounded-full w-full h-full object-cover" />
    } else {
      image = <img src={femaleimg} alt="Student profile Pic" className="rounded-full w-full h-full object-cover" />
    }


    return (
       
            <div className=" flex h-[350px] w-[350px]  p-[40px] md:h-[400px] md:w-[400px] bg-violet-300 md:p-[40px] rounded-full">
                <div className="h-full w-full bg-violet-200  p-[35px] md:p-[40px] rounded-full">
                    <div className="h-full w-full bg-violet-300 p-[20px]  md:p-[30px] rounded-full">
                        <div className="h-full w-full  bg-gradient-to-r from-[#61b5ff] via-[#8732e3] to-[#cc3fff]  rounded-full ">
                            <div className=" h-full w-full p-4 mt-1  ">
                                {image}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}

export default BGPattern