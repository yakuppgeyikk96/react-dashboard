import { createContext, useState } from 'react'
import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import './Dashboard.css'

export const SidebarOpened = createContext()

const Dashboard = (props) => {
  const navbarTitles = ['Home', 'Projects', 'Tasks']
  const [sidebarOpened, setSidebarOpened] = useState(false)

  return (
    <div className='dashboard-container'>
      <SidebarOpened.Provider value={[sidebarOpened, setSidebarOpened]}>
        <aside>
          <Sidebar />
        </aside>
        <div className='right-container'>
          <header>
            <Navbar navbarTitles={navbarTitles} />
          </header>
          <main>{props.children}</main>
        </div>
      </SidebarOpened.Provider>
    </div>
  )
}

export default Dashboard
