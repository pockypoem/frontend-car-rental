import { Link } from "react-router-dom";

const imageStyle = {
    border: '0'
}

const Header = () => {
  return (
    <header className="header">

        {/* Overlay */}
        <div className="overlay" data-overlay></div>

        <div className="container">

            <a href="/" className="logo">
                <img src="https://i.ibb.co/MkygZR1/bcr-logo.png" alt="bcr-logo" style={imageStyle}/>
            </a>

            <a className="nav-open-btn" data-nav-open-btn>
                <img src="https://i.ibb.co/0VBC9mX/fi-menu.png" alt="fi-menu" style={imageStyle} width="24" height="24" />
            </a>

            <nav className="navigasi" data-nav>

                <div className="navigasi-top">
                    <h4 className="text-logo"><a href="/" style={{ textDecoration: 'none', color: 'black' }}>BCR</a></h4>


                    <a className="nav-close-btn" data-nav-close-btn>
                        <img src="https://i.ibb.co/Wk7Vbhb/fi-x.png" alt="fi-x" style={imageStyle} width="24" height="24" />
                    </a>
                </div>

                <ul className="navigasi-list">

                    <li>
                        <a href="#service" className="navigasi-link text-dark ">Our Services</a>
                    </li>

                    <li>
                        <a href="#about" className="navigasi-link text-dark">Why Us</a>
                    </li>

                    <li>
                        <a href="#testimoni" className="navigasi-link text-dark">Testimony</a>
                    </li>

                    <li>
                        <a href="#faq" className="navigasi-link text-dark" style={{ width: '120px', marginRight: '20px' }}>FAQ</a>
                    </li>

                </ul>

                <ul className="navigasi-register">
                    <li>
                        <button className="btn-green">
                            <div className="btn">
                                <Link to="/dashboard" className="white">Register</Link>
                                {/* Register */}
                            </div>
                        </button>
                    </li>
                </ul>

            </nav>

            <div className="header-actions">

                <button className="btn-green">
                    <div className="btn">
                        <Link to="/dashboard" style={{ textDecoration: 'none', color: 'white' }} className="white">Register</Link>
                        {/* Register */}
                    </div>
                </button>

            </div>

        </div>

    </header>
  );
};

export default Header
