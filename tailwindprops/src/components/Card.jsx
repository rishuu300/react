import React from 'react'

function Card({username = " Rishu ", post="Not assigned"}) {
  return (
    <div>
      <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">

        <div>
          <img
            className="size-48 shadow-xl rounded-md object-cover"
            alt="Card cover"
            src="/pexels-nos-photo-2165073715-40437110.jpg"
          />
        </div>

        <div className="flex flex-col items-center md:items-start">
          <span className="text-2xl font-medium">
            {username}
          </span>

          <span className="font-medium text-sky-500">
            {post}
          </span>

          <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
            <span>No. 4</span>
            <span>·</span>
            <span>2025</span>
          </span>
        </div>

      </div>
    </div>
  )
}

export default Card