import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'

import './Layout.css'

export default function Layout() {
  return (
    <div>
        {/* <div className="App"> */}
          <div className="fixed" >
      <Sidebar />
          </div>
      <div className="md:w-[90%] ml-[120px] mr-auto md:container lg:w-[90%]  border-view">
        <Outlet/>
      </div>
    </div>
    // </div>
  )
}
