import React from 'react'

function ListItem() {
    const categories = [
        "All","News","Music","Live","Mixes","Coaching","Ancient history","Motivation","Religious recitataion",
        "Media theories","Stock market","Dawah","Podcasts","Watched","New to you","Travel enthusias","dhruv rathee"
    ]
  return (
    <div className='flex overflow-x-scroll mx-3 scrollbar-none'>
    <div className='flex space-x-3 flex-nowrap'>
       {
        categories.map((category)=>
             <div className='flex-none cursor-pointer text-gray-700 bg-gray-200 hover:bg-slate-300 duration-300 rounded-xl px-4 py-1 font-medium'>
                {category}
             </div>
        )
       }
    </div>
    </div>
  )
}

export default ListItem