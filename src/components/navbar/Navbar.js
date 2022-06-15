import { useContext } from 'react'
import './Navbar.css'
import hamburger from '../../icons/hamburger.png'
import search from '../../icons/search.png'
import profile_photo from '../../icons/profile_photo.jpg'
import setting from '../../icons/setting.png'
import notification from '../../icons/notification.png'
import { SidebarOpened } from '../dashboard/Dashboard'

const Navbar = () => {
  const [sidebarOpened, setSidebarOpened] = useContext(SidebarOpened)
  return (
    <div className='navbar-container'>
      <div
        className='sidebar-switch-icon'
        onClick={() => setSidebarOpened(!sidebarOpened)}
      >
        <img width={24} src={hamburger} alt='Hamburger' />
      </div>
      <div className='navbar-searchbar'>
        <img width={20} src={search} alt='search' />
        <input type='text' placeholder='Search...' />
      </div>
      <div className='navbar-actions'>
        <div className='navbar-actions-notification'>
          <div className='notification-number'>3</div>
          <img src={notification} alt='Setting' width={18} />
        </div>
        <div className='navbar-actions-setting'>
          <img src={setting} alt='Setting' width={18} />
        </div>
        <div className='navbar-actions-profile'>
          <div className='navbar-actions-profile-img'>
            <img src={profile_photo} alt='Profile' />
          </div>
          <div>Marie N.</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
