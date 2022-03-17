import React from "react";
import NavbarForAllPage from "../../components/Layout/components/AllHeader/NavbarForAllPage";
import MobileMenu from "../../components/Layout/components/AllHeader/MobileMenu";
export default function shop() {
    return (
        <div>
            <NavbarForAllPage/>
            <MobileMenu/>
            <ShopPageMain/>
        </div>
    )
}