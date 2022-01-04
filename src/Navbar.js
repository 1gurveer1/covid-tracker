import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="brand mx-2 my-2" to="/">Covid Report</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <div className="navbar-toggler-icon"><i className="fas fa-virus" style={{color: 'white', fontSize: '30px'}}></i></div>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="link mx-2" aria-current="page" to="/">WorldWide</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="link mx-2" to="/chart">Countries</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="link mx-2" to="/contact">Contact</Link>
                            </li>
                            
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
