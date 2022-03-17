import React from "react";
import NavbarForAllPage from "../components/Layout/components/AllHeader/NavbarForAllPage";
import MobileMenu from "../components/Layout/components/AllHeader/MobileMenu";
import MainForFaq from "../components/Layout/components/MainForFaq/MainForFaq";

export default function faq() {
    return (
        <div>
            <NavbarForAllPage/>
            <MobileMenu/>
            <MainForFaq/>
        </div>
    )
}