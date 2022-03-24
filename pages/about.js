import React, {useContext, useEffect} from "react";
import NavbarForAllPage from "../components/Layout/components/AllHeader/NavbarForAllPage";
import MobileMenu from "../components/Layout/components/AllHeader/MobileMenu";
import About from "../components/Layout/components/About/About";
import Footer from "../components/Layout/components/Footer/Footer";
import { useSelector, useDispatch } from 'react-redux';
import { incrementCount, decrementCount, resetCount } from '../store/actions';
export default function about() {
    const count = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>
                Count: <span>{count}</span>
            </h1>
            <button
                type="button"
                className="btn"
                onClick={() => dispatch(incrementCount())}
            >
                +1
            </button>
            <NavbarForAllPage/>
            <MobileMenu/>
            <About/>
            <Footer/>
        </div>
    )
}