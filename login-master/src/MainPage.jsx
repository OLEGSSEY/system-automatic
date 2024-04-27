import React from 'react'
import { useDispatch } from 'react-redux'
import { logOut } from './redux/authSlice'
import { useSelector } from 'react-redux'
import "./MainPage.css"
import { Link, useNavigate } from 'react-router-dom'

const MainPage = () => {

    const dispatch = useDispatch()
    const nav = useNavigate()
    const token = useSelector((state) => state.auth.token)
    const role = useSelector((state) => state.auth.role)

    return (
        <>
            <header>
            <img src="oil.png" width="80" height="80" />
                    <div className="top-menu">
                        <ul class="menu-main">
                            <li><Link to="/">Главная</Link></li>
                            <li><Link to="/spet">Специальности</Link></li>
                            <li><Link to="/about">О нас</Link></li>
                            <li><Link to="/contacts">Контакты</Link></li>
                        </ul>
                    </div>
                    
                    <button  className="logout" onClick={() => {dispatch(logOut())}}>Выйти</button>
            </header>
                    <div class="div1">
                        <h2>
                            Наша образовательная платформа
                        </h2>
                    </div>
                    <div class="div2">
                        <p>
                            Изучайте все, что связано с нефтегазовой промышленностью, в любое время и в любом месте с помощью наших комплексных курсов.
                        </p>
                    </div>
                    <div class="d2" style={{marginLeft: "850px", marginTop: "10px"}}>
                        <img src="f.png" width="557" height="486" style={{marginLeft: "60px", marginTop:"120px"}}/>
                    </div>

        </>
                )
}

                export default MainPage