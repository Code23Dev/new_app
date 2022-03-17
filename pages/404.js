import Error from "../components/Layout/components/Error/Error";
import React from "react";
import NavbarForAllPage from "../components/Layout/components/AllHeader/NavbarForAllPage";
import MobileMenu from "../components/Layout/components/AllHeader/MobileMenu";

export default function Custom404() {
    return (
        <div>
            <NavbarForAllPage/>
            <MobileMenu/>
            <Error/>
        </div>
    )
}