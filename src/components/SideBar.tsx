// SideBar.tsx
import { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import "../styles/sideBar.css";

const SideBar = () => {
    const location = useLocation();
    const [isHomeActive, setHomeActive] = useState(location.pathname === '/dashboard');
    const [isCarsActive, setCarsActive] = useState(location.pathname === '/dashboard/cars');

    const handleHomeClick = () => {
        setHomeActive(true);
        setCarsActive(false);
    };

    const handleCarsClick = () => {
        setHomeActive(false);
        setCarsActive(true);
    };

    return (
        <div className="sidebar">
            <Nav defaultActiveKey="/" className="flex-column">
                <Nav.Link as={Link} to="/dashboard" className={isHomeActive ? 'active' : ''} onClick={handleHomeClick}>
                    Home
                </Nav.Link>
                <Nav.Link as={Link} to="/dashboard/cars" className={`mt-4 ${isCarsActive ? 'active' : ''}`} onClick={handleCarsClick}>
                    Cars
                </Nav.Link>
            </Nav>
        </div>
    );
}

export default SideBar;
