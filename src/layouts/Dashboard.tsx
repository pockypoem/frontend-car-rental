import { Outlet } from "react-router-dom";
import CustomNavbar from "../components/NavBar";
import SideBar from "../components/SideBar";

const DashboardHome = () => {

  const username = 'Pockypoem';
  const avatar = 'https://avatars.githubusercontent.com/u/74807111?v=4';

    return (

      <div className="d-flex vh-100">
        <SideBar />
        <div className="ms-1 flex-grow-1">
          <div className="p-3">
            <CustomNavbar username={username} avatar={avatar}/>
            <Outlet />
          </div>
        </div>
      </div>

    )
}
  
export default DashboardHome;