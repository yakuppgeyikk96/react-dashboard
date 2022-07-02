import { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './ListItem.css'
import { SidebarOpened } from '../dashboard/Dashboard'

const ListItem = (props) => {
  const iconRef = useRef()
  const [showIconTitle, setShowIconTitle] = useState(false)
  const [sidebarOpened, _] = useContext(SidebarOpened)

  const handleMouseEnterCallback = useCallback(() => setShowIconTitle(true))
  const handleMouseLeaveCallback = useCallback(() => setShowIconTitle(false))
  useEffect(() => {
    if (!sidebarOpened) {
      iconRef.current.addEventListener(
        'mouseenter',
        handleMouseEnterCallback,
        true
      )
      iconRef.current.addEventListener(
        'mouseleave',
        handleMouseLeaveCallback,
        true
      )
    } else {
      console.log('A')
      iconRef.current.removeEventListener(
        'mouseenter',
        handleMouseEnterCallback,
        true
      )

      iconRef.current.removeEventListener(
        'mouseleave',
        handleMouseLeaveCallback,
        true
      )
    }
  }, [sidebarOpened, handleMouseEnterCallback, handleMouseLeaveCallback])

  return (
    <NavLink to={props.to} style={{ textDecoration: 'none' }}>
      <div
        className={`list-item ${props.active ? 'active' : ''}`}
        onClick={() => props.onClicked(props.index)}
      >
        <div className='list-item-icon' ref={iconRef}>
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
