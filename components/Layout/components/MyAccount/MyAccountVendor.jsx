import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import MyAccountVendorDetails from "./MyAccountVendorDetails";
import {userProducts} from "../../../../services/myAccount/userProducts";
import {deleteProduct} from "../../../../services/products/deleteProduct";

function deleteUserProduct(id){
    swal({
        title: "Əminsinizmi?!",
        icon: "warning",
        buttons: ["Bağla", "Sil"],
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                deleteProduct(id)
                    .then(items => {
                        swal("Silindi!", {
                            icon: "success",
                            button: ["Bağla"],
                        });
                    }).catch((e)=>{
                    console.log(e)
                })

            } else {
                swal("Silinmədi");
            }
        });
}
export default function MyAccountVendor(){
const [selectedFile1, setSelectedFile1] = useState(null);
const [selectedFile2, setSelectedFile2] = useState(null);
    const [userProductsTitle, userProductsData] = useState([]);
    useEffect(() => {
        let mounted = true;
        userProducts()
            .then(items => {
                if(mounted) {
                    userProductsData(items.data)
                }

            }).catch((e)=>{
            console.log(e)
        })
        return () => mounted = false;
    }, [])

    return (
        <div>
            <style jsx>{`
                    .shopShop-table tbody td:not(:first-child), .shopShop-table thead th:not(:first-child) {
                        padding-left: 4rem !important;
                    }
                .span-link:hover {
                   color: #1914fe !important;
                   cursor: pointer;
                  }
                   .inputFile {
                width: 0.1px !important;
                height: 0.1px !important;
                opacity: 0 !important;
                overflow: hidden !important;
                position: absolute !important;
                z-index: -1 !important;
              }

              .inputFile + label {
                background-color: #f5f5f5;
                display: inline-block;
              }
            `}
            </style>
            <div>
                <div className="page-wrapper">
                    <main className="main">
                        <div className="page-header">
                            <div className="container">
                                <h1 className="page-title mb-0">Satıcı üçün Hesab</h1>
                            </div>
                        </div>
                        <nav className="breadcrumb-nav">
                            <div className="container">
                                <ul className="breadcrumb">
                                    <li><a href="/home">Ana Səhifə</a></li>
                                    <li>Satıcı üçün hesab</li>
                                </ul>
                            </div>
                        </nav>
                        <div className="page-content pt-2">
                            <div className="container">
                                <div className="tab tab-vertical row gutter-lg">
                                    <ul className="nav nav-tabs mb-6" role="tablist">
                                        <li className="nav-item">
                                            <a href="#account-dashboard" className="nav-link active">Dashboard</a>
                                        </li>
                                        <hr className="product-divider"/>
                                        <li className="nav-item">
                                            <a href="#account-details" className="nav-link"> Hesab məlumatları</a>
                                        </li>
                                        <hr className="product-divider"/>
                                        <li className="nav-item">
                                            <a href="#account-downloads" className="nav-link">Məhsul əlavə et</a>
                                        </li>
                                        <hr className="product-divider"/>
                                        <li className="nav-item">
                                            <a href="#account-orders2" className="nav-link">Bütün məhsullar</a>
                                        </li>
                                        <hr className="product-divider"/>
                                        <li className="nav-item">
                                            <a href="#account-orders" className="nav-link">Sifarişlər</a>
                                        </li>
                                        <hr className="product-divider"/>
                                        <li className="link-item">
                                            <Link href="#">
                                                <span  className="nav-link span-link">Çıxış</span>
                                            </Link>
                                        </li>
                                    </ul>

                                    <div className="tab-content mb-6">
                                        <div className="tab-pane active in" id="account-dashboard">
                                            <p className="greeting">
                                                Salam
                                                <span className="text-dark font-weight-bold">John Doe</span>
                                                (
                                                <span className="text-dark font-weight-bold">John Doe</span>?
                                                <a href="#" className="text-primary">ÇIXIŞ</a>)
                                            </p>

                                            <p className="mb-4">
                                                Hesabınızın idarə panelindən <a href="#account-orders" className="text-primary link-to-tab">son sifarişlərinizə</a>  baxa, göndərmə və faktura ünvanlarınızı idarə edə,  <a href="#account-details" className="text-primary link-to-tab">Şifrə və hesab məlumatlarınızı </a> redaktə edə bilərsiniz.

                                            </p>

                                            <div className="row">
                                                <div className="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
                                                    <a href="#account-details" className="link-to-tab">
                                                        <div className="icon-box text-center">
                                                <span className="icon-box-icon icon-account">
                                                    <i className="w-icon-user"style={{fontSize:'52px'}}></i>
                                                </span>
                                                            <div className="icon-box-content">
                                                                <p className="text-uppercase mb-0" style={{fontSize:'18px'}}>Hesab məlumatları</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
                                                    <a href="#account-downloads" className="link-to-tab">
                                                        <div className="icon-box text-center">
                                                <span className="icon-box-icon icon-download">
                                                    <i className="w-icon-download" style={{fontSize:'52px'}}></i>
                                                </span>
                                                            <div className="icon-box-content">
                                                                <p className="text-uppercase mb-0" style={{fontSize:'18px'}}>Məhsul əlavə et</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
                                                    <Link href="/shop" className="link-to-tab">
                                                        <div className="icon-box text-center">
                                                <span className="icon-box-icon icon-wishlist">
                                                    <i className="w-icon-heart" style={{fontSize:'52px'}}></i>
                                                </span>
                                                            <div className="icon-box-content">
                                                                <p className="text-uppercase mb-0" style={{fontSize:'18px'}}>Bütün məhsullar</p>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
                                                    <a href="#account-orders" className="link-to-tab">
                                                        <div className="icon-box text-center">
                                                <span className="icon-box-icon icon-orders">
                                                    <i className="w-icon-orders" style={{fontSize:'52px'}}></i>
                                                </span>
                                                            <div className="icon-box-content">
                                                                <p className="text-uppercase mb-0" style={{fontSize:'18px'}}>Sİfarİşlər</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
                                                    <a href="#">
                                                        <div className="icon-box text-center">
                                                <span className="icon-box-icon icon-logout">
                                                    <i className="w-icon-logout" style={{fontSize:'52px'}}></i>
                                                </span>
                                                            <div className="icon-box-content">
                                                                <p className="text-uppercase mb-0" style={{fontSize:'18px'}}>Çıxış</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="tab-pane mb-4" id="account-orders">
                                            {/*        <div className="icon-box icon-box-side icon-box-light">*/}
                                            {/*<span className="icon-box-icon icon-orders">*/}
                                            {/*    <i className="w-icon-orders"></i>*/}
                                            {/*</span>*/}
                                            {/*            <div className="icon-box-content">*/}
                                            {/*                <h4 className="icon-box-title text-capitalize ls-normal mb-0">Orders</h4>*/}
                                            {/*            </div>*/}
                                            {/*        </div>*/}

                                            <table className="shop-table account-orders-table mb-6">
                                                <thead>
                                                <tr>
                                                    <th className="order-id">Order</th>
                                                    <th className="order-date">Date</th>
                                                    <th className="order-status">Status</th>
                                                    <th className="order-total">Total</th>
                                                    <th className="order-actions">Actions</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td className="order-id">#2321</td>
                                                    <td className="order-date">August 20, 2021</td>
                                                    <td className="order-status">Processing</td>
                                                    <td className="order-total">
                                                        <span className="order-price">$121.00</span> for
                                                        <span className="order-quantity"> 1</span> item
                                                    </td>
                                                    <td className="order-action">
                                                        <a href="#"
                                                           className="btn btn-outline btn-default btn-block btn-sm btn-rounded">View</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="order-id">#2321</td>
                                                    <td className="order-date">August 20, 2021</td>
                                                    <td className="order-status">Processing</td>
                                                    <td className="order-total">
                                                        <span className="order-price">$150.00</span> for
                                                        <span className="order-quantity"> 1</span> item
                                                    </td>
                                                    <td className="order-action">
                                                        <a href="#"
                                                           className="btn btn-outline btn-default btn-block btn-sm btn-rounded">View</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="order-id">#2319</td>
                                                    <td className="order-date">August 20, 2021</td>
                                                    <td className="order-status">Processing</td>
                                                    <td className="order-total">
                                                        <span className="order-price">$201.00</span> for
                                                        <span className="order-quantity"> 1</span> item
                                                    </td>
                                                    <td className="order-action">
                                                        <a href="#"
                                                           className="btn btn-outline btn-default btn-block btn-sm btn-rounded">View</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="order-id">#2318</td>
                                                    <td className="order-date">August 20, 2021</td>
                                                    <td className="order-status">Processing</td>
                                                    <td className="order-total">
                                                        <span className="order-price">$321.00</span> for
                                                        <span className="order-quantity"> 1</span> item
                                                    </td>
                                                    <td className="order-action">
                                                        <a href="#"
                                                           className="btn btn-outline btn-default btn-block btn-sm btn-rounded">View</a>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>

                                            <a href="shop-banner-sidebar.html"
                                               className="btn btn-dark btn-rounded btn-icon-right">Go
                                                Shop<i className="w-icon-long-arrow-right"></i></a>
                                        </div>
                                        <div className="tab-pane mb-4" id="account-orders2">

                                            <table className="shop-table account-orders-table mb-6">
                                                <thead>
                                                <tr>
                                                    <th className="order-id">N</th>
                                                    <th className="order-date">Məhsulun Tarix</th>
                                                    <th className="order-status">Məhsulun kodu</th>
                                                    <th className="order-total">Məhsulun adı</th>
                                                    <th className="order-actions">Kateqoriyası</th>
                                                    <th className="order-actions">Qiymət</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {userProductsTitle.map(e=>(
                                                    <tr>
                                                    <td className="order-id">{e.id}</td>
                                                    <td className="order-date pr-3">{e.created_at.slice(1,10)}</td>
                                                    <td className="order-status pr-3">bos</td>
                                                    <td className="order-status pr-3">{e.title}</td>
                                                    <td className="order-status pr-3">bos</td>
                                                        <td className="order-status pr-3">{e.price}</td>
                                                    {/*<td className="order-total">*/}
                                                    {/*    */}
                                                    {/*    <span className="order-price">$121.00</span> for*/}
                                                    {/*    <span className="order-quantity"> 1</span> item*/}
                                                    {/*</td>*/}
                                                    <td className="order-action">
                                                        <a href="#"
                                                           className="btn btn-outline btn-default btn-block btn-sm btn-rounded">Dəyiş</a>
                                                    </td>
                                                    <td className="order-action">
                                                        <a href="#"
                                                           className="btn btn-outline btn-default btn-block btn-sm btn-rounded redColor"  onClick={()=>{deleteUserProduct(e.id)}}>Sil</a>
                                                    </td>
                                                </tr>
                                                ))}
                                                </tbody>
                                            </table>

                                        </div>

                                        <div className="tab-pane" id="account-downloads">
                                            <MyAccountVendorDetails/>
                                        </div>

                                        <div className="tab-pane" id="account-details">
                                            <form className="form account-details-form" action="#" method="post">
                                               <div className="row " style={{margin:"1px"}}>
                                                    <div className="col-md-6 mt-2">
                                                        <div className="form-group" style={{backgroundColor:"#f5f5f5", borderRadius:"2rem", padding:"7px"}}>
                                                            <label htmlFor="firstname">Mağaza adı</label>
                                                            <input type="text" id="firstname" name="firstname"
                                                                   className="form-control form-control-md"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mt-2">
                                                            <div className="form-group" style={{backgroundColor:"#f5f5f5", borderRadius:"2rem", padding:"7px"}}>
                                                                <label htmlFor="display-name">Əlaqə nömrəsı</label>
                                                                <input type="tel" id="display-name" name="display_name"
                                                                       className="form-control form-control-md"/>
                                                            </div>
                                                    </div>
                                                </div>
                                                <div className="row mt-4 mb-5 ml-2 mr-2 pb-3" style={{backgroundColor:"#f5f5f5", borderRadius:"2rem", padding:"7px",margin:"5px"}}>
                                                        <label htmlFor="display-name">Ünvan</label>
                                                        <div className="col-md-2">
                                                            <div className="form-group">
                                                                <label htmlFor="display-name">Şəhər</label>
                                                                <select className="form-control form-control-md mb-0">
                                                                    <option value="Afghanistan">Afghanistan</option>
                                                                    <option value="Åland Islands">Åland Islands</option>
                                                                    <option value="Albania">Albania</option>
                                                                    <option value="Algeria">Algeria</option>
                                                                    <option value="American Samoa">American Samoa</option>
                                                                    <option value="Andorra">Andorra</option>
                                                                    <option value="Angola">Angola</option>
                                                                    <option value="Anguilla">Anguilla</option>
                                                                    <option value="Antarctica">Antarctica</option>
                                                                    <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                                                    <option value="Argentina">Argentina</option>
                                                                    <option value="Armenia">Armenia</option>
                                                                    <option value="Aruba">Aruba</option>
                                                                    <option value="Australia">Australia</option>
                                                                    <option value="Austria">Austria</option>
                                                                    <option value="Azerbaijan">Azerbaijan</option>
                                                                    <option value="Bahamas">Bahamas</option>
                                                                    <option value="Bahrain">Bahrain</option>
                                                                    <option value="Bangladesh">Bangladesh</option>
                                                                    <option value="Barbados">Barbados</option>
                                                                    <option value="Belarus">Belarus</option>
                                                                    <option value="Belgium">Belgium</option>
                                                                    <option value="Belize">Belize</option>
                                                                    <option value="Benin">Benin</option>
                                                                    <option value="Bermuda">Bermuda</option>
                                                                    <option value="Bhutan">Bhutan</option>
                                                                    <option value="Bolivia">Bolivia</option>
                                                                    <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                                                    <option value="Botswana">Botswana</option>
                                                                    <option value="Bouvet Island">Bouvet Island</option>
                                                                    <option value="Brazil">Brazil</option>
                                                                    <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                                                    <option value="Brunei Darussalam">Brunei Darussalam</option>
                                                                    <option value="Bulgaria">Bulgaria</option>
                                                                    <option value="Burkina Faso">Burkina Faso</option>
                                                                    <option value="Burundi">Burundi</option>
                                                                    <option value="Cambodia">Cambodia</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <div className="form-group">
                                                                <label htmlFor="display-name">Rayon</label>
                                                                <select className="form-control form-control-md mb-0">
                                                                    <option value="Afghanistan">Afghanistan</option>
                                                                    <option value="Åland Islands">Åland Islands</option>
                                                                    <option value="Albania">Albania</option>
                                                                    <option value="Algeria">Algeria</option>
                                                                    <option value="American Samoa">American Samoa</option>
                                                                    <option value="Andorra">Andorra</option>
                                                                    <option value="Angola">Angola</option>
                                                                    <option value="Anguilla">Anguilla</option>
                                                                    <option value="Antarctica">Antarctica</option>
                                                                    <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                                                    <option value="Argentina">Argentina</option>
                                                                    <option value="Armenia">Armenia</option>
                                                                    <option value="Aruba">Aruba</option>
                                                                    <option value="Australia">Australia</option>
                                                                    <option value="Austria">Austria</option>
                                                                    <option value="Azerbaijan">Azerbaijan</option>
                                                                    <option value="Bahamas">Bahamas</option>
                                                                    <option value="Bahrain">Bahrain</option>
                                                                    <option value="Bangladesh">Bangladesh</option>
                                                                    <option value="Barbados">Barbados</option>
                                                                    <option value="Belarus">Belarus</option>
                                                                    <option value="Belgium">Belgium</option>
                                                                    <option value="Belize">Belize</option>
                                                                    <option value="Benin">Benin</option>
                                                                    <option value="Bermuda">Bermuda</option>
                                                                    <option value="Bhutan">Bhutan</option>
                                                                    <option value="Bolivia">Bolivia</option>
                                                                    <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                                                    <option value="Botswana">Botswana</option>
                                                                    <option value="Bouvet Island">Bouvet Island</option>
                                                                    <option value="Brazil">Brazil</option>
                                                                    <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                                                    <option value="Brunei Darussalam">Brunei Darussalam</option>
                                                                    <option value="Bulgaria">Bulgaria</option>
                                                                    <option value="Burkina Faso">Burkina Faso</option>
                                                                    <option value="Burundi">Burundi</option>
                                                                    <option value="Cambodia">Cambodia</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <div className="form-group">
                                                                <label htmlFor="display-name">Qəsəbə</label>
                                                                <select className="form-control form-control-md mb-0">
                                                                    <option value="Afghanistan">Afghanistan</option>
                                                                    <option value="Åland Islands">Åland Islands</option>
                                                                    <option value="Albania">Albania</option>
                                                                    <option value="Algeria">Algeria</option>
                                                                    <option value="American Samoa">American Samoa</option>
                                                                    <option value="Andorra">Andorra</option>
                                                                    <option value="Angola">Angola</option>
                                                                    <option value="Anguilla">Anguilla</option>
                                                                    <option value="Antarctica">Antarctica</option>
                                                                    <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                                                    <option value="Argentina">Argentina</option>
                                                                    <option value="Armenia">Armenia</option>
                                                                    <option value="Aruba">Aruba</option>
                                                                    <option value="Australia">Australia</option>
                                                                    <option value="Austria">Austria</option>
                                                                    <option value="Azerbaijan">Azerbaijan</option>
                                                                    <option value="Bahamas">Bahamas</option>
                                                                    <option value="Bahrain">Bahrain</option>
                                                                    <option value="Bangladesh">Bangladesh</option>
                                                                    <option value="Barbados">Barbados</option>
                                                                    <option value="Belarus">Belarus</option>
                                                                    <option value="Belgium">Belgium</option>
                                                                    <option value="Belize">Belize</option>
                                                                    <option value="Benin">Benin</option>
                                                                    <option value="Bermuda">Bermuda</option>
                                                                    <option value="Bhutan">Bhutan</option>
                                                                    <option value="Bolivia">Bolivia</option>
                                                                    <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                                                    <option value="Botswana">Botswana</option>
                                                                    <option value="Bouvet Island">Bouvet Island</option>
                                                                    <option value="Brazil">Brazil</option>
                                                                    <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                                                    <option value="Brunei Darussalam">Brunei Darussalam</option>
                                                                    <option value="Bulgaria">Bulgaria</option>
                                                                    <option value="Burkina Faso">Burkina Faso</option>
                                                                    <option value="Burundi">Burundi</option>
                                                                    <option value="Cambodia">Cambodia</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <div className="form-group">
                                                                <label htmlFor="display-name">Küçə</label>
                                                                <select className="form-control form-control-md mb-0">
                                                                    <option value="Afghanistan">Afghanistan</option>
                                                                    <option value="Åland Islands">Åland Islands</option>
                                                                    <option value="Albania">Albania</option>
                                                                    <option value="Algeria">Algeria</option>
                                                                    <option value="American Samoa">American Samoa</option>
                                                                    <option value="Andorra">Andorra</option>
                                                                    <option value="Angola">Angola</option>
                                                                    <option value="Anguilla">Anguilla</option>
                                                                    <option value="Antarctica">Antarctica</option>
                                                                    <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                                                    <option value="Argentina">Argentina</option>
                                                                    <option value="Armenia">Armenia</option>
                                                                    <option value="Aruba">Aruba</option>
                                                                    <option value="Australia">Australia</option>
                                                                    <option value="Austria">Austria</option>
                                                                    <option value="Azerbaijan">Azerbaijan</option>
                                                                    <option value="Bahamas">Bahamas</option>
                                                                    <option value="Bahrain">Bahrain</option>
                                                                    <option value="Bangladesh">Bangladesh</option>
                                                                    <option value="Barbados">Barbados</option>
                                                                    <option value="Belarus">Belarus</option>
                                                                    <option value="Belgium">Belgium</option>
                                                                    <option value="Belize">Belize</option>
                                                                    <option value="Benin">Benin</option>
                                                                    <option value="Bermuda">Bermuda</option>
                                                                    <option value="Bhutan">Bhutan</option>
                                                                    <option value="Bolivia">Bolivia</option>
                                                                    <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                                                    <option value="Botswana">Botswana</option>
                                                                    <option value="Bouvet Island">Bouvet Island</option>
                                                                    <option value="Brazil">Brazil</option>
                                                                    <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                                                    <option value="Brunei Darussalam">Brunei Darussalam</option>
                                                                    <option value="Bulgaria">Bulgaria</option>
                                                                    <option value="Burkina Faso">Burkina Faso</option>
                                                                    <option value="Burundi">Burundi</option>
                                                                    <option value="Cambodia">Cambodia</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <label htmlFor="display-name">Digəri</label>
                                                            <div>
                                                                <div className="form-group">
                                                                    <input type="text" id="display-name" name="display_name"
                                                                           className="form-control form-control-md mb-0"/>
                                                                </div>
                                                            </div>
                                                        </div>

                                                </div>
                                                <div className="row mt-4 mb-5 ml-2 mr-2 pb-3" style={{backgroundColor:"#f5f5f5", borderRadius:"2rem", padding:"7px",margin:"5px"}}>
                                                    <label htmlFor="display-name">Kateqoriya</label>
                                                    <div className="col-md-3">
                                                        <div className="form-group">
                                                            <label htmlFor="display-name">Kateqoriya</label>
                                                            <select className="form-control form-control-md mb-0">
                                                                <option value="Afghanistan">Afghanistan</option>
                                                                <option value="Åland Islands">Åland Islands</option>
                                                                <option value="Albania">Albania</option>
                                                                <option value="Algeria">Algeria</option>
                                                                <option value="American Samoa">American Samoa</option>
                                                                <option value="Andorra">Andorra</option>
                                                                <option value="Angola">Angola</option>
                                                                <option value="Anguilla">Anguilla</option>
                                                                <option value="Antarctica">Antarctica</option>
                                                                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                                                <option value="Argentina">Argentina</option>
                                                                <option value="Armenia">Armenia</option>
                                                                <option value="Aruba">Aruba</option>
                                                                <option value="Australia">Australia</option>
                                                                <option value="Austria">Austria</option>
                                                                <option value="Azerbaijan">Azerbaijan</option>
                                                                <option value="Bahamas">Bahamas</option>
                                                                <option value="Bahrain">Bahrain</option>
                                                                <option value="Bangladesh">Bangladesh</option>
                                                                <option value="Barbados">Barbados</option>
                                                                <option value="Belarus">Belarus</option>
                                                                <option value="Belgium">Belgium</option>
                                                                <option value="Belize">Belize</option>
                                                                <option value="Benin">Benin</option>
                                                                <option value="Bermuda">Bermuda</option>
                                                                <option value="Bhutan">Bhutan</option>
                                                                <option value="Bolivia">Bolivia</option>
                                                                <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                                                <option value="Botswana">Botswana</option>
                                                                <option value="Bouvet Island">Bouvet Island</option>
                                                                <option value="Brazil">Brazil</option>
                                                                <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                                                <option value="Brunei Darussalam">Brunei Darussalam</option>
                                                                <option value="Bulgaria">Bulgaria</option>
                                                                <option value="Burkina Faso">Burkina Faso</option>
                                                                <option value="Burundi">Burundi</option>
                                                                <option value="Cambodia">Cambodia</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className="form-group">
                                                            <label htmlFor="display-name">Sub Kateqoriya</label>
                                                            <select className="form-control form-control-md mb-0">
                                                                <option value="Afghanistan">Afghanistan</option>
                                                                <option value="Åland Islands">Åland Islands</option>
                                                                <option value="Albania">Albania</option>
                                                                <option value="Algeria">Algeria</option>
                                                                <option value="American Samoa">American Samoa</option>
                                                                <option value="Andorra">Andorra</option>
                                                                <option value="Angola">Angola</option>
                                                                <option value="Anguilla">Anguilla</option>
                                                                <option value="Antarctica">Antarctica</option>
                                                                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                                                <option value="Argentina">Argentina</option>
                                                                <option value="Armenia">Armenia</option>
                                                                <option value="Aruba">Aruba</option>
                                                                <option value="Australia">Australia</option>
                                                                <option value="Austria">Austria</option>
                                                                <option value="Azerbaijan">Azerbaijan</option>
                                                                <option value="Bahamas">Bahamas</option>
                                                                <option value="Bahrain">Bahrain</option>
                                                                <option value="Bangladesh">Bangladesh</option>
                                                                <option value="Barbados">Barbados</option>
                                                                <option value="Belarus">Belarus</option>
                                                                <option value="Belgium">Belgium</option>
                                                                <option value="Belize">Belize</option>
                                                                <option value="Benin">Benin</option>
                                                                <option value="Bermuda">Bermuda</option>
                                                                <option value="Bhutan">Bhutan</option>
                                                                <option value="Bolivia">Bolivia</option>
                                                                <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                                                <option value="Botswana">Botswana</option>
                                                                <option value="Bouvet Island">Bouvet Island</option>
                                                                <option value="Brazil">Brazil</option>
                                                                <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                                                <option value="Brunei Darussalam">Brunei Darussalam</option>
                                                                <option value="Bulgaria">Bulgaria</option>
                                                                <option value="Burkina Faso">Burkina Faso</option>
                                                                <option value="Burundi">Burundi</option>
                                                                <option value="Cambodia">Cambodia</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className="form-group">
                                                            <label htmlFor="display-name">Sub Sub Kateqoriya</label>
                                                            <select className="form-control form-control-md mb-0">
                                                                <option value="Afghanistan">Afghanistan</option>
                                                                <option value="Åland Islands">Åland Islands</option>
                                                                <option value="Albania">Albania</option>
                                                                <option value="Algeria">Algeria</option>
                                                                <option value="American Samoa">American Samoa</option>
                                                                <option value="Andorra">Andorra</option>
                                                                <option value="Angola">Angola</option>
                                                                <option value="Anguilla">Anguilla</option>
                                                                <option value="Antarctica">Antarctica</option>
                                                                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                                                <option value="Argentina">Argentina</option>
                                                                <option value="Armenia">Armenia</option>
                                                                <option value="Aruba">Aruba</option>
                                                                <option value="Australia">Australia</option>
                                                                <option value="Austria">Austria</option>
                                                                <option value="Azerbaijan">Azerbaijan</option>
                                                                <option value="Bahamas">Bahamas</option>
                                                                <option value="Bahrain">Bahrain</option>
                                                                <option value="Bangladesh">Bangladesh</option>
                                                                <option value="Barbados">Barbados</option>
                                                                <option value="Belarus">Belarus</option>
                                                                <option value="Belgium">Belgium</option>
                                                                <option value="Belize">Belize</option>
                                                                <option value="Benin">Benin</option>
                                                                <option value="Bermuda">Bermuda</option>
                                                                <option value="Bhutan">Bhutan</option>
                                                                <option value="Bolivia">Bolivia</option>
                                                                <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                                                <option value="Botswana">Botswana</option>
                                                                <option value="Bouvet Island">Bouvet Island</option>
                                                                <option value="Brazil">Brazil</option>
                                                                <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                                                <option value="Brunei Darussalam">Brunei Darussalam</option>
                                                                <option value="Bulgaria">Bulgaria</option>
                                                                <option value="Burkina Faso">Burkina Faso</option>
                                                                <option value="Burundi">Burundi</option>
                                                                <option value="Cambodia">Cambodia</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row mt-4 mb-5 ml-2 mr-2 pb-3" style={{backgroundColor:"#f5f5f5", borderRadius:"2rem", padding:"7px",margin:"5px"}}>
                                                    <label htmlFor="display-name">Social Icons</label>
                                                    <div className="row">
                                                        <div className="col-1">
                                                            <div className="form-group pt-1">
                                                               <div style={{textAlign:'center',fontSize:'20px'}}> <i className="fas fa-plus"></i></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-2">
                                                            <div className="form-group">
                                                                <select className="form-control form-control-md mb-0">
                                                                    <option value="Facebook">Facebook</option>
                                                                    <option value="Instagram">Instagram</option>
                                                                    <option value="Telegram">Telegram</option>
                                                                    <option value="Whatsapp">Whatsapp</option>
                                                                    <option value="Linkedin">Linkedin</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-9">
                                                            <div className="form-group">
                                                                <input type="text" id="display-name" name="display_name"
                                                                       className="form-control form-control-md mb-0"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group mb-3" >
                                                    <div className="row">
                                                        <div className="col-8">
                                                            <span style={{justifyContent:"center", display:"flex",position:"relative", top:"110px", fontSize:"20px"}}>Cover Photo</span>
                                                            <form >
                                                                <input type="file"
                                                                       accept=".jpg, .jpeg, .png"
                                                                       name="frr" id="frr"
                                                                       className="inputFile"
                                                                       onChange={(event) => setSelectedFile1(window.URL.createObjectURL(event.target.files[0]))}/>
                                                                <label htmlFor="frr" >
                                                                    <img src={selectedFile1 } id="frr"  style={{width:'600px', height:'200px'}}/>
                                                                </label>
                                                            </form>
                                                        </div>
                                                        <div className="col-4">
                                                            <span  style={{justifyContent:"center", display:"flex",position:"relative", top:"110px",  fontSize:"20px"}}>Logo</span>
                                                            <form>
                                                                <input type="file"
                                                                       accept=".jpg, .jpeg, .png"
                                                                       name="frr2" id="frr2"
                                                                       className="inputFile"
                                                                       onChange={(event) => setSelectedFile2(window.URL.createObjectURL(event.target.files[0]))}/>
                                                                <label htmlFor="frr2" >
                                                                    <img src={selectedFile2 } id="frr2"  style={{width:'300px', height:'200px'}}/>
                                                                </label>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="mt-5">
                                                    <h4 className="title title-password ls-25 font-weight-bold">Şifrə dəyişikliyi</h4>
                                                    <div className="form-group mb-5" style={{backgroundColor:"#f5f5f5", borderRadius:"2rem",padding:"7px",margin:"5px"}}>
                                                        <label className="text-dark" htmlFor="cur-password">Cari Şifrə</label>
                                                        <input type="password" className="form-control form-control-md"
                                                               id="cur-password" name="cur_password"/>
                                                    </div>
                                                    <div className="form-group mb-5" style={{backgroundColor:"#f5f5f5", borderRadius:"2rem",padding:"7px",margin:"5px"}}>
                                                        <label className="text-dark" htmlFor="new-password">Yeni Şifrəni Əlavə Edin</label>
                                                        <input type="password" className="form-control form-control-md"
                                                               id="new-password" name="new_password"/>
                                                    </div>
                                                    <div className="form-group mb-5" style={{backgroundColor:"#f5f5f5", borderRadius:"2rem",padding:"7px",margin:"5px"}}>
                                                        <label className="text-dark" htmlFor="conf-password">Şifrəni təsdiqləyin</label>
                                                        <input type="password" className="form-control form-control-md"
                                                               id="conf-password" name="conf_password"/>
                                                    </div>
                                                </div>
                                                <button type="submit"
                                                        className="btn btn-dark btn-rounded btn-sm mb-4">Dəyişiklikləri yadda saxla
                                                </button>
                                               <div> <label htmlFor="display-name">Açilma tarixi: 1/31/2022</label></div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>


                </div>
                <div className="sticky-footer sticky-content fix-bottom">
                    <a href="demo1.html" className="sticky-link active">
                        <i className="w-icon-home"></i>
                        <p>Home</p>
                    </a>
                    <a href="shop-banner-sidebar.html" className="sticky-link">
                        <i className="w-icon-category"></i>
                        <p>Shop</p>
                    </a>
                    <a href="my-account.html" className="sticky-link">
                        <i className="w-icon-account"></i>
                        <p>Account</p>
                    </a>
                    <div className="cart-dropdown dir-up">
                        <a href="cart.html" className="sticky-link">
                            <i className="w-icon-cart"></i>
                            <p>Cart</p>
                        </a>
                        <div className="dropdown-box">
                            <div className="products">
                                <div className="product product-cart">
                                    <div className="product-detail">
                                        <h3 className="product-name">
                                            <a href="product-default.html">Beige knitted elas<br/>tic
                                                runner shoes</a>
                                        </h3>
                                        <div className="price-box">
                                            <span className="product-quantity">1</span>
                                            <span className="product-price">$25.68</span>
                                        </div>
                                    </div>
                                    <figure className="product-media">
                                        <a href="#">
                                            <img src="assets/images/cart/product-1.jpg" alt="product" height="84"
                                                 width="94"/>
                                        </a>
                                    </figure>
                                    <button className="btn btn-link btn-close" aria-label="button">
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>

                                <div className="product product-cart">
                                    <div className="product-detail">
                                        <h3 className="product-name">
                                            <a href="product.html">Blue utility pina<br/>fore
                                                denim dress</a>
                                        </h3>
                                        <div className="price-box">
                                            <span className="product-quantity">1</span>
                                            <span className="product-price">$32.99</span>
                                        </div>
                                    </div>
                                    <figure className="product-media">
                                        <a href="#">
                                            <img src="assets/images/cart/product-2.jpg" alt="product" width="84"
                                                 height="94"/>
                                        </a>
                                    </figure>
                                    <button className="btn btn-link btn-close" aria-label="button">
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>
                            </div>

                            <div className="cart-total">
                                <label>Subtotal:</label>
                                <span className="price">$58.67</span>
                            </div>

                            <div className="cart-action">
                                <a href="cart.html" className="btn btn-dark btn-outline btn-rounded">View Cart</a>
                                <a href="checkout.html" className="btn btn-primary  btn-rounded">Checkout</a>
                            </div>
                        </div>
                    </div>

                    <div className="header-search hs-toggle dir-up">
                        <a href="#" className="search-toggle sticky-link">
                            <i className="w-icon-search"></i>
                            <p>Search</p>
                        </a>
                        <form action="#" className="input-wrapper">
                            <input type="text" className="form-control" name="search" autoComplete="off"
                                   placeholder="Search" required/>
                            <button className="btn btn-search" type="submit">
                                <i className="w-icon-search"></i>
                            </button>
                        </form>
                    </div>
                </div>
                <a id="scroll-top" className="scroll-top" href="#top" title="Top" role="button"> <i
                    className="w-icon-angle-up"></i>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70">
                        <circle id="progress-indicator" fill="transparent" stroke="#000000" stroke-miterlimit="10"
                                cx="35" cy="35" r="34" ></circle>
                    </svg>
                </a>
                <div className="mobile-menu-wrapper">
                    <div className="mobile-menu-overlay"></div>
                    <a href="#" className="mobile-menu-close"><i className="close-icon"></i></a>
                    <div className="mobile-menu-container scrollable">
                        <form action="#" method="get" className="input-wrapper">
                            <input type="text" className="form-control" name="search" autoComplete="off"
                                   placeholder="Search" required/>
                            <button className="btn btn-search" type="submit">
                                <i className="w-icon-search"></i>
                            </button>
                        </form>
                        <div className="tab">
                            <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item">
                                    <a href="#main-menu" className="nav-link active">Main Menu</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#categories" className="nav-link">Categories</a>
                                </li>
                            </ul>
                        </div>
                        <div className="tab-content">
                            <div className="tab-pane active" id="main-menu">
                                <ul className="mobile-menu">
                                    <li><a href="demo1.html">Home</a></li>
                                    <li>
                                        <a href="shop-banner-sidebar.html">Shop</a>
                                        <ul>
                                            <li>
                                                <a href="#">Shop Pages</a>
                                                <ul>
                                                    <li><a href="shop-banner-sidebar.html">Banner With Sidebar</a></li>
                                                    <li><a href="shop-boxed-banner.html">Boxed Banner</a></li>
                                                    <li><a href="shop-fullwidth-banner.html">Full Width Banner</a></li>
                                                    <li><a href="shop-horizontal-filter.html">Horizontal Filter<span
                                                        className="tip tip-hot">Hot</span></a></li>
                                                    <li><a href="shop-off-canvas.html">Off Canvas Sidebar<span
                                                        className="tip tip-new">New</span></a></li>
                                                    <li><a href="shop-infinite-scroll.html">Infinite Ajax Scroll</a>
                                                    </li>
                                                    <li><a href="shop-right-sidebar.html">Right Sidebar</a></li>
                                                    <li><a href="shop-both-sidebar.html">Both Sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Shop Layouts</a>
                                                <ul>
                                                    <li><a href="shop-grid-3cols.html">3 Columns Mode</a></li>
                                                    <li><a href="shop-grid-4cols.html">4 Columns Mode</a></li>
                                                    <li><a href="shop-grid-5cols.html">5 Columns Mode</a></li>
                                                    <li><a href="shop-grid-6cols.html">6 Columns Mode</a></li>
                                                    <li><a href="shop-grid-7cols.html">7 Columns Mode</a></li>
                                                    <li><a href="shop-grid-8cols.html">8 Columns Mode</a></li>
                                                    <li><a href="shop-list.html">List Mode</a></li>
                                                    <li><a href="shop-list-sidebar.html">List Mode With Sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Product Pages</a>
                                                <ul>
                                                    <li><a href="product-variable.html">Variable Product</a></li>
                                                    <li><a href="product-featured.html">Featured &amp; Sale</a></li>
                                                    <li><a href="product-accordion.html">Data In Accordion</a></li>
                                                    <li><a href="product-section.html">Data In Sections</a></li>
                                                    <li><a href="product-swatch.html">Image Swatch</a></li>
                                                    <li><a href="product-extended.html">Extended Info</a>
                                                    </li>
                                                    <li><a href="product-without-sidebar.html">Without Sidebar</a></li>
                                                    <li><a href="product-video.html">360<sup>o</sup> &amp; Video<span
                                                        className="tip tip-new">New</span></a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Product Layouts</a>
                                                <ul>
                                                    <li><a href="product-default.html">Default<span
                                                        className="tip tip-hot">Hot</span></a></li>
                                                    <li><a href="product-vertical.html">Vertical Thumbs</a></li>
                                                    <li><a href="product-grid.html">Grid Images</a></li>
                                                    <li><a href="product-masonry.html">Masonry</a></li>
                                                    <li><a href="product-gallery.html">Gallery</a></li>
                                                    <li><a href="product-sticky-info.html">Sticky Info</a></li>
                                                    <li><a href="product-sticky-thumb.html">Sticky Thumbs</a></li>
                                                    <li><a href="product-sticky-both.html">Sticky Both</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="vendor-dokan-store.html">Vendor</a>
                                        <ul>
                                            <li>
                                                <a href="#">Store Listing</a>
                                                <ul>
                                                    <li><a href="vendor-dokan-store-list.html">Store listing 1</a></li>
                                                    <li><a href="vendor-wcfm-store-list.html">Store listing 2</a></li>
                                                    <li><a href="vendor-wcmp-store-list.html">Store listing 3</a></li>
                                                    <li><a href="vendor-wc-store-list.html">Store listing 4</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Vendor Store</a>
                                                <ul>
                                                    <li><a href="vendor-dokan-store.html">Vendor Store 1</a></li>
                                                    <li><a href="vendor-wcfm-store-product-grid.html">Vendor Store 2</a>
                                                    </li>
                                                    <li><a href="vendor-wcmp-store-product-grid.html">Vendor Store 3</a>
                                                    </li>
                                                    <li><a href="vendor-wc-store-product-grid.html">Vendor Store 4</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="blog.html">Blog</a>
                                        <ul>
                                            <li><a href="blog.html">Classic</a></li>
                                            <li><a href="blog-listing.html">Listing</a></li>
                                            <li>
                                                <a href="blog-grid.html">Grid</a>
                                                <ul>
                                                    <li><a href="blog-grid-2cols.html">Grid 2 columns</a></li>
                                                    <li><a href="blog-grid-3cols.html">Grid 3 columns</a></li>
                                                    <li><a href="blog-grid-4cols.html">Grid 4 columns</a></li>
                                                    <li><a href="blog-grid-sidebar.html">Grid sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Masonry</a>
                                                <ul>
                                                    <li><a href="blog-masonry-2cols.html">Masonry 2 columns</a></li>
                                                    <li><a href="blog-masonry-3cols.html">Masonry 3 columns</a></li>
                                                    <li><a href="blog-masonry-4cols.html">Masonry 4 columns</a></li>
                                                    <li><a href="blog-masonry-sidebar.html">Masonry sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Mask</a>
                                                <ul>
                                                    <li><a href="blog-mask-grid.html">Blog mask grid</a></li>
                                                    <li><a href="blog-mask-masonry.html">Blog mask masonry</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="post-single.html">Single Post</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="about-us.html">Pages</a>
                                        <ul>

                                            <li><a href="about-us.html">About Us</a></li>
                                            <li><a href="become-a-vendor.html">Become A Vendor</a></li>
                                            <li><a href="contact-us.html">Contact Us</a></li>
                                            <li><a href="login.html">Login</a></li>
                                            <li><a href="faq.html">FAQs</a></li>
                                            <li><a href="error-404.html">Error 404</a></li>
                                            <li><a href="coming-soon.html">Coming Soon</a></li>
                                            <li><a href="wishlist.html">Wishlist</a></li>
                                            <li><a href="cart.html">Cart</a></li>
                                            <li><a href="checkout.html">Checkout</a></li>
                                            <li><a href="my-account.html">My Account</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="elements.html">Elements</a>
                                        <ul>
                                            <li><a href="element-products.html">Products</a></li>
                                            <li><a href="element-titles.html">Titles</a></li>
                                            <li><a href="element-typography.html">Typography</a></li>
                                            <li><a href="element-categories.html">Product Category</a></li>
                                            <li><a href="element-buttons.html">Buttons</a></li>
                                            <li><a href="element-accordions.html">Accordions</a></li>
                                            <li><a href="element-alerts.html">Alert &amp; Notification</a></li>
                                            <li><a href="element-tabs.html">Tabs</a></li>
                                            <li><a href="element-testimonials.html">Testimonials</a></li>
                                            <li><a href="element-blog-posts.html">Blog Posts</a></li>
                                            <li><a href="element-instagrams.html">Instagrams</a></li>
                                            <li><a href="element-cta.html">Call to Action</a></li>
                                            <li><a href="element-vendors.html">Vendors</a></li>
                                            <li><a href="element-icon-boxes.html">Icon Boxes</a></li>
                                            <li><a href="element-icons.html">Icons</a></li>
                                        </ul>
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
                                                    <li><a href="shop-fullwidth-banner.html">Sale</a></li>
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
                                    <li>
                                        <a href="shop-fullwidth-banner.html">
                                            <i className="w-icon-home"></i>Home & Garden
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="#">Bedroom</a>
                                                <ul>
                                                    <li><a href="shop-fullwidth-banner.html">Beds, Frames &
                                                        Bases</a></li>
                                                    <li><a href="shop-fullwidth-banner.html">Dressers</a></li>
                                                    <li><a href="shop-fullwidth-banner.html">Nightstands</a>
                                                    </li>
                                                    <li><a href="shop-fullwidth-banner.html">Kid's Beds &
                                                        Headboards</a></li>
                                                    <li><a href="shop-fullwidth-banner.html">Armoires</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Living Room</a>
                                                <ul>
                                                    <li><a href="shop-fullwidth-banner.html">Coffee Tables</a>
                                                    </li>
                                                    <li><a href="shop-fullwidth-banner.html">Chairs</a></li>
                                                    <li><a href="shop-fullwidth-banner.html">Tables</a></li>
                                                    <li><a href="shop-fullwidth-banner.html">Futons & Sofa
                                                        Beds</a></li>
                                                    <li><a href="shop-fullwidth-banner.html">Cabinets &
                                                        Chests</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Office</a>
                                                <ul>
                                                    <li><a href="shop-fullwidth-banner.html">Office Chairs</a>
                                                    </li>
                                                    <li><a href="shop-fullwidth-banner.html">Desks</a></li>
                                                    <li><a href="shop-fullwidth-banner.html">Bookcases</a></li>
                                                    <li><a href="shop-fullwidth-banner.html">File Cabinets</a>
                                                    </li>
                                                    <li><a href="shop-fullwidth-banner.html">Breakroom
                                                        Tables</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Kitchen & Dining</a>
                                                <ul>
                                                    <li><a href="shop-fullwidth-banner.html">Dining Sets</a>
                                                    </li>
                                                    <li><a href="shop-fullwidth-banner.html">Kitchen Storage
                                                        Cabinets</a></li>
                                                    <li><a href="shop-fullwidth-banner.html">Bashers Racks</a>
                                                    </li>
                                                    <li><a href="shop-fullwidth-banner.html">Dining Chairs</a>
                                                    </li>
                                                    <li><a href="shop-fullwidth-banner.html">Dining Room
                                                        Tables</a></li>
                                                    <li><a href="shop-fullwidth-banner.html">Bar Stools</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="shop-fullwidth-banner.html">
                                            <i className="w-icon-electronics"></i>Electronics
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="#">Laptops &amp; Computers</a>
                                                <ul>
                                                    <li><a href="shop-fullwidth-banner.html">Desktop
                                                        Computers</a></li>
                                                    <li><a href="shop-fullwidth-banner.html">Monitors</a></li>
                                                    <li><a href="shop-fullwidth-banner.html">Laptops</a></li>
                                                    <li><a href="shop-fullwidth-banner.html">Hard Drives &amp;
                                                        Storage</a></li>
                                                    <li><a href="shop-fullwidth-banner.html">Computer
                                                        Accessories</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">TV &amp; Video</a>
                                                <ul>
                                                    <li><a href="shop-fullwidth-banner.html">TVs</a></li>
                                                    <li><a href="shop-fullwidth-banner.html">Home Audio
                                                        Speakers</a></li>
                                                    <li><a href="shop-fullwidth-banner.html">Projectors</a></li>
                                                    <li><a href="shop-fullwidth-banner.html">Media Streaming
                                                        Devices</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Digital Cameras</a>
                                                <ul>
                                                    <li><a href="shop-fullwidth-banner.html">Digital SLR
                                                        Cameras</a></li>
                                                    <li><a href="shop-fullwidth-banner.html">Sports & Action
                                                        Cameras</a></li>
                                                    <li><a href="shop-fullwidth-banner.html">Camera Lenses</a>
                                                    </li>
                                                    <li><a href="shop-fullwidth-banner.html">Photo Printer</a>
                                                    </li>
                                                    <li><a href="shop-fullwidth-banner.html">Digital Memory
                                                        Cards</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Cell Phones</a>
                                                <ul>
                                                    <li><a href="shop-fullwidth-banner.html">Carrier Phones</a>
                                                    </li>
                                                    <li><a href="shop-fullwidth-banner.html">Unlocked Phones</a>
                                                    </li>
                                                    <li><a href="shop-fullwidth-banner.html">Phone & Cellphone
                                                        Cases</a></li>
                                                    <li><a href="shop-fullwidth-banner.html">Cellphone
                                                        Chargers</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="shop-fullwidth-banner.html">
                                            <i className="w-icon-furniture"></i>Furniture
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="#">Furniture</a>
                                                <ul>
                                                    <li><a href="shop-fullwidth-banner.html">Sofas & Couches</a>
                                                    </li>
                                                    <li><a href="shop-fullwidth-banner.html">Armchairs</a></li>
                                                    <li><a href="shop-fullwidth-banner.html">Bed Frames</a></li>
                                                    <li><a href="shop-fullwidth-banner.html">Beside Tables</a>
                                                    </li>
                                                    <li><a href="shop-fullwidth-banner.html">Dressing Tables</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Lighting</a>
                                                <ul>
                                                    <li><a href="shop-fullwidth-banner.html">Light Bulbs</a>
                                                    </li>
                                                    <li><a href="shop-fullwidth-banner.html">Lamps</a></li>
                                                    <li><a href="shop-fullwidth-banner.html">Celling Lights</a>
                                                    </li>
                                                    <li><a href="shop-fullwidth-banner.html">Wall Lights</a>
                                                    </li>
                                                    <li><a href="shop-fullwidth-banner.html">Bathroom
                                                        Lighting</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Home Accessories</a>
                                                <ul>
                                                    <li><a href="shop-fullwidth-banner.html">Decorative
                                                        Accessories</a></li>
                                                    <li><a href="shop-fullwidth-banner.html">Candals &
                                                        Holders</a></li>
                                                    <li><a href="shop-fullwidth-banner.html">Home Fragrance</a>
                                                    </li>
                                                    <li><a href="shop-fullwidth-banner.html">Mirrors</a></li>
                                                    <li><a href="shop-fullwidth-banner.html">Clocks</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Garden & Outdoors</a>
                                                <ul>
                                                    <li><a href="shop-fullwidth-banner.html">Garden
                                                        Furniture</a></li>
                                                    <li><a href="shop-fullwidth-banner.html">Lawn Mowers</a>
                                                    </li>
                                                    <li><a href="shop-fullwidth-banner.html">Pressure
                                                        Washers</a></li>
                                                    <li><a href="shop-fullwidth-banner.html">All Garden
                                                        Tools</a></li>
                                                    <li><a href="shop-fullwidth-banner.html">Outdoor Dining</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="shop-fullwidth-banner.html">
                                            <i className="w-icon-heartbeat"></i>Healthy & Beauty
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop-fullwidth-banner.html">
                                            <i className="w-icon-gift"></i>Gift Ideas
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop-fullwidth-banner.html">
                                            <i className="w-icon-gamepad"></i>Toy & Games
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop-fullwidth-banner.html">
                                            <i className="w-icon-ice-cream"></i>Cooking
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop-fullwidth-banner.html">
                                            <i className="w-icon-ios"></i>Smart Phones
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop-fullwidth-banner.html">
                                            <i className="w-icon-camera"></i>Cameras & Photo
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop-fullwidth-banner.html">
                                            <i className="w-icon-ruby"></i>Accessories
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop-banner-sidebar.html"
                                           className="font-weight-bold text-primary text-uppercase ls-25">
                                            View All Categories<i className="w-icon-angle-right"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )}