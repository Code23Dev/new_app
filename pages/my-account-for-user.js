import React from "react";
import NavbarForAllPage from "../components/Layout/components/AllHeader/NavbarForAllPage";
import MobileMenu from "../components/Layout/components/AllHeader/MobileMenu";
import MyAccount from "../components/Layout/components/MyAccount/MyAccount";

export default function myAccountForUser() {
    return (
        <div>
            <NavbarForAllPage/>
            <MobileMenu/>
            <MyAccount/>
        </div>
    )
}