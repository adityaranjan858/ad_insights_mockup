import { Link } from "react-router-dom";

const NavigationBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white ">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">APP LOGO</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end " id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">DASHBOARD</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/createAds">CREATE ADS</Link>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavigationBar;