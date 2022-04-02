import React, {Fragment} from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import Guest from "@/Layouts/Guest";
import "./Welcome.css";

export default function Welcome(props) {
    return (
        <Guest>
            <div className="full-screen row align-content-center">
                <div className="col-md-5">

                </div>
                <div className="col-md-7">
                    <h1 className={'salam'}>Hi, I'm Abdul Aziz</h1>
                    <p className="biodata-singkat">
                        I'm a web developer, and I'm currently working on a project.
                    </p>
                </div>
            </div>
        </Guest>
    );
}
