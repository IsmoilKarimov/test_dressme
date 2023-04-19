import React, { useEffect, useState } from 'react'
import TopHeader from "../top";
import MediumHeader from "../medium";
import { Outlet } from 'react-router-dom';
import AuthenticationNavbar from './AuthenticationNavbar';
export default function AuthenIndex() {

    return (
        <div>
            <header className="border-b border-searchBgColor">
                <TopHeader />
                <MediumHeader />
                <AuthenticationNavbar />
            </header>
            <Outlet />
        </div>

    )
}
