import React, { useEffect, useState } from 'react'
import TopHeader from "../top";
import MediumHeader from "../medium";
import { Outlet } from 'react-router-dom';
import AddUserGender from './AddUserGender';
export default function AddUserNavbar() {

    return (
        <div>
            <header className="border-b border-searchBgColor">
                <TopHeader />
                <MediumHeader />
                <AddUserGender />
            </header>
            <Outlet />
        </div>

    )
}
