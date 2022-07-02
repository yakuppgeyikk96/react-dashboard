import { createContext, useState } from 'react'
import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import './Dashboard.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import Calendar from '../../pages/Calendar'
import Tasks from '../../pages/Tasks'
import Chat from '../../pages/Chat'
import Meetings from '../../pages/Meetings'
import Projects from '../../pages/Projects'

export const SidebarOpened = createContext()

const Dashboard = (props) => {
  const navbarTitles = ['Home', 'Projects', 'Tasks']
  const [sidebarOpened, setSidebarOpened] = useState(false)

  // getAllTasks().then((res) => console.log(res.data));

  return (
    <div className='dashboard-container'>
      <SidebarOpened.Provider value={[sidebarOpened, setSidebarOpened]}>
        <Router>
          <aside>
            <Sidebar />
          </aside>
          <div className='right-container'>
            <header>
              <Navbar navbarTitles={navbarTitles} />
            </header>
            <main>
              <Routes>
                <Route path='/tasks' element={<Tasks />} />
                <Route path='/calendar' element={<Calendar />} />
                <Route path='/chat' element={<Chat />} />
                <Route path='/meetings' element={<Meetings />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/' element={<Home />} />
              </Routes>
            </main>
          </div>
        </Router>
      </SidebarOpened.Provider>
    </div>
  )
}

export default Dashboard
