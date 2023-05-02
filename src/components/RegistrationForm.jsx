import React, { useState } from 'react'
// import QR from "../assets/Treasurer.jpeg";
import QR60 from "../assets/Treasurer60.jpg";
import QR80 from "../assets/Treasurer80.jpg";
import QR100 from "../assets/Treasurer100.jpg";
import mogojastro from "../assets/mogojastro.png";


const RegistrationForm = ({ addStudentHandler, studentList, memberCount, setMemberCount }) => {

    
    const [qr, setQr] = useState(<img className=" bg-white w-full h-full rounded-xl " src={mogojastro} alt="Mogojastro poster" />);
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
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        teamName: "",
        gender: "Female",
        mobile: "",
        branch: "",
        year: "1st Year",
    });



    const handleStudentChange = (e) => {

        const newValue = e.target.value;
        const inputName = e.target.name;

        setStudentData((prevValue) => {
            if (inputName === "fName") {
                if (newValue) {
                    setErrors({ ...errors, name: "" });
                    return { ...prevValue, name: newValue };
                }else {
                    setErrors({ ...errors, name: "border-red-400 focus:border-red-500" });
                    return { ...prevValue, name: newValue };
                }
            } else if (inputName === "Email") {
                if (newValue && (/^[a-zA-Z\.0-9]+@aot\.edu\.in$/.test(newValue))) {
                    setErrors({ ...errors, email: "" });
                    return { ...prevValue, email: newValue };
                }else {
                    setErrors({ ...errors, email: "border-red-400 focus:border-red-500" });
                    return { ...prevValue, email: newValue };
                }
            } else if (inputName === "teamName") {
                if (newValue && (/^[A-za-z0-9_]{3,}$/.test(newValue))) {
                    setErrors({ ...errors, teamName: "" });
                    return { ...prevValue, teamName: newValue };
                }else {
                    setErrors({ ...errors, teamName: "border-red-400 focus:border-red-500" });
                    return { ...prevValue, teamName: newValue };
                }
            } else if (inputName === "mobile") {
                if (newValue && (/^[0-9]{10}$/.test(newValue))) {
                    setErrors({ ...errors, mobile: "" });
                    return { ...prevValue, mobile: newValue };
                }else {
                    setErrors({ ...errors, mobile: "border-red-400 focus:border-red-500" });
                    return { ...prevValue, mobile: newValue };
                }
            } else if (inputName === "gender") {

                const { value, checked } = e.target;

                let studentGender;

                if (checked) {
                    studentGender = value;
                }

                return {...prevValue, gender: studentGender}

            } else if (inputName === "year") {
                const { value, checked } = e.target;

                let yearSeleted;

                if (checked) {
                    yearSeleted = value;
                }
                return {...prevValue, year: yearSeleted}

            } else if (inputName === "branch") {
                if (newValue) {
                    setErrors({ ...errors, branch: "" });
                    return { ...prevValue, branch: newValue };
                }else {
                    setErrors({ ...errors, branch: "border-red-400 focus:border-red-500" });
                    return { ...prevValue, branch: newValue };
                }
            }
        });

    };


    const handleOnClick = () => {
        let f=1;
        for (const key in studentData) {
            if (studentData[key] === "" && memberCount === 0) {
                f=0;
                setErrors((prevValue) => {return { ...prevValue, [key]: "border-red-400 focus:border-red-500" }} );
            }
            else if (studentData[key] === "" && key !== "mobile" && key !== "teamName") {
                f=0;
                setErrors((prevValue) => {return { ...prevValue, [key]: "border-red-400 focus:border-red-500" }} );
            }
        }

        if (f){
            addStudentHandler(memberCount, studentData.name, studentData.email, studentData.teamName, studentData.gender, studentData.mobile, studentData.branch, studentData.year);
            // console.log(memberCount, studentData);
            setMemberCount(memberCount + 1);
            handleClearFields();
        }
    }


    const handleClearFields = () => {
        setStudentData({
            name: "",
            email: "",
            teamName: "",
            gender: "",
            mobile: "",
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
        let select = document.getElementsByName('default');
        console.log(select[0]);
        select[0].selected = true;
    }



    //--------------------------------------------------------------------------------

    const handleSubmit = () => {
        console.log("Payment");
        // Send studentList to Raja
        setPay(1);
    }


    const handlePayClickQR = () => {
            //handleSubmit()
        console.log("QR");

        if(memberCount === 3){
            
            setQr((prevValue) => {return <>
                        <div className='w-full rounded-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-3'>
                            <div className="flex flex-col items-center justify-center p-3 bg-[#1f1f1f] w-full rounded-xl">
                                <img className=" bg-white w-full h-full " src={QR60} alt="QR Code of member 3" />
                            </div>
                        </div>
                        <a href="https://docs.google.com/forms/d/1P8QWlZP9D_ZUixLyURtxqbyfEzK1jvcHCdMraMgYKJM" target="_blank" rel="noreferrer" className=" text-center text-md mt-3">
                            <button className='w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-3 rounded-xl mt-1' >Click here to Submit the Payment Screenshot</button>
                        </a>    
                    </>
                    })
            console.log("3");
        } else if(memberCount === 4){
                    setQr((prevValue) => {return <>
                        <div className='w-full rounded-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-3'>
                            <div className="flex flex-col items-center justify-center p-3 bg-[#1f1f1f] w-full rounded-xl">
                                <img className=" bg-white w-full h-full " src={QR80} alt="QR Code of member 3" />
                            </div>
                        </div>
                        <a href="https://docs.google.com/forms/d/1P8QWlZP9D_ZUixLyURtxqbyfEzK1jvcHCdMraMgYKJM" target="_blank" rel="noreferrer" className=" text-center text-md mt-1">
                            <button className='w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-3 rounded-xl mt-1' >Click here to Submit the Payment Screenshot</button>
                        </a>    
                    </>
                    })
        } else if(memberCount === 5){
            setQr((prevValue) => {return <>
                        <div className='w-full rounded-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-3'>
                            <div className="flex flex-col items-center justify-center p-3 bg-[#1f1f1f] w-full rounded-xl">
                                <img className=" bg-white w-full h-full " src={QR100} alt="QR Code of member 3" />
                            </div>
                        </div>
                        <a href="https://docs.google.com/forms/d/1P8QWlZP9D_ZUixLyURtxqbyfEzK1jvcHCdMraMgYKJM" target="_blank" rel="noreferrer" className=" text-center text-md mt-3">
                            <button className='w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-3 rounded-xl mt-3' >Click here to Submit the Payment Screenshot</button>
                        </a>    
                    </>
                    })
        }

    }

    const handlePayClickCash = () => {
        //handleSubmit()
        console.log("Cash");
        setQr((prevValue) => {return <img className=" bg-white w-full h-full rounded-xl " src={mogojastro} alt="Mogojastro poster" />})
    }

    //--------------------------------------------------------------------------------


    var name, team, submit;


    if (memberCount === 0){
    name = <div className="mb-2">
    
        <label htmlFor="fName" className="block mb-1 text-s font-bold text-gray-100 ">Team Lead Name<span className='text-red-600'>*</span></label>
        <input type="text" name="fName" value={studentData.name} onChange={handleStudentChange} className={`shadow-sm bg-gray-50 border-[4px] box-border text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 outline-none placeholder:text-gray-400 placeholder:font-medium ${errors.name ? errors.name : "border-sky-400 focus:border-blue-500"} `} placeholder="Enter your Team-Lead name"  required />
    </div>

    team = (<>
    <div className="mb-2">
        <label htmlFor="teamName" className="block mb-2 text-s font-bold text-gray-100 ">Team Name<span className='text-red-600'>*</span></label>
        <input type="url" name="teamName" value={studentData.teamName} onChange={handleStudentChange} className={`shadow-sm bg-gray-50 border-[4px] box-border text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 outline-none placeholder:text-gray-400 placeholder:font-medium ${errors.teamName ? errors.teamName : "border-sky-400 focus:border-blue-500"} `} placeholder="Some Thing Cool" required />
    </div>
    <div className="mb-2">
        <label htmlFor="mobile" className="block mb-2 text-s font-bold text-gray-100 ">Mobile Number of Team Leader<span className='text-red-600'>*</span></label>
        <input type="tel" maxLength="10" minLength="10" name="mobile" value={studentData.mobile} onChange={handleStudentChange} className={`shadow-sm bg-gray-50 border-[4px] box-border text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 outline-none placeholder:text-gray-400 placeholder:font-medium ${errors.mobile ? errors.mobile : "border-sky-400 focus:border-blue-500"} `} placeholder="+91-XXXXXXXXXX" required />
    </div>
    </>)
    } else {
    name = <div className="mb-2">
        <label htmlFor="fName" className="block mb-1 text-s font-bold text-gray-100 ">Member {memberCount} Name<span className='text-red-600'>*</span></label>
        <input type="text" name="fName" value={studentData.name} onChange={handleStudentChange} className={`shadow-sm bg-gray-50 border-[4px] box-border text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 outline-none placeholder:text-gray-400 placeholder:font-medium ${errors.name ? errors.name : "border-sky-400 focus:border-blue-500"} `} placeholder={`Enter your Member ${memberCount} name`} required />
    </div>

    team = null;
    }


    if (memberCount >= 3){
        submit =  <button onClick={handleSubmit} type="button" className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2 text-center ">Submit</button>
    }



    if (memberCount <= 4 && !pay){
    return (
        <>
            <form className="flex accent-blue-600 flex-col w-[335px] px-4 py-4 sm:w-[380px] sm:px-6 sm:py-6 md:w-full md:px-8 md:py-10 rounded-xl shadow-2xl bg-gradient-to-r from-violet-500 to-indigo-500 ">
                {name}
                    
                <div className="mb-2">
                    <label htmlFor="Email" className="block mb-2 text-s font-bold text-gray-100 ">Your Email (AOT Mail)<span className='text-red-600'>*</span></label>
                    <input type="email" name="Email" value={studentData.email} onChange={handleStudentChange} className={`shadow-sm bg-gray-50 border-[4px] box-border text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 outline-none placeholder:text-gray-400 placeholder:font-medium ${errors.email ? errors.email : "border-sky-400 focus:border-blue-500"} `} placeholder="name.title@aot.edu.in" pattern="^([a-zA-Z\.\0-9]+)@aot.edu.in$" required />
                </div>
                
                {team}
                
                <div className="mb-2">
                    <label htmlFor="branch" className="block mb-2 text-s font-bold text-gray-100 ">Branch<span className='text-red-600'>*</span></label>
                    <select onChange={handleStudentChange} placeholder='CSBS' name='branch'  className={`shadow-sm bg-gray-50 border-[4px] box-border text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 outline-none placeholder:text-gray-400 placeholder:font-medium ${errors.branch ? errors.branch : "border-sky-400 focus:border-blue-500"} `} required >
                        <option value="" selected name="default">Select branch</option>
                        <option value="CSE">CSE</option>
                        <option value="CSBS">CSBS</option>
                        <option value="ECE">ECE</option>
                        <option value="EEE">EEE</option>
                        <option value="EE">EE</option>
                        <option value="ME">ME</option>
                        <option value="IT">IT</option>
                        <option value="MCA">MCA</option>
                        <option value="AEIE">AEIE</option>
                        {/* IT, MCA, AEIE */}
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
                <h1 className='block mb-2 font-bold text-yellow-400 text-2xl text-center'>Team - {studentList[0].teamName}</h1>
                <h1 className='block mb-2 font-bold text-gray-100 text-2xl text-center'>Pay the way you want</h1>
                {qr}
                <br></br>
                <button onClick={handlePayClickQR} type="button" className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-lg px-6 py-3 text-left ">Scan the QR and pay Online</button>
                <br></br>
                <button onClick={handlePayClickCash} type="button" className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-lg px-6 py-3 text-left ">Pay in Cash</button>
            </div>
        </>);
    }
}

export default RegistrationForm