import { abbreviateNumber } from 'js-abbreviation-number'
import React from 'react'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Time from '../loader/Time'

function SuggestedVideo({video}) {
  return (
    <div>
         <Link to={`/video/${video?.videoId}`}>
         <div className='flex mb-3'>
            <div className='relative h-24 lg:h-20 xl:h-24 w-40 min-w-[168px] lg:w-32 lg:min-w-[128px] xl:w-40 xl:min-w-[168px] rounded-xl hover:rounded-none duration-200 overflow-hidden'>
              <img 
              className='h-full w-full rounded-lg '
              src={video?.thumbnails[0]?.url} alt=''/>
              {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
            </div>
           {/*----- Avatar and Title.. ------ */}
            <div className='flex space-x-3 mt-3'>
            <div className='flex items-start'>
            {/* <div className='h-9 w-9 rounded-full overflow-hidden border'>
                <img 
                src={video?.author?.avatar[0].url}
                className='h-full w-full rounded-full overflow-hidden'
                />
            </div> */}
            </div>
            <div>
              <span className='text-sm font-bold line-clamp-2'>
                {video?.title}
              </span>
              <span className='flex items-center text-sm font-semibold text-[12px] text-gray-500 mt-1'>
                {video?.author?.title}
                {video?.author?.badges[0]?.type == "VERIFIED_CHANNEL" && 
                (<BsFillCheckCircleFill className='text-gray-600 ml-2 text-[12px]'/>)
                }
              </span>
              <div className='flex text-gray-500 text-[12px]'>
                <span>
                  {`${abbreviateNumber(video?.stats?.views)} views`}
                </span>
                <span className=' text-[22px] font-bold mx-1 relative top-[-14px]'>
                  .
                </span>
                <span>
                  {video?.publishedTimeText}
                </span>
              </div>
            </div>
            </div>
         </div>
       </Link>
    </div>
  )
}

export default SuggestedVideo
