import React from 'react'
import NavItem from './NavItem'
import { useState,useContext} from 'react'
import HomeMenu from './HomeMenu'
import Icon from './Icon'
import SearchBar from '../SearchBar'
import { Link } from 'react-router-dom';
import ProfileMenu from '../cards/ProfileMenu'
import Context from '../../store/Context'
import Register from '../../pages/Register'

const Header = () => {
  const [currentPage, setCurrentPage] = useState('Home')
  const {state, dispatch} = useContext(Context);

  return (
    <>
    <div className="header-container flex justify-between items-center bg-black">
          <div className="home-menu">
            <HomeMenu/>
          </div>
          <div className="navbar flex-row justify-between sm:w-7/12 lg:w-4/12 md:flex hidden">
            <Link to="/"><NavItem currentPage={currentPage} title="Home"/></Link>
            <Link to="/shop"><NavItem currentPage={currentPage} title="Shop"/></Link>
            <Link to="/customizer"><NavItem currentPage={currentPage} title="Customizer"/></Link>
            {/* <NavItem currentPage={currentPage} title="Customizer"/> */}
            <Link to="/community"><NavItem currentPage={currentPage} title="Community"/></Link>
            <Link to="/contact"><NavItem currentPage={currentPage} title="Contact"/></Link>
          </div>
          <div className="icon-container flex flex-row mr-10 gap-2">
          {state.searchActive
            && <SearchBar/>}
            <ProfileMenu/>
            <Icon type={"search"} />
            <Icon type={"cart"} />
            <Icon type={"profile"} />
          </div>
    </div>
    </>

  )
}

export default Header