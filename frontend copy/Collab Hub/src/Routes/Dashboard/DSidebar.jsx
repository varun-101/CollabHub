import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 import { FaSignOutAlt } from "react-icons/fa";
 import { CgProfile } from "react-icons/cg";

function DSidebar({openSidebarToggle, OpenSidebar}) {
  return (
  

    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <CgProfile className='icon'/> Profile
                </a>
            </li>
            
            
            
            
            
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icon'/> Settings
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <FaSignOutAlt className='icon'/> Sign Out
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default DSidebar