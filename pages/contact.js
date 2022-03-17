import React from "react";
import NavbarForAllPage from "../components/Layout/components/AllHeader/NavbarForAllPage";
import MobileMenu from "../components/Layout/components/AllHeader/MobileMenu";
import Contact from "../components/Layout/components/Contact/ContactUs";

export default function faq() {
    return (
        <div>
            <NavbarForAllPage/>
            <MobileMenu/>
            <Contact/>
        </div>
    )
}