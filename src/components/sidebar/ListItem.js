import './ListItem.css'

const ListItem = (props) => {
  return (
    <div className='list-item'>
      <div className='list-item-icon'>
        <img
          width={24}
          src={require(`../../icons/${props.icon}.png`)}
          alt={props.icon}
        />
      </div>
      <div className='list-item-text'>{props.title}</div>
    </div>
  )
}

export default ListItem
