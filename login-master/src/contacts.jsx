import "./MainPage.css"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from './redux/authSlice'

const Contacts = () => {
    const dispatch = useDispatch()
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
            <h2 style={{fontSize: "36px"}}>
                Свяжитесь с нами
            </h2>
            <div style={{display: "flex"}}>
                <img src="kont.png" style={{marginLeft: "100px"}}/>
                    <a href="https://yandex.ru/maps/-/CDUrNTPv">
                        <img src="cart.png" />
                    </a>
            </div>
        </>
    )
}

export default Contacts