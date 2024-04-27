import "./MainPage.css"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from './redux/authSlice'

const About = () => {
    const dispatch = useDispatch()
    return (
        <>
            <header>
                <img src="oil.png" width="80" height="80"/>
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
            <h2 style={{fontSize: "36px", marginLeft: "370px", marginTop: "50px"}}>
                О нас
            </h2>
            <p style={{maxWidth: "400px", marginTop: "60px", marginLeft: "970px"}}>
                Мы стремимся обеспечить качественное и доступное образование для всех. Наша команда опытных преподавателей
                и профессионалов стремится помочь студентам достичь своих академических целей и подготовиться к будущему.
            </p>
            <img src="g.png" style={{marginTop: "-330px"}} width="1100" height="800"></img>
        </>
    )
}

export default About