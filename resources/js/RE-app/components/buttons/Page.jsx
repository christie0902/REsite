import React from 'react'

const Page = ({pageNr}) => {
  return (
    <li>
    <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-black bg-white/60 border border-transparent hover:bg-white/50 hover:text-gray-700 dark:bg-gray-800/30 backdrop-blur-md">{pageNr}</a>
  </li>
  )
}

export default Page