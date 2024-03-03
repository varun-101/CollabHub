import React from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'
 import { MdArrowBack } from "react-icons/md";
 import { Link } from 'react-router-dom';


function DHeader({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-right'><Link to="/">
            <MdArrowBack className='icon' />
         Go Back
         </Link>
        </div>
        
        
    </header>
  )
}

export default DHeader