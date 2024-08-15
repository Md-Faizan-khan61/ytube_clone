import React from 'react'
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa6";
import { BiVideo } from "react-icons/bi";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { MdHistory } from "react-icons/md";
import { MdPlaylistPlay } from "react-icons/md";
import { MdOutlinePlaylistAddCheck } from "react-icons/md";
import { BsFire } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { SiTrendmicro } from "react-icons/si";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { PiMusicNoteLight } from "react-icons/pi";
import { PiFilmSlateLight } from "react-icons/pi";
import { CgMediaLive } from "react-icons/cg";
import { SiYoutubegaming } from "react-icons/si";
import { FaRegNewspaper } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { PiLightbulbLight } from "react-icons/pi";
import { SiStylelint } from "react-icons/si";
import { MdPodcasts } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { MdOutlineFlag } from "react-icons/md";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { MdOutlineFeedback } from "react-icons/md";
import { useUtils } from '../context/utilscontext';

function Sidebar() {

  const {MobileShow, setMobileShow, isSidebar} = useUtils();

  const sidebarItems = [
    {
      groupName : "",
      groupItems :[
        {
          id:1,
          name:"Home",
          icon: <GoHome />
        },
        {
          id:2,
          name:"Shorts",
          icon: <SiYoutubeshorts />
        },
        {
          id:3,
          name:"Subscriptions",
          icon: <MdOutlineSubscriptions />
        },
      ]
    },
    {
      groupName : "You >",
      groupItems :[
        {
          id:1,
          name:"Your Channel",
          icon: <MdOutlinePlaylistAddCheck />
        },
        {
          id:2,
          name:"History",
          icon: <MdHistory />
        },
        {
          id:3,
          name:"Playlists",
          icon: <MdPlaylistPlay />
        },
        {
          id:4,
          name:"Your videos",
          icon: <BiVideo />
        },
        {
          id:5,
          name:"Watch Later",
          icon: <MdOutlineWatchLater />
        },
        {
          id:6,
          name:"Liked videos",
          icon: <AiOutlineLike />
        },
      ]
    },
    {
      groupName : "Explore",
      groupItems :[
        {
          id:1,
          name:"Trending",
          icon: <BsFire />
        },
        {
          id:2,
          name:"Shopping",
          icon: <HiOutlineShoppingBag />
        },
        {
          id:3,
          name:"Music",
          icon: <PiMusicNoteLight />
        },
        {
          id:4,
          name:"Films",
          icon: <PiFilmSlateLight />
        },
        {
          id:5,
          name:"Live",
          icon: <CgMediaLive />
        },
        {
          id:6,
          name:"Gaming",
          icon: <SiYoutubegaming />
        },
        {
          id:7,
          name:"News",
          icon: <FaRegNewspaper />
        },
        {
          id:8,
          name:"Sport",
          icon: <TfiCup />
        },
        {
          id:9,
          name:"Cources",
          icon: <PiLightbulbLight />
        },
        {
          id:10,
          name:"Fashion & beauty",
          icon: <SiStylelint />
        },
        {
          id:11,
          name:"Podcasts",
          icon: <MdPodcasts />
        },
      ]
    },
    {
      groupName : "More from Youtube",
      groupItems :[
        {
          id:1,
          name:"YouTube Premium",
          icon: <FaYoutube />
        },
        {
          id:2,
          name:"YouTube Studio",
          icon: <SiYoutubestudio />
        },
        {
          id:3,
          name:"YouTube Music",
          icon: <SiYoutubemusic />
        },
        {
          id:4,
          name:"YouTube kids",
          icon: <SiYoutubekids />
        }   
      ]
    },
    {
      groupName : "",
      groupItems :[
        {
          id:1,
          name:"Settings",
          icon: <CiSettings />
        },
        {
          id:2,
          name:"Report history",
          icon: <MdOutlineFlag />
        },
        {
          id:3,
          name:"Help",
          icon: <IoIosHelpCircleOutline />
        },
        {
          id:4,
          name:"Send feedback",
          icon: <MdOutlineFeedback />
        }   
      ]
    },
  ]

  const ModelOverlay = () => {
     return (
      <div className='flex fixed top-0 right-0 bottom-0 left-0 bg-black/50 '
      onClick={()=>setMobileShow(!MobileShow)}
      >
      </div>
     )
  }
  return (
   <>
     <div className={`${ 
    MobileShow
    ? "fixed top-0 left-0 bottom-0 transition-all duration-300 bg-white z-40 h-screen w-[70%] sm:w-[30%]"
    : "hidden w-[35%] h-[calc(100vh-6.625rem)]"
    } xl:static xl:block px-2 lg:px-6 overflow-y-scroll overflow-x-hidden scroll-smooth scrollbar-thin`}>
       {/*------ Home -------*/}
      <div className='space-y-3'>
        {sidebarItems.map((group)=> {
        return (         
        <div>
          <h1 className='font-bold'>{group.groupName}</h1> 
          {group.groupItems.map((item)=>
          <div key={item.id} className='flex items-center space-x-3 hover:bg-gray-300 duration-300 cursor-pointer rounded-xl p-1 my-3'>
            <div className='text-xl'>{item.icon}</div>
            <span>{item.name}</span>
          </div>
          )}
        </div>
        )}
        )}  
      </div>
      <br />
      
      <br />
      <hr />
      {/* -----footer section ----- */}
        <div className='mt-4'>
        <span className='text-xs text-gray-500 font-semibold'>
          <p>
          About  Press  Copyright
          <br />
          contact us  Creator  Advertise
          <br />
          Developers
          </p>
         <br />
          <p>
           Terms Privacy Policy & Safety<br />
           How YouTube Works<br />
           Test new features
          </p>
          <br />
          <p>© 2024 Google LLC</p>
        </span>
        </div>
    </div>
    {MobileShow ? <ModelOverlay/> : null}
   </>
  )
}

export default Sidebar