import MobileMenu from "../components/Layout/components/AllHeader/MobileMenu";
import Footer from "../components/Layout/components/Footer/Footer";
import NavbarForHome from "../components/Layout/components/AllHeader/NavbarForHome";
import MainForHome from "../components/Layout/components/MainForHome/MainForHome";

export default function Index() {
    return (
        <div>
            <NavbarForHome/>
            <MobileMenu/>
            <MainForHome/>
            <Footer/>
        </div>
    )
}
