import React from "react";
import NavbarForAllPage from "../components/Layout/components/AllHeader/NavbarForAllPage";
import MobileMenu from "../components/Layout/components/AllHeader/MobileMenu";

export default function wishlist() {
    return (
        <div>
            <NavbarForAllPage/>
            <MobileMenu/>
            <WishlistPage/>
        </div>
    )
}