import { FaUserCircle } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { SeeLoginContainer } from "../Redux/actions/Tasks";

function Header() {

  const dispatch = useDispatch();

  const toggleLogin = () => {
    dispatch(SeeLoginContainer());
  };

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
            <p onClick={() => toggleLogin()} >Login</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Header;