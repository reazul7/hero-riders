import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid d-flex justify-content-around">
                    <div><Link to ="/home" class="navbar-brand">Hero Riders</Link></div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link to = "/home" class="nav-link">Home</Link>
                            <Link to="/destination" class="nav-link">Destination</Link>
                        </div>
                    </div>
                </div>
            </Nav>
        </div>
    );
};

export default Header;