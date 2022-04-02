import React from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/inertia-react';
import Header from "@/Components/Header";
import Taskbar from "@/Components/Taskbar";

export default function Guest({ children }) {
    return (
        <div>
            {children}
            <Taskbar/>
        </div>
    );
}
