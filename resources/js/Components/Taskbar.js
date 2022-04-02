import React from 'react';
import {Link} from "@inertiajs/inertia-react";
import "./Taskbar.css";
const Taskbar = () => {
    return (
        <div>
            <footer>
                <div className="row taskbar align-content-center">
                    <div className="col-md-3">
                        <ion-icon name="cloudy-night-outline"></ion-icon>
                        <span className="ps-2">
                            Hujan Uang
                        </span>
                    </div>
                    <div className="col-md-6 text-center">
                        <div className="taskbar-menu">
                            <ion-icon name="logo-microsoft"></ion-icon>
                            <ion-icon name="logo-whatsapp"></ion-icon>
                            <ion-icon name="logo-youtube"></ion-icon>
                            <ion-icon name="logo-linkedin"></ion-icon>
                            <ion-icon name="logo-twitter"></ion-icon>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </footer>

        </div>
    )
}

export default Taskbar;
