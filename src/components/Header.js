import { FaUserCircle } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";


function Header() {
  return (
    <div className='Header'>
      <h3 style={{ color: "white" }} >FOCUS</h3>
      <ul className='nav-links' >
        <li>
          <div className="nav-links-items" >
            <FaChartBar color="white" />
            <p>Report</p>
          </div>
        </li>
        <li>
          <div className="nav-links-items" >
            <FaUserCircle color="white" />
            <p>Login</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Header;