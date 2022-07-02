import { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './ListItem.css'
import { SidebarOpened } from '../dashboard/Dashboard'

const ListItem = (props) => {
  const iconRef = useRef()
  const [showIconTitle, setShowIconTitle] = useState(false)
  const [sidebarOpened] = useContext(SidebarOpened)

  const handleMouseEnter = useCallback(() => setShowIconTitle(true), [])
  const handleMouseLeave = useCallback(() => setShowIconTitle(false), [])

  useEffect(() => {
    if (!sidebarOpened) {
      iconRef.current.addEventListener('mouseenter', handleMouseEnter)
      iconRef.current.addEventListener('mouseleave', handleMouseLeave)
    } else {
      iconRef.current.removeEventListener('mouseenter', handleMouseEnter)

      iconRef.current.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [sidebarOpened, handleMouseEnter, handleMouseLeave])

  return (
    <NavLink to={props.to} style={{ textDecoration: 'none' }}>
      <div
        className={`list-item ${props.active ? 'active' : ''}`}
        onClick={() => props.onClicked(props.index)}
        ref={iconRef}
      >
        <div className='list-item-icon'>
          <img
            width={24}
            src={require(`../../icons/${props.icon}.png`)}
            alt={props.icon}
          />
          <div
            className='icon-title'
            style={{ display: showIconTitle ? '' : 'none' }}
          >
            {props.title}
          </div>
        </div>
        <div className='list-item-text'>{props.title}</div>
      </div>
    </NavLink>
  )
}

export default ListItem
