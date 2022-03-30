import React, {Fragment} from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import Guest from "@/Layouts/Guest";

export default function Welcome(props) {
    return (
        <Guest>
            <div className="container">
                <h1>Selamat Datang</h1>
            </div>
        </Guest>
    );
}
