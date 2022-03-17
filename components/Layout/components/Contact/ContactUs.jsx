import React, {useEffect, useState} from 'react'
import {createUserMessage} from "../../../../services/contact-us/createUserMessage";
import {faq} from "../../../../services/faq";

export default function Contact(){
    const [createUserMessageTitle, createUserMessagePost] = React.useState([]);
    const [nameTitle, namePost] = React.useState([]);
    const [emailTitle, emailPost] = React.useState([]);
    const [messageTitle, messagePost] = React.useState([]);
    const handleCreateUserMessageInput = () =>{
        let data = {
            name:nameTitle,
            email:emailTitle,
            message:messageTitle
        }
        createUserMessage(data)
            .then(items => {
                    createUserMessagePost(items.data)
            }).catch(e =>{
            console.log(e)
        })
        console.log(data)
    }

    const [faqsItem, faqsData] = useState([]);
    const [faqTitle, faqTitleData] = useState(null);
    useEffect(() => {
        faq()
           .then(items => {
               if (items.data[0].faqs && items.data[0].title){
                   faqsData(items.data[0].faqs)
                   faqTitleData(items.data[0].title)
               }

            })
    }, [])
    return (
        <div>
            <main className="main">
                <div className="page-header">
                    <div className="container">
                        <h1 className="page-title mb-0">Əlaqə</h1>
                    </div>
                </div>
                <nav className="breadcrumb-nav mb-10 pb-1">
                    <div className="container">
                        <ul className="breadcrumb">
                            <li><a href="/home">Ana Səhifə</a></li>
                            <li>Əlaqə</li>
                        </ul>
                    </div>
                </nav>
                <div className="page-content contact-us">
                    <div className="container">
                        <section className="content-title-section mb-10">
                            <h3 className="title title-center mb-3">Əlaqə məlumatı</h3>
                            <p className="text-center">Lorem ipsum dolor sit amet,
                                consectetur
                                adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                        </section>

                        <section className="contact-information-section mb-10">
                            <div className=" swiper-container swiper-theme " data-swiper-options="{
                            'spaceBetween': 20,
                            'slidesPerView': 1,
                            'breakpoints': {
                                '480': {
                                    'slidesPerView': 2
                                },
                                '768': {
                                    'slidesPerView': 3
                                },
                                '992': {
                                    'slidesPerView': 4
                                }
                            }
                        }">
                                <div className="swiper-wrapper row cols-xl-4 cols-md-3 cols-sm-2 cols-1">
                                    <div className="swiper-slide icon-box text-center icon-box-primary">
                                    <span className="icon-box-icon icon-email">
                                        <i className="w-icon-envelop-closed"></i>
                                    </span>
                                        <div className="icon-box-content">
                                            <h4 className="icon-box-title">E-mail Address</h4>
                                            <p>mail@example.com</p>
                                        </div>
                                    </div>
                                    <div className="swiper-slide icon-box text-center icon-box-primary">
                                    <span className="icon-box-icon icon-headphone">
                                        <i className="w-icon-headphone"></i>
                                    </span>
                                        <div className="icon-box-content">
                                            <h4 className="icon-box-title">Phone Number</h4>
                                            <p>(123) 456-7890 / (123) 456-9870</p>
                                        </div>
                                    </div>
                                    <div className="swiper-slide icon-box text-center icon-box-primary">
                                    <span className="icon-box-icon icon-map-marker">
                                        <i className="w-icon-map-marker"></i>
                                    </span>
                                        <div className="icon-box-content">
                                            <h4 className="icon-box-title">Address</h4>
                                            <p>Lawrence, NY 11345, USA</p>
                                        </div>
                                    </div>
                                    <div className="swiper-slide icon-box text-center icon-box-primary">
                                    <span className="icon-box-icon icon-fax">
                                        <i className="w-icon-fax"></i>
                                    </span>
                                        <div className="icon-box-content">
                                            <h4 className="icon-box-title">Fax</h4>
                                            <p>1-800-570-7777</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <hr className="divider mb-10 pb-1"/>

                            <section className="contact-section">
                                <div className="row gutter-lg pb-3">
                                    <div className="col-lg-6 mb-8">
                                        <h4 className="title mb-3">{faqTitle}</h4>
                                        {faqsItem.map(e=>(
                                            <div className="mb-4">
                                                <div className="accordion accordion-bg accordion-gutter-md accordion-border">
                                                    <div className="card">
                                                        <div className="card-header">
                                                            <a href="#collapse1" className="collapse">{e.question}</a>
                                                        </div>
                                                        <div id="collapse1" className="card-body expanded">
                                                            <p className="mb-0">
                                                                {e.answer}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="col-lg-6 mb-8">
                                        <h4 className="title mb-3">Bizə Mesaj Göndərin</h4>
                                        <form className="form contact-us-form" action="#" method="post">
                                            <div className="form-group">
                                                <label htmlFor="username">Adınız</label>
                                                <input type="text" onChange={e=>namePost(e.target.value)} id="username" name="username"
                                                       className="form-control"/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="email_1">E-poçtunuz</label>
                                                <input type="email" onChange={e=>emailPost(e.target.value)} id="email_1" name="email_1"
                                                       className="form-control"/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="message">Mesajınız</label>
                                                <textarea id="message" onChange={e=>messagePost(e.target.value)} name="message" cols="30" rows="5"
                                                          className="form-control"></textarea>
                                            </div>
                                            <button type="button" onClick={handleCreateUserMessageInput} className="btn btn-dark btn-rounded">İNDİ GÖNDƏR</button>
                                        </form>
                                    </div>
                                </div>
                            </section>
                    </div>
                </div>
            </main>
        </div>
    )}