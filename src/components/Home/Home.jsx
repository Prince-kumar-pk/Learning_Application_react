import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faPython,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <>
      {/* <div className="text-[50px] text-center">Hello</div> */}

      <div className=" flex flex-wrap  text-center flex-grow flex-col w-[100%] h-[60vh]">
        <div className="w-[40%] pt-[15%] flex flex-col">
          <h1 className="text-lg text mb-7">
            Welcome to the Future of Learnings
          </h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          voluptas rerum debitis molestias placeat reprehenderit? Expedita sit
          cupiditate, voluptas doloribus recusandae et voluptatem sequi placeat,
          saepe, magni tenetur laudantium possimus!
          <div className="flex flex-none">
            <button className="btn mt-7">Explore..</button>
            <button className="btn mt-7">Explore..</button>
          </div>
        </div>
{/* ###############################__________________----------------------------------------------------- */}
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#4B8BBE" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>

      <div className="items-center w-[100%] h-[150px] flex flex-row justify-center mt-11 mb-11">
        <img
          src="https://sriaurobindouniversity.edu.in/assets/images/scroll-down.gif"
          alt=" scroller"
          className="h-[100%] w-[200px]"
        />
      </div>
{/* ######################################################## */}
      <div className=" flex flex-row items-center justify-evenly mt-14">
        <div className="flex flex-col text-center ">
          <div className="text-3xl text-orange-400">
            100 <span>K+</span>
          </div>
          <div className="text-2xl text-gray-700">Students</div>
        </div>
        <div className="flex flex-col text-center">
          <div className="text-3xl text-orange-400">
            80 <span>K+</span>
          </div>
          <div className="text-2xl text-gray-700">Certificates delivered</div>
        </div>
        <div className="flex flex-col text-center">
          <div className="text-3xl text-orange-400">
            45<span>K+</span>
          </div>
          <div className="text-2xl text-gray-700">Streamed minutes</div>
        </div>
        <div className="flex flex-col text-center">
          <div className="text-3xl text-orange-400">
            100 <span>Tb+</span>
          </div>
          <div className="text-2xl text-gray-700">Content Till Now</div>
        </div>
        <div className="flex flex-col text-center">
          <div className="text-3xl text-orange-400">
            50 <span>+</span>
          </div>
          <div className="text-2xl text-gray-700">Creators</div>
        </div>
        <div className="flex flex-col text-center">
          <div className="text-3xl text-orange-400">
            100 <span>+</span>
          </div>
          <div className="text-2xl text-gray-700 ">Programs available</div>
        </div>
      </div>

      <br />
{/* ################### */}
      <div className="flex h-[300px] justify-around mt-20 flex-wrap">
        <div className="bg-[url('https://media.istockphoto.com/id/935507394/photo/young-female-college-student-in-chemistry-class-writing-notes-focused-student-in-classroom.jpg?s=612x612&w=0&k=20&c=5eYl1a3e3pKYib13DQREZx_Ei0QdpGr8j99f1JJUxCo=')]  h-[100%] w-[40%] rounded-xl  flex flex-col flex-wrap text-start justify-center  align-middle  ">
          
          <div className="text-1xl text-white">Unlock your learning potential with CipherSchools</div>
          <div className="text-4xl text-orange-400 mt-5">Best platform for the students</div>
        <button className="btn-left mt-5 relative left-0">Student</button>
        </div>
      
        <div className="bg-[url('https://apicms.thestar.com.my/uploads/images/2022/05/15/1585587.jpg')] bg-cover h-[100%] w-[40%] rounded-xl flex flex-col flex-wrap text-start justify-center  align-middle ">
        <div className="text-1xl text-white">Empowering students to open their minds to utmost knowledge</div>
          <div className="text-4xl text-orange-400  mt-5">Be the mentor you never had</div>
        <button className="btn-left mt-5 relative left-0">Creaters</button>
        </div>
      </div>

      {/* Top creaters company section  */}
        <div className="text-amber-500 text-5xl text-center mt-10"> Our Top Creaters From</div>
      <div className="w-full mt-28">
        <div className="h-[100px]  overflow-hidden relative w-auto">
            <ul className="flex justify-between h-[100%] w-[calc(250px*14)] animate-scroll">
                <li className="w-[500px] h-[60px] bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png')] bg-cover bg-center  "></li>
                <li className="w-[500px] h-[60px] bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png')] bg-cover bg-center  "></li>
                <li className="w-[500px] h-[60px] bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png')] bg-cover bg-center  "></li>
                <li className="w-[500px] h-[60px] bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png')] bg-cover bg-center  "></li>
                <li className="w-[500px] h-[60px] bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png')] bg-cover bg-center  "></li>
                <li className="w-[500px] h-[60px] bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png')] bg-cover bg-center  "></li>
               
            </ul>
        </div>
</div>
    </>
  );
};

export default Home;
