import { NavLink } from 'react-router-dom';
import img from '../Images/space-img.png';

const Navbar = () => (
  <div>
    <div className="head">
      <img src={img} alt="Space-logo" />
      <h1>Space Travelers&apos; Hub</h1>
    </div>
    <ul>
      <li>
        <NavLink to="/">Rockets</NavLink>
      </li>
      <li>
        <NavLink to="missions">Missions</NavLink>
      </li>
      <li>
        <NavLink to="myprofile">My profile</NavLink>
      </li>
    </ul>
  </div>
);

export default Navbar;
