
import React from 'react';
import { Link } from 'react-router-dom';
import HeaderPro from '../Components/HeaderPro';
import Footer from '../Components/Footer';


function Home() {
  return (

    <div>
      
      <HeaderPro />
      <div className=' bg-indigo-400 w-full h-full'>

      <section class="text-gray-600 body-font">
  <div class="container mx-4 flex px-20 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src="https://img.freepik.com/premium-vector/programming-home_118813-4357.jpg"/>
  
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Welcome to Collab Hub</h1>
      <p class="mb-8 leading-relaxed">Step into the realm of boundless collaboration with CollabHub! </p>
      <div class="flex w-full md:justify-start justify-center items-end">
        <a href='http://localhost:3030/login'><button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Change account</button></a>
      </div>
      <p class="text-sm mt-2 text-gray-500 mb-8 w-full">Register or Login?</p>
      <div class="flex lg:flex-row md:flex-col">
        
       
      </div>
    </div>
  </div>
</section>

<section class="text-gray-600 body-font">
  <div class="container flex px-20 py-24 mx-4 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Convenient Coding Environment</h1>
      <p class="mb-8 leading-relaxed">A collaborative coding environment where multiple developers can work together on the same project in real-time, fostering seamless collaboration and boosting productivity.</p>
      <div class="flex justify-center w-full md:justify-start justify-center items-end">
        
        <a href='http://localhost:5000/'><button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Go to Coding Room</button></a>
      </div>
      <p class="text-sm mt-2 text-gray-700 mb-8 w-full">Work with your peers easily.</p>
      
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?size=626&ext=jpg&ga=GA1.1.98259409.1709078400&semt=sph"/>
    </div>
  </div>
</section>

<section class="text-gray-600 body-font">
  <div class="container mx-4 flex px-20 py-24  md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src="https://img.freepik.com/premium-photo/desktop-source-code-wallpaper-by-computer-language-with-coding-programming_33771-595.jpg"/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Open Source Platform</h1>
      <p class="mb-8 leading-relaxed">An open-source platform like GitHub, focusing on repository discovery, collaboration, and learning. It offers advanced search, bookmarking, community interaction, and integration with development tools. </p>
      <div class="flex w-full md:justify-start justify-center items-end">
        <a href='http://localhost:3006/'><button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Head to Open Source Projects</button></a>
      </div>
      <p class="text-sm mt-2 text-gray-500 mb-8 w-full">What you waiting for?</p>
      <div class="flex lg:flex-row md:flex-col">
        
       
      </div>
    </div>
  </div>
</section>


      </div>
      <Footer/>




    </div>

    

  )
}

export default Home

