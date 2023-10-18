'use client';
import { useState } from 'react';
// import { SideNav } from "./SideNav";
import TopNav from "./TopNav";
export const Layout = () => {
    const [openNav, setOpenNav] = useState(false);

    return (

        <div>
             <TopNav openNav={openNav} setOpenNav={setOpenNav}/>
        </div>

    )
}