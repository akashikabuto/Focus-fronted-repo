import { FaUserCircle } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { useHistory } from "react-router-dom";


function Header() {

  const history = useHistory();

  function goTologin() {
    history.push('/login');
  }

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
            <p onClick={() => goTologin()} >Login</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Header;