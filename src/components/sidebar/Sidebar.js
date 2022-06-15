import { useContext } from 'react'
import { SidebarOpened } from '../dashboard/Dashboard'
import ListItem from './ListItem'
import logo from '../../icons/logo.png'
import './Sidebar.css'

const Sidebar = () => {
  const sidebarItems = [
    {
      title: 'Dashboard',
      icon: 'home',
    },
    {
      title: 'Calendar',
      icon: 'calendar',
    },
    {
      title: 'Tasks',
      icon: 'clipboard',
    },
    {
      title: 'Chat',
      icon: 'chat',
    },
    {
      title: 'Meetings',
      icon: 'meeting',
    },
    {
      title: 'Projects',
      icon: 'blueprint',
    },
  ]
  const [sidebarOpened, _] = useContext(SidebarOpened)
  return (
    <div
      className={`sidebar-container ${sidebarOpened ? 'w-15rem' : 'w-4rem'}`}
    >
      <div className='sidebar-top'>
        <div className='sidebar-top-logo'>
          <img src={logo} alt='Logo' width={36} />
        </div>
        <div className='sidebar-top-text'>
          <p>Buesy</p>
        </div>
      </div>
      <div className='sidebar-bottom'>
        <ul>
          {sidebarItems.map((item, index) => (
            <li key={index}>
              <ListItem title={item.title} icon={item.icon} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
