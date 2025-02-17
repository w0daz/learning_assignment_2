import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="sidebar">
      <ul className="nav-list">
        <li>
          <Link to="/" className="nav-link">Dashboard</Link>
        </li>
        <li>
          <Link to="/tasks" className="nav-link">Tasks</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;