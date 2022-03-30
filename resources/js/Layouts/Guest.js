import React from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/inertia-react';
import Header from "@/Components/Header";

export default function Guest({ children }) {
    return (
        <div>
            <Header/>
            {children}
        </div>
    );
}
