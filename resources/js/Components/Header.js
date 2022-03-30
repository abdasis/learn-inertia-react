import React from 'react';
import {Link} from "@inertiajs/inertia-react";
import "./Header.css";
const Header = () => {
    return (
        <div>
            <nav className="navbar custom-navbar navbar-expand-lg navbar-light bg-white border-bottom border-light">
                <div className="container">
                    <Link className="navbar-brand" href={route('welcome')}>Laziz.dev</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Tentang</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" replace  href={route('portfolio')}>Portofolio</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;
