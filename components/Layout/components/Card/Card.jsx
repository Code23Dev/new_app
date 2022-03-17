import React, {useEffect} from 'react'
import {cartByUserID} from "../../../../services/card/cartByUserID";
import {removeFromCart} from "../../../../services/card/removeFromCart";

export default function Card(){
    const [cartByUserIDItem, setCartByUserIDItem] = React.useState([]);
    const [cartCount, setCartCountItem] = React.useState(0);
    const [allCardPrice, setAllCardPrice] = React.useState(0);
    useEffect(() => {
        let cardPrice = 0
        let  userId = localStorage.getItem('userId')
        cartByUserID(userId)
            .then(items => {
                setCartByUserIDItem(items.data.product_version)
                setCartCountItem(items.data.product_version.length)
                items.data.product_version.map(c=>cardPrice+=Number(c.final_price))
                setAllCardPrice(cardPrice)
            })
    }, [])
    const deleteCardProduct = ({quantity:quantity,productId:productId}) => {
        let data = {user:Number(localStorage.getItem('userId')), product:Number(productId)}
        removeFromCart(data)
            .then((e)=>{
                let cardPrice = 0
                let  userId = localStorage.getItem('userId')
                cartByUserID(userId)
                    .then(items => {
                        setCartByUserIDItem(items.data.product_version)
                        setCartCountItem(items.data.product_version.length)
                        items.data.product_version.map(c=>cardPrice+=Number(c.final_price))
                        setAllCardPrice(cardPrice)
                    })
            })
            .catch((e)=>{
                console.log(e)
            })

    };
    return (
        <div>
            <main className="main cart">
                <nav className="breadcrumb-nav">
                    <div className="container">
                        <ul className="breadcrumb shop-breadcrumb bb-no">
                            <li className="active"><a href="/cart">Alış-veriş kartı</a></li>
                            <li><a href="/checkout">Yoxla</a></li>
                            <li><a href="/order">Sifariş tamamlandı</a></li>
                        </ul>
                    </div>
                </nav>
                <div className="page-content">
                    <div className="container">
                        <div className="row gutter-lg mb-10">
                            <div className="col-lg-8 pr-lg-4 mb-6">
                                <table className="shop-table cart-table">
                                    <thead>
                                    <tr>
                                        <th className="product-name"><span>Məhsul</span></th>
                                        <th></th>
                                        <th className="product-price"><span>Qiymət</span></th>
                                        <th className="product-quantity"><span>Kəmiyyət</span></th>
                                        <th className="product-subtotal"><span>Ara cəmi</span></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {cartByUserIDItem.map(e=>(
                                        <tr>
                                            <td className="product-thumbnail">
                                                <div className="p-relative">
                                                    <a href="product-default.html">
                                                        <figure>
                                                            <img src={e.product.main_image} alt="product"
                                                                 width="300" height="338"/>
                                                        </figure>
                                                    </a>
                                                    <button type="submit" className="btn btn-close" onClick={()=>{deleteCardProduct({quantity:e.quantity,productId:e.id})}}><i
                                                        className="fas fa-times"></i></button>
                                                </div>
                                            </td>
                                            <td className="product-name">
                                                <a href="product-default.html">
                                                    {e.product.title}
                                                </a>
                                            </td>
                                            <td className="product-price"><span className="amount">₼ {e.product.price}</span></td>
                                            <td className="product-quantity">
                                                <div className="input-group">
                                                    <input className="quantity form-control" type="number" min="1"
                                                           max="100000"/>
                                                    <button className="quantity-plus w-icon-plus"></button>
                                                    <button className="quantity-minus w-icon-minus"></button>
                                                </div>
                                            </td>
                                            <td className="product-subtotal">
                                                <span className="amount"> ₼ {allCardPrice}</span>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>

                                <div className="cart-action mb-6">
                                    <a href="/shop" className="btn btn-dark btn-rounded btn-icon-left btn-shopping mr-auto"><i
                                        className="w-icon-long-arrow-left"></i>ALIŞVERİŞƏ DAVAM EDİN</a>
                                    {/*<button type="submit" className="btn btn-rounded btn-default btn-clear"*/}
                                    {/*        name="clear_cart" value="Clear Cart">Clear Cart*/}
                                    {/*</button>*/}
                                    {/*<button type="submit" className="btn btn-rounded btn-update disabled"*/}
                                    {/*        name="update_cart" value="Update Cart">Update Cart*/}
                                    {/*</button>*/}
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )}