import React from 'react'

const NavItem = ({title, url, currentPage}) => {
  return (
    <div className={`nav-item ${currentPage === title ? "bg-[url('src/assets/website-design/blood-splatter.png')]" : ""}`}>
    <a className='text-white text-xl' href={url}>{title}</a>
</div>
  )
}

export default NavItem