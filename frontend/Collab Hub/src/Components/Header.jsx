// import React from 'react'

// function Header() {
//   return (
//     <div> 
      
//       <div class="text-gray-600 body-font">
//   <div class="container mx-auto flex items-center flex-wrap p-5 flex-col md:flex-row items-center">
//     <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//       <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
//         <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//       </svg>
//       <span class="ml-3 text-xl">Collab</span>
//     </a>
//     <nav class="flex items-center  md:ml-auto flex flex-wrap items-center text-base justify-center">
//       <a class="mr-5 hover:text-gray-900">First Link</a>
//       <a class="mr-5 hover:text-gray-900">Second Link</a>
//       <a class="mr-5 hover:text-gray-900">Third Link</a>
//       <a class="mr-5 hover:text-gray-900">Fourth Link</a>
//     </nav>
//     <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Login/Signup
//       <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
//         <path d="M5 12h14M12 5l7 7-7 7"></path>
//       </svg>
//     </button>
//   </div>
// </div>
//     </div>
//   )
// }

// export default Header

import React, {useState} from 'react'
import { Link } from 'react-router-dom';
// import Button from './Button';

const Header = () => {
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
          <Link to="/login">
          <button className='bg-indigo-600 text-white border-solid py-2 font-semibold px-6 rounded md:ml-8 hover:bg-indigo-500 duration-500'>
        Login/Signup
        </button>
        </Link>
        </ul>
      </div>
    </div>
  )
}

export default Header





