import { useContext, useState } from 'react';
import { SidebarOpened } from '../dashboard/Dashboard';
import ListItem from './ListItem';
import logo from '../../icons/logo.png';
import './Sidebar.css';

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sidebarItems = [
    {
      title: 'Dashboard',
      icon: 'home',
      to: '/',
    },
    {
      title: 'Calendar',
      icon: 'calendar',
      to: '/calendar',
    },
    {
      title: 'Tasks',
      icon: 'clipboard',
      to: 'tasks',
    },
    {
      title: 'Chat',
      icon: 'chat',
      to: 'chat',
    },
    {
      title: 'Meetings',
      icon: 'meeting',
      to: 'meetings',
    },
    {
      title: 'Projects',
      icon: 'blueprint',
      to: 'projects',
    },
  ];
  const [sidebarOpened, _] = useContext(SidebarOpened);
  return (
    <div
      className={`sidebar-container ${sidebarOpened ? 'w-15rem' : 'w-4rem'}`}
    >
      <div className="sidebar-top">
        <div className="sidebar-top-logo">
          <img src={logo} alt="Logo" width={36} />
        </div>
        <div className="sidebar-top-text">
          <p>Buesy</p>
        </div>
      </div>
      <div className="sidebar-bottom">
        <ul>
          {sidebarItems.map((item, index) => (
            <li key={index}>
              <ListItem
                onClicked={(e) => setActiveIndex(e)}
                index={index}
                title={item.title}
                icon={item.icon}
                to={item.to}
                active={activeIndex === index}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
