import { NavLink } from 'react-router-dom';
import './ListItem.css';

const ListItem = (props) => {
  return (
    <NavLink to={props.to} style={{ textDecoration: 'none' }}>
      <div
        className={`list-item ${props.active ? 'active' : ''}`}
        onClick={() => props.onClicked(props.index)}
      >
        <div className="list-item-icon">
          <img
            width={24}
            src={require(`../../icons/${props.icon}.png`)}
            alt={props.icon}
          />
        </div>
        <div className="list-item-text">{props.title}</div>
      </div>
    </NavLink>
  );
};

export default ListItem;
