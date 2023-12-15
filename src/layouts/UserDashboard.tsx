import CustomNavbar from "../components/NavBar";
import DisplayCars from "../pages/userDashboard/DisplayCars";

const UserDashboard = () => {

  const username = 'Pockypoem';
  const avatar = 'https://avatars.githubusercontent.com/u/74807111?v=4';

    return (

      <div className="d-flex vh-100">
        <div className="ms-1 flex-grow-1">
          <div className="p-3">
            <CustomNavbar username={username} avatar={avatar}/>
            {/* <Outlet /> */}
            <DisplayCars />
          </div>
        </div>
      </div>

    )
}
  
export default UserDashboard;