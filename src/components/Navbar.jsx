import React, { useEffect, useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import logo from "../../public/logo.png"
import profile from "../../public/profile.jpg";
import { useNavigate } from 'react-router-dom';
import { useUtils } from '../context/utilscontext';
import { IoIosSearch } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";

function Navbar() {

  const [searchQuery , setSearchQuery] = useState();  
  const {isSidebar, setIsSidebar, MobileShow, setMobileShow} = useUtils();
  const [searchbar, setSearchbar] = useState(false);

  useEffect(()=>{
     console.log({isSidebar, MobileShow});     
  },[isSidebar])
  const navigate = useNavigate();
  const searchQueryHandler = () => {
        if((event?.key==="Enter" || event === "searchButton" ) && searchQuery?.length > 0)
         {
          navigate(`/search/${searchQuery}`)
          setSearchQuery("")
         }
  }

  const handleSidebar = () => {
         if(window.innerWidth <= 1000){
            setIsSidebar(!isSidebar);
            setMobileShow(!MobileShow);                     
         }
       setIsSidebar(!isSidebar);             
  };

  if(searchbar){
   return (
      <div className='flex justify-between px-6 py-2 fixed top-0 w-[100%] bg-white items-center'>
            <IoArrowBack size={20} onClick={()=>setSearchbar(!searchbar)}/>
            <div className='flex flex-grow mx-3'>
            <div className='w-[100%] px-3 py-2 rounded-l-full border'>
            <input type='text' placeholder='search'
               className='outline-none w-[100%]' 
               onChange={(e)=>{setSearchQuery(e.target.value)}}
               onKeyUp={searchQueryHandler}
               value={searchQuery}
               />
            </div>
            <button className='px-4 py-2 rounded-r-full border' onClick={()=>searchQueryHandler("searchButton")}><CiSearch size={"20px"}/></button>
            </div>
            <IoMdMic size={"42px"} className='ml-3 rounded-full p-2 hover:bg-gray-200 duration-200 cursor-pointer'/>
      </div>
   )
  }

  return (
    <div className='flex justify-between px-6 py-2 fixed top-0 w-[100%] bg-white '>
        
        <div className='flex items-center space-x-4 cursor-pointer '>
            <AiOutlineMenu className='text-xl cursor-pointer' onClick={handleSidebar} />
            <img src={logo} className='w-28'/>
            </div>
        
        <div className='hidden md:flex w-[38%]'>
           <div className='w-[100%] px-3 py-2 rounded-l-full border'>
           <input type='text' placeholder='search'
            className='outline-none w-[100%]' 
            onChange={(e)=>{setSearchQuery(e.target.value)}}
            onKeyUp={searchQueryHandler}
            value={searchQuery}
            />
           </div>
           <button className='px-4 py-2 rounded-r-full border' onClick={()=>searchQueryHandler("searchButton")}><CiSearch size={"20px"}/></button>
           <IoMdMic size={"42px"} className='ml-3 rounded-full p-2 hover:bg-gray-200 duration-200 cursor-pointer'/>
        </div>
        
        <div className='flex space-x-4 items-center'>
         <IoIosSearch 
         className='text-2xl lg:hidden md:block'
         onClick={()=>setSearchbar(!searchbar)}
         />
         <RiVideoAddLine size={"24px"} className='cursor-pointer'/>
         <AiOutlineBell size={"24px"} className='cursor-pointer'/>
         <img src={profile} alt='profile' className='w-10 rounded-full cursor-pointer'></img>
        </div>
    </div>
  )
}

export default Navbar