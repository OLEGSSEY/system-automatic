import "./MainPage.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from './redux/authSlice'


const Spet = () => {
    const dispatch = useDispatch()
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        arrows: false,
        slidesToScroll: 3
      }
    return (
        <>
            <header>
                <img src="oil.png" width="80" height="80" />
                <div className="top-menu">
                    <ul className="menu-main">
                        <li><Link to="/">Главная</Link></li>
                        <li><Link to="/spet">Специальности</Link></li>
                        <li><Link to="/about">О нас</Link></li>
                        <li><Link to="/contacts">Контакты</Link></li>
                    </ul>
                </div>
                <button className="logout" onClick={() => {dispatch(logOut())}}>Выйти</button>
            </header>
            <h2>
                Все специальности
            </h2>
            <Slider {...settings}>
            
                    <div className="product-card">
                        <div className="product-image">
                            <img src="images/card1.jpg" className="product-thumb" alt="" />
                            <button className="card-btn"><Link to="/bur">Подробнее</Link></button>
                        </div>
                        <div className="product-info">
                            <h2 className="product-brand">Бурение нефтяных и газовых скважин</h2>
                            <p className="product-short-description">Профессия бурильщика очень востребована на рынке труда представители профессии Бурильщика действительно редки в наше время.</p>
                        </div>
                    </div>
                    <div className="product-card">
                        <div className="product-image">
                            <img src="images/card2.jpg" className="product-thumb" alt="" />
                            <button className="card-btn">Подробнее</button>
                        </div>
                        <div className="product-info">
                            <h2 className="product-brand">Разработка и эксплуатация газовых месторождений</h2>
                            <p className="product-short-description">Профессия оператора по добыче нефти и газа очень многогранна и, пожалуй, является одной из ведущих в нефтегазодобывающей промышленности</p>
                        </div>
                    </div>
                    <div className="product-card">
                        <div className="product-image">
                            <img src="images/card3.jpg" className="product-thumb" alt="" />
                            <button className="card-btn">Подробнее</button>
                        </div>
                        <div className="product-info">
                            <h2 className="product-brand">Технология аналитического контроля химических соединений</h2>
                            <p className="product-short-description">Техник – специалист, который проводит анализ состава и свойств различных продуктов веществ и ресурсов</p>
                        </div>
                    </div>
                    <div className="product-card">
                        <div className="product-image">
                            <img src="images/card4.jpg" className="product-thumb" alt="" />
                            <button className="card-btn">Подробнее</button>
                        </div>
                        <div className="product-info">
                            <h2 className="product-brand">Техническое обслуживание и ремонт двигателей, систем и агрегатов автомобилей</h2>
                            <p className="product-short-description">В обязанности специалиста входит организовывать и проводить работы по техническому обслуживанию и ремонту автомобильного транспорта, осуществлять технический контроль автотранспортных средств при хранении, эксплуатации, техническом обслуживании и ремонте. </p>
                        </div>
                    </div>
                    <div className="product-card">
                        <div className="product-image">
                            <img src="images/card5.jpg" className="product-thumb" alt="" />
                            <button className="card-btn">Подробнее</button>
                        </div>
                        <div className="product-info">
                            <h2 className="product-brand">Оператор по ремонту скважин</h2>
                            <p className="product-short-description">Оператор – это сотрудник нефтегазовой компании, который проводит необходимые мероприятия по ремонту. В своей работе он использует специальные устройства, передвижные сооружения для подъема и перемещения грузов, насосы, осветительные и контрольно-измерительные приборы.</p>
                        </div>
                    </div>
                    <div className="product-card">
                        <div className="product-image">
                            <img src="images/card6.jpg" className="product-thumb" alt="" />
                            <button className="card-btn">Подробнее</button>
                        </div>
                        <div className="product-info">
                            <h2 className="product-brand">Машинист на буровых установках</h2>
                            <p className="product-short-description">Машинист управляет работой установки, устанавливает режим бурения согласно графику и местным условиям, выполняет техническое обслуживание силовых агрегатов, привода, рабочей части буровой установки. </p>
                        </div>
                    </div>
            </Slider>
            

            
        </>
    )
}


export default Spet