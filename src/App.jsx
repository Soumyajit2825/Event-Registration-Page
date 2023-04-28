import { useState } from "react";
import Header from "./components/Header";
import RegistrationForm from "./components/RegistrationForm";
import StudentCard from "./components/StudentCard";



function App() {

  const [studentList, setStudentList] = useState([]);


  const addStudentHandler = (name, email, teamName, gender, mobile, branch, year) => {

    setStudentList((prevUser) => {

      return [...prevUser, {
        id: Math.random().toString(),
        name: name,
        email: email,
        teamName: teamName,
        gender: gender,
        mobile: mobile,
        branch: branch,
        year: year,
      }];

    })

  }



  return (
    <div className="flex h-full md:h-screen flex-col bg-indigo-200 ">
      <Header />
      <div className=" h-full  flex flex-col md:grid md:grid-cols-12 overflow-y-hidden ">
        <div className="flex  md:items-center justify-center  py-8 md:py-2 md:px-10 md:col-span-4   ">
          <RegistrationForm onAddStudent={addStudentHandler} />

        </div>
        <div className=" flex flex-col items-center justify-center  gap-y-6 px-4 pt-10 pb-6 md:col-span-8 md:px-6 md:pt-10 md:pb-10 md:items-start md:justify-items-center custom-scroll md:gap-6 md:border-l-[6px] md:border-indigo-500  md:overflow-y-scroll md:grid md:grid-cols-2  ">


          {studentList.length !== 0 ? (
            <>
              {studentList.map((student) => (


                <StudentCard
                  key={student.id}
                  name={student.name}
                  email={student.email}
                  gender={student.gender}
                  branch={student.branch}
                  year={student.year} />

              ))}
            </>


          ) : (
            <div className="items-center justify-center w-full h-[400px] md:w-[900px] md:h-full flex md:-mr-[500px] border-4 border-dotted border-violet-500 ">
                 <p className=" flex text-center font-inter font-semibold text-violet-700 text-2xl md:text-4xl">
                  No Students Registered Yet 
                 </p>
            </div>
            
            )}


        </div>
      </div>
    </div>
  );
}

export default App;
