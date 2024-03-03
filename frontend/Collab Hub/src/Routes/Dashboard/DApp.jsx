import { useState } from 'react'
import './Dash.css'
import DHeader from './DHeader'
import DSidebar from './DSidebar'
import DHome from './DHome'
import Header from '../../Components/Header'

function DApp() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <>
    {/* <Header /> */}
    <div className='grid-container'>
      <DHeader OpenSidebar={OpenSidebar}/>
      <DSidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <DHome />
    </div>
    </>
  )
}

export default DApp

