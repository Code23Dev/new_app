import React, {useEffect} from "react";
import {allCategories} from "../../../../services/allCategories";

export default function MobileMenu(){
    const [mobileCategoryData, setMobileCategoryData] = React.useState([]);
    useEffect(() => {
        allCategories()
            .then(items => {
                    setMobileCategoryData(items.data)
            })
    }, [])
    return (
        <>
            <div className="mobile-menu-wrapper">
                <div className="mobile-menu-overlay"></div>

                <a href="#" className="mobile-menu-close"><i className="close-icon"></i></a>

                <div className="mobile-menu-container scrollable">
                    <form action="#" method="get" className="input-wrapper">
                        <input type="text" className="form-control" name="search" autoComplete="off"
                               placeholder="Search"
                               required/>
                        <button className="btn btn-search" type="submit">
                            <i className="w-icon-search"></i>
                        </button>
                    </form>
                    <div className="tab">
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item">
                                <a href="#main-menu" className="nav-link active">Əsas menyu</a>
                            </li>
                            <li className="nav-item">
                                <a href="#categories" className="nav-link">Kateqoriyalar</a>
                            </li>
                        </ul>
                    </div>
                    <div className="tab-content">
                        <div className="tab-pane active" id="main-menu">
                                <ul className="mobile-menu">
                                    <li>
                                        <a href="/home">Ana səhifə</a>
                                    </li>
                                    <li>
                                        <a href="/shop">Mağaza</a>
                                    </li>
                                    <li>
                                        <a href="/vendor">Satıcılar</a>
                                    </li>
                                    <li>
                                        <a href="/about">Haqqımızda</a>
                                    </li>
                                    <li>
                                        <a href="/contact">Əlaqə</a>
                                    </li>
                                    <li>
                                        <a href="/faq">Faq</a>
                                    </li>
                                </ul>
                        </div>
                            <div className="tab-pane" id="categories">
                                <ul className="mobile-menu">
                                    <li>
                                        <a href="shop-fullwidth-banner.html">
                                            <i className="w-icon-tshirt2"></i>Fashion
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="#">Women</a>
                                                <ul>
                                                    <li><a href="shop-fullwidth-banner.html">New Arrivals</a>
                                                    </li>
                                                    <li><a href="shop-fullwidth-banner.html">Best Sellers</a>
                                                    </li>
                                                    <li><a href="shop-fullwidth-banner.html">Trending</a></li>
                                                    <li><a href="shop-fullwidth-banner.html">Clothing</a></li>
                                                    <li><a href="shop-fullwidth-banner.html">Shoes</a></li>
                                                    <li><a href="shop-fullwidth-banner.html">Bags</a></li>
                                                    <li><a href="shop-fullwidth-banner.html">Accessories</a>
                                                    </li>
                                                    <li><a href="shop-fullwidth-banner.html">Jewlery &
                                                        Watches</a></li>

                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Men</a>
                                                <ul>
                                                    <li><a href="shop-fullwidth-banner.html">New Arrivals</a>
                                                    </li>
                                                    <li><a href="shop-fullwidth-banner.html">Best Sellers</a>
                                                    </li>
                                                    <li><a href="shop-fullwidth-banner.html">Trending</a></li>
                                                    <li><a href="shop-fullwidth-banner.html">Clothing</a></li>
                                                    <li><a href="shop-fullwidth-banner.html">Shoes</a></li>
                                                    <li><a href="shop-fullwidth-banner.html">Bags</a></li>
                                                    <li><a href="shop-fullwidth-banner.html">Accessories</a>
                                                    </li>
                                                    <li><a href="shop-fullwidth-banner.html">Jewlery &
                                                        Watches</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )}