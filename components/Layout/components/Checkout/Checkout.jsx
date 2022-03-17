import React from 'react'

export default function Checkout(){
    return (
        <div>
            <main className="main checkout">
                <nav className="breadcrumb-nav">
                    <div className="container">
                        <ul className="breadcrumb shop-breadcrumb bb-no">
                            <li className="passed"><a href="/cart">Alış-veriş kartı</a></li>
                            <li className="active"><a href="/checkout" >Yoxla</a></li>
                            <li><a href="/order">Sifariş tamamlandı</a></li>
                        </ul>
                    </div>
                </nav>
                <div className="page-content">
                    <div className="container">
                        <div className="coupon-content mb-4">
                            <p>If you have a coupon code, please apply it below.</p>
                            <div className="input-wrapper-inline">
                                <input type="text" name="coupon_code" className="form-control form-control-md mr-1 mb-2"
                                       placeholder="Coupon code" id="coupon_code"/>
                                    <button type="submit" className="btn button btn-rounded btn-coupon mb-2"
                                            name="apply_coupon" value="Apply coupon">Apply Coupon
                                    </button>
                            </div>
                        </div>
                        <form className="form checkout-form" action="#" method="post">
                            <div className="row mb-9">
                                <div className="col-lg-7 pr-lg-4 mb-4">
                                    <h3 className="title billing-title text-uppercase ls-10 pt-1 pb-3 mb-0">
                                        ƏTRAFLI
                                    </h3>
                                    <div className="row gutter-sm">
                                        <div className="col-xs-6">
                                            <div className="form-group">
                                                <label>Ad *</label>
                                                <input type="text" className="form-control form-control-md"
                                                       name="firstname"
                                                       required/>
                                            </div>
                                        </div>
                                        <div className="col-xs-6">
                                            <div className="form-group">
                                                <label>Soyad *</label>
                                                <input type="text" className="form-control form-control-md"
                                                       name="lastname"
                                                       required/>
                                            </div>
                                        </div>
                                    </div>
                                    {/*<div className="form-group">*/}
                                    {/*    <label>Company name (optional)</label>*/}
                                    {/*    <input type="text" className="form-control form-control-md" name="company-name"/>*/}
                                    {/*</div>*/}
                                    {/*<div className="form-group">*/}
                                    {/*    <label>Country / Region *</label>*/}
                                    {/*    <div className="select-box">*/}
                                    {/*        <select name="country" className="form-control form-control-md">*/}
                                    {/*            <option value="default" selected="selected">United States*/}
                                    {/*                (US)*/}
                                    {/*            </option>*/}
                                    {/*            <option value="uk">United Kingdom (UK)</option>*/}
                                    {/*            <option value="us">United States</option>*/}
                                    {/*            <option value="fr">France</option>*/}
                                    {/*            <option value="aus">Australia</option>*/}
                                    {/*        </select>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                    <div className="form-group">
                                        <label>Küçə ünvanı *</label>
                                        <input type="text" placeholder="Ev nömrəsi və küçə adı"
                                               className="form-control form-control-md mb-2" name="street-address-1"
                                               required/>
                                            <input type="text" placeholder="Mənzil, suit, bölmə və s. (istəyə görə)"
                                                   className="form-control form-control-md" name="street-address-2"
                                                   required/>
                                    </div>
                                    <div className="row gutter-sm">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Şəhər  *</label>
                                                <input type="text" className="form-control form-control-md" name="town"
                                                       required/>
                                            </div>
                                            <div className="form-group">
                                                <label>ZIP *</label>
                                                <input type="text" className="form-control form-control-md" name="zip"
                                                       required/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>State *</label>
                                                <div className="select-box">
                                                    <select name="country" className="form-control form-control-md">
                                                        <option value="default" selected="selected">California</option>
                                                        <option value="uk">United Kingdom (UK)</option>
                                                        <option value="us">United States</option>
                                                        <option value="fr">France</option>
                                                        <option value="aus">Australia</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Phone *</label>
                                                <input type="text" className="form-control form-control-md" name="phone"
                                                       required/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group mb-7">
                                        <label>E-poçt ünvanı *</label>
                                        <input type="email" className="form-control form-control-md" name="email"
                                               required/>
                                    </div>
                                    <div className="form-group checkbox-toggle pb-2">
                                        <input type="checkbox" className="custom-checkbox" id="shipping-toggle"
                                               name="shipping-toggle"/>
                                            <label htmlFor="shipping-toggle">Fərqli ünvana göndərilsin?</label>
                                    </div>
                                    <div className="checkbox-content">
                                        <div className="row gutter-sm">
                                            <div className="col-xs-6">
                                                <div className="form-group">
                                                    <label>First name *</label>
                                                    <input type="text" className="form-control form-control-md"
                                                           name="firstname"
                                                           required/>
                                                </div>
                                            </div>
                                            <div className="col-xs-6">
                                                <div className="form-group">
                                                    <label>Last name *</label>
                                                    <input type="text" className="form-control form-control-md"
                                                           name="lastname"
                                                           required/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Sifariş qeydləri (istəyə görə)</label>
                                            <input type="text" className="form-control form-control-md"
                                                   name="company-name"/>
                                        </div>
                                        <div className="form-group">
                                            <label>Country / Region *</label>
                                            <div className="select-box">
                                                <select name="country" className="form-control form-control-md">
                                                    <option value="default" selected="selected">United States
                                                        (US)
                                                    </option>
                                                    <option value="uk">United Kingdom (UK)</option>
                                                    <option value="us">United States</option>
                                                    <option value="fr">France</option>
                                                    <option value="aus">Australia</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Street address *</label>
                                            <input type="text" placeholder="House number and street name"
                                                   className="form-control form-control-md mb-2" name="street-address-1"
                                                   required/>
                                                <input type="text" placeholder="Apartment, suite, unit, etc. (optional)"
                                                       className="form-control form-control-md" name="street-address-2"
                                                       required/>
                                        </div>
                                        <div className="row gutter-sm">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>Town / City *</label>
                                                    <input type="text" className="form-control form-control-md"
                                                           name="town" required/>
                                                </div>
                                                <div className="form-group">
                                                    <label>Postcode *</label>
                                                    <input type="text" className="form-control form-control-md"
                                                           name="postcode" required/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>Country (optional)</label>
                                                    <input type="text" className="form-control form-control-md"
                                                           name="zip" required/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group mt-3">
                                        <label htmlFor="order-notes">Sifariş qeydləri (istəyə görə)</label>
                                        <textarea className="form-control mb-0" id="order-notes" name="order-notes"
                                                  cols="30"
                                                  rows="4"
                                                  placeholder="Sifarişiniz haqqında qeydlər, məsələn, çatdırılma üçün xüsusi qeydlər"></textarea>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    )}