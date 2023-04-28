import React, { useState } from 'react'

const RegistrationForm = ({ onAddStudent }) => {

    const [memberCount, setMemberCount] = useState(0);
    const [pay, setPay] = useState(0);
    const [studentData, setStudentData] = useState({
        name: "",
        email: "",
        teamName: "",
        gender: "",
        mobile: "",
        branch: "",
        year: "",
    });


    const handleStudentChange = (e) => {

        e.preventDefault();

        const newValue = e.target.value;
        const inputName = e.target.name;

        setStudentData((prevValue) => {
            if (inputName === "fName") {
                return {
                    name: newValue,
                    email: prevValue.email,
                    teamName: prevValue.teamName,
                    gender: prevValue.gender,
                    mobile: prevValue.mobile,
                    branch: prevValue.branch,
                    year: prevValue.year,
                };
            } else if (inputName === "Email") {
                return {
                    name: prevValue.name,
                    email: newValue,
                    teamName: prevValue.teamName,
                    gender: prevValue.gender,
                    mobile: prevValue.mobile,
                    branch: prevValue.branch,
                    year: prevValue.year,
                };
            } else if (inputName === "teamName") {
                return {
                    name: prevValue.name,
                    email: prevValue.email,
                    teamName: newValue,
                    gender: prevValue.gender,
                    mobile: prevValue.mobile,
                    branch: prevValue.branch,
                    year: prevValue.year,
                };
            } else if (inputName === "mobile") {
                return {
                    name: prevValue.name,
                    email: prevValue.email,
                    teamName: prevValue.teamName,
                    gender: prevValue.gender,
                    mobile: newValue,
                    branch: prevValue.branch,
                    year: prevValue.year,
                }
            } else if (inputName === "gender") {

                const { value, checked } = e.target;

                let studentGender;

                if (checked) {
                    studentGender = value;
                }

                return {
                    name: prevValue.name,
                    email: prevValue.email,
                    teamName: prevValue.teamName,
                    gender: studentGender,
                    mobile: prevValue.mobile,
                    branch: prevValue.branch,
                    year: prevValue.year,
                }
            } else if (inputName === "year") {
                const { value, checked } = e.target;

                let yearSeleted;

                if (checked) {
                    yearSeleted = value;
                }
                return {
                    name: prevValue.name,
                    email: prevValue.email,
                    teamName: prevValue.teamName,
                    gender: prevValue.gender,
                    mobile: prevValue.mobile,
                    branch: prevValue.branch,
                    year: yearSeleted,
                }

            } else if (inputName === "branch") {
                return {
                    name: prevValue.name,
                    email: prevValue.email,
                    teamName: prevValue.teamName,
                    gender: prevValue.gender,
                    mobile: prevValue.mobile,
                    branch: newValue,
                    year: prevValue.year,
                }
            }
        });

    };


    const handleOnClick = () => {

        onAddStudent(studentData.name, studentData.email, studentData.teamName, studentData.gender, studentData.mobile, studentData.branch, studentData.year);
        console.log(studentData);
        setMemberCount(memberCount + 1);

    }

    const handleClearFields = () => {
        setStudentData({
            name: "",
            email: "",
            teamName: "",
            gender: "",
            mobile: 0,
            branch: "",
            year: "",
        });

        let radiosy = document.getElementsByName('year');
        for (let i = 0; i < radiosy.length; i++) {
            radiosy[i].checked = false;
        }
        

        let radiosg = document.getElementsByName('gender');
        for (let i = 0; i < radiosg.length; i++) {
           radiosg[i].checked = false;
             
        }
    }

    const handleSubmit = () => {
        console.log("Payment");
        
        setPay(1);
    }




    var name, team, submit;

    if (memberCount === 0){
    name = <div className="mb-2">
    
        <label htmlFor="fName" className="block mb-1 text-s font-bold text-gray-100 ">Team Lead Name<span className='text-red-600'>*</span></label>
        <input type="text" name="fName" value={studentData.name} onChange={handleStudentChange} className="shadow-sm bg-gray-50 border-[4px] box-border  border-sky-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none placeholder:text-gray-400 placeholder:font-medium" placeholder="Enter your Team-Lead name" required />
    </div>

    team = (<>
    <div className="mb-2">
        <label htmlFor="teamName" className="block mb-2 text-s font-bold text-gray-100 ">Team Name<span className='text-red-600'>*</span></label>
        <input type="url" name="teamName" value={studentData.teamName} onChange={handleStudentChange} className="shadow-sm bg-gray-50 border-[4px] box-border  border-sky-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none placeholder:text-gray-400 placeholder:font-medium" placeholder="Some Thing Cool" required />
    </div>
    <div className="mb-2">
        <label htmlFor="mobile" className="block mb-2 text-s font-bold text-gray-100 ">Mobile Number of Team Leader<span className='text-red-600'>*</span></label>
        <input type="tel" maxLength="10" minLength="10" name="mobile" value={studentData.mobile} onChange={handleStudentChange} className="shadow-sm bg-gray-50 border-[4px] box-border  border-sky-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none placeholder:text-gray-400 placeholder:font-medium" placeholder="+91-XXXXXXXXXX" required />
    </div>
    </>)
    } else {
    name = <div className="mb-2">
        <label htmlFor="fName" className="block mb-1 text-s font-bold text-gray-100 ">Member {memberCount} Name<span className='text-red-600'>*</span></label>
        <input type="text" name="fName" value={studentData.name} onChange={handleStudentChange} className="shadow-sm bg-gray-50 border-[4px] box-border  border-sky-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none placeholder:text-gray-400 placeholder:font-medium" placeholder={`Enter your Member ${memberCount} name`} required />
    </div>

    team = null;
    }



    if (memberCount >= 2){
        submit =  <button onClick={handleSubmit} type="button" className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2 text-center ">Submit</button>
    }



    if (memberCount <= 3 && !pay){
    return (
        <>
            <form className="flex accent-blue-600 flex-col w-[335px] px-4 py-4 sm:w-[380px] sm:px-6 sm:py-6 md:w-full md:px-8 md:py-10 rounded-xl shadow-2xl bg-gradient-to-r from-violet-500 to-indigo-500">
                {name}
                    
                <div className="mb-2">
                    <label htmlFor="Email" className="block mb-2 text-s font-bold text-gray-100 ">Your Email (AOT Mail)<span className='text-red-600'>*</span></label>
                    <input type="email" name="Email" value={studentData.email} onChange={handleStudentChange} className="shadow-sm bg-gray-50 border-[4px] box-border  border-sky-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none placeholder:text-gray-400 placeholder:font-medium" placeholder="name@aot.edu.in" pattern="^([a-zA-Z0-9_\-\.]+)@aot.edu.in$" required />
                </div>
                
                {team}
                
                <div className="mb-2">
                    <label htmlFor="branch" className="block mb-2 text-s font-bold text-gray-100 ">Branch<span className='text-red-600'>*</span></label>
                    <select onChange={handleStudentChange} placeholder='CSBS' name='branch'  className='shadow-sm bg-gray-50 border-[4px] box-border  border-sky-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none placeholder:text-gray-400 placeholder:font-medium' required >
                        <option value="CSE">CSE</option>
                        <option value="CSBS">CSBS</option>
                        <option value="ECE">ECE</option>
                        <option value="EEE">EEE</option>
                        <option value="EE">EE</option>
                        <option value="ME">ME</option>
                    </select>
                </div>

                <div className="mb-2">
                    <label htmlFor="year" className="block mb-2 text-s font-bold text-gray-100 " required >Year<span className='text-red-600'>*</span></label>
                    <div className="flex flex-row items-center justify-around gap-2">
                        <div className="flex items-center mb-2">
                            <input id="year-1" type="radio" name="year" value="1st Year" onChange={handleStudentChange} defaultChecked={false} className="w-4 h-4   " />
                            <label htmlFor="year-1" className="block ml-2 text-sm font-medium text-gray-300">
                                1st
                            </label>
                        </div>

                        <div className="flex items-center mb-2">
                            <input id="year-2" type="radio" name="year" value="2nd Year" onChange={handleStudentChange} defaultChecked={false} className="w-4 h-4  " />
                            <label htmlFor="year-2" className="block ml-2 text-sm font-medium text-gray-300">
                                2nd
                            </label>
                        </div>

                        <div className="flex items-center mb-2">
                            <input id="year-3" type="radio" name="year" value="3rd Year" onChange={handleStudentChange} defaultChecked={false} className="w-4 h-4  " />
                            <label htmlFor="year-3" className="block ml-2 text-sm font-medium text-gray-300">
                                3rd
                            </label>
                        </div>

                        <div className="flex items-center mb-2">
                            <input id="year-4" type="radio" name="year" value="4th Year" onChange={handleStudentChange} defaultChecked={false} className="w-4 h-4  " />
                            <label htmlFor="year-4" className="block ml-2 text-sm font-medium text-gray-300">
                                4th
                            </label>
                        </div>
                    </div>
                </div>

                <div className="flex space-x-12 mb-2 pt-2">
                
                    <div className="block  text-s font-medium text-gray-100 " required >Gender<span className='text-red-600'>*</span></div>

                    <div className="flex items-center mb-2">
                        <input id="gender-male" type="radio" name="gender" value="Male" onChange={handleStudentChange} defaultChecked={false} className="w-4 h-4   " />
                        <label htmlFor="gender-male" className="block ml-2 text-sm font-medium text-gray-300">
                            Male
                        </label>
                    </div>

                    <div className="flex items-center mb-2">
                        <input id="gender-female" type="radio" name="gender" value="Female" onChange={handleStudentChange} defaultChecked={false} className="w-4 h-4  " />
                        <label htmlFor="gender-female" className="block ml-2 text-sm font-medium text-gray-300">
                            Female
                        </label>
                    </div>
                </div>

                
                <div className="flex justify-between mb-2">

                    <button onClick={handleOnClick} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2 text-center ">Add Member</button>
                    <button onClick={handleClearFields} type="button" className="text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm px-6 py-2 text-center ">Clear</button>
                </div>

                {submit}

            </form>
        </>
    )
    } else {
        return (<>
            <div className="flex accent-blue-600 flex-col w-[335px] px-4 py-4 sm:w-[380px] sm:px-6 sm:py-6 md:w-full md:px-8 md:py-10 rounded-xl shadow-2xl bg-gradient-to-r from-violet-500 to-indigo-500">
                <h1 className='block mb-2 font-bold text-red-500 text-2xl text-center'>Team - {studentData.teamName}</h1>
                <h1 className='block mb-2 font-bold text-gray-100 text-2xl text-center'>Pay the way you want</h1>

                <h3 className='font-bold text-xl text-gray-100'>GPAY</h3>
                <img src={"https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"} alt="QR Code" />

                <h3 className='font-bold text-xl text-gray-100'>Or Cash</h3>
            </div>
        </>);
    }
}

export default RegistrationForm