import React, {useState} from 'react'
import { Link } from 'react-router-dom';
// import Button from './Button';

const HeaderPro = () => {
  let Links =[
    {name:"Home",link:"/"},
    {name:"Coding Room",link:"/"},
    {name:"About",link:"/"},
    {name:"Contact",link:"/"}
  ];
  let [open,setOpen]=useState(false);
  return (
    <div className=' shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex bg-white items-center justify-between py-4 md:px-10 px-7'>
        <div className=' font-bold text-2xl cursor-pointer flex items-center text-gray-800'>
          Logo
        </div>
        <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
        <ion-icon name={open ? 'close':'menu'}></ion-icon>
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
          {
            Links.map((link)=>(
              <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                <a href={link.link} className=' text-gray-800 hover:text-gray-400'>{link.name}</a>
              </li>

            )
            
            )

            
          }
          <Link to="/profile">
          <button className='bg-indigo-600 text-white border-solid py-2 font-semibold px-6 rounded md:ml-8 hover:bg-indigo-500 duration-500'>
        Profile
        </button>
        </Link>
        </ul>
      </div>
    </div>
  )
}

export default HeaderPro