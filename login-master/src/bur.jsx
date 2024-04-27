import "./MainPage.css"
import { Link } from "react-router-dom";


const Bur = () => {
    return (
        <>
            <h2>
                Бурение нефтяных и газовых скважин
            </h2>
            <p style={{marginLeft:"350px"}}>
                Все специальности / Бурение нефтяных и газовых скважин
            </p>
            <div className="div3">
                <Link to = "/spet">
                    <img src="arrow.png" height="68" width="68"/>
                </Link>
            </div>

            <div className="main">
                <div className="diw1">Учебные предметы
                    <div className="dropdown-content">
                        <div style={{display: "flex"}}>
                            <Link to="/bjd" style={{borderRadius: "18px"}}>ОБЖ</Link>
                            <Link to="/istoria" style={{borderRadius: "18px", marginLeft: "5px"}}>История</Link>
                            <Link to="/fizika" style={{borderRadius: "18px", marginLeft: "5px"}}>Физика</Link>
                            <Link to="/geogr" style={{borderRadius: "18px", marginTop: "5px", marginLeft: "5px"}}>География</Link>
                        </div>
                        <div style={{display: "flex"}}>
                            <Link to="/liter" style={{borderRadius: "18px", marginTop: "5px", padding: "25px 10px 10px 10px"}}>Литература</Link>
                            <Link to="/english" style={{borderRadius: "18px", marginTop: "5px", marginLeft: "5px"}}>Иностранный язык</Link>
                            <Link to="/russn" style={{borderRadius: "18px", marginTop: "5px", marginLeft: "5px"}}>Русский язык</Link>
                        </div>
                        <div style={{display: "flex"}}>
                            <Link to="/himia" style={{borderRadius: "18px", marginTop: "5px", marginLeft: "5px"}}>Химия</Link>
                            <Link to="/obsh" style={{borderRadius: "18px", marginTop: "5px", marginLeft: "5px"}}>Обществознание</Link>
                            <Link to="/inform" style={{borderRadius: "18px", marginTop: "5px", marginLeft: "5px"}}>Инофрматика</Link>
                        </div>
                        <div style={{display: "flex"}}>
                            <Link to="/biology" style={{borderRadius: "18px", marginTop: "5px", marginLeft: "5px"}}>Биология</Link>
                            <Link to="/fizra" style={{borderRadius: "18px", marginTop: "5px", marginLeft: "5px"}}>Физкультура</Link>
                            <Link to="/mathem" style={{borderRadius: "18px", marginTop: "5px", marginLeft: "5px"}}>Математика</Link>
                        </div>
                        <div style={{display: "flex"}}>
                        <Link to="/indiv" style={{borderRadius: "18px", marginTop: "5px", marginLeft: "5px"}}>Индивидуальный проект</Link>
                        </div>

                    </div>
                </div>
                <div className="diw2">Гуманитарно и социально-экономический цикл
                    <div className="dropdown-content">
                        <div style={{display: "flex"}}>
                            <Link to="/bjd" style={{borderRadius: "18px"}}>БЖД</Link>
                            <Link to="/istoria" style={{borderRadius: "18px", marginLeft: "5px"}}>История России</Link>
                            <Link to="/fizika" style={{borderRadius: "18px", marginLeft: "5px"}}>Физкультура</Link>
                        </div>
                        <div style={{display: "flex"}}>
                            <Link to="/liter" style={{borderRadius: "18px", marginTop: "5px", padding: "25px 10px 10px 10px"}}>Основы финансовой грамотности</Link>
                            <Link to="/english" style={{borderRadius: "18px", marginTop: "5px", marginLeft: "5px"}}>Основы бережливого производства</Link>
                            <Link to="/russn" style={{borderRadius: "18px", marginTop: "5px", marginLeft: "5px"}}>Иностранный язык в проф. деятельности</Link>
                        </div>
                    </div>
                </div>
                    
                <div className="diw3">Общепрофессиональные дисциплины
                <div className="dropdown-content">
                        <div style={{display: "flex"}}>
                            <Link to="/bjd" style={{borderRadius: "18px"}}>Инженерная графика</Link>
                            <Link to="/istoria" style={{borderRadius: "18px", marginLeft: "5px"}}>Математические методы решения прикл. проф. задач</Link>
                        </div>
                        <div style={{display: "flex"}}>
                            <Link to="/liter" style={{borderRadius: "18px",  padding: "25px 10px 10px 10px"}}>	Электротехника и электроника</Link>
                            <Link to="/english" style={{borderRadius: "18px",  marginLeft: "5px"}}>Техническая механика</Link>
                            <Link to="/russn" style={{borderRadius: "18px",  marginLeft: "5px"}}>Геология</Link>
                            
                        </div>
                        <div style={{display: "flex"}}>
                            <Link to="/liter" style={{borderRadius: "18px", marginTop: "5px", padding: "25px 10px 10px 10px"}}>Прикладные компьютерные программы в профессиональной деятельности</Link>
                            <Link to="/english" style={{borderRadius: "18px", marginTop: "5px", marginLeft: "5px"}}>Правовые основы профессиональной деятельности</Link>
                        </div>
                        <div style={{display: "flex"}}>
                            <Link to="/fizika" style={{borderRadius: "18px", marginTop: "5px", marginLeft: "5px"}}>Охрана труда</Link>
                            <Link to="/russn" style={{borderRadius: "18px", marginTop: "5px", marginLeft: "5px"}}>Экологические основы природопользования</Link>
                        </div>
                    </div>
                </div>
                <div className="diw4">Проведение работ по экспуатационному и разведочному бурению
                <div className="dropdown-content">
                        <div style={{display: "flex"}}>
                            <Link to="/istoria" style={{borderRadius: "18px", marginLeft: "5px"}}>Технология бурения нефтяных и газовых скважин</Link>
                        </div>
                        <div style={{display: "flex"}}>
                        <Link to="/istoria" style={{borderRadius: "18px", marginTop: "5px", marginLeft: "5px"}}>Учебная практика</Link>
                        </div>
                    </div>
                </div>
                <div className="diw5">Обслуживание и эксплуатация оборудования буровых установок на нефть и газ
                <div className="dropdown-content">
                        <div style={{display: "flex"}}>
                            <Link to="/istoria" style={{borderRadius: "18px", marginLeft: "5px"}}>	Эксплуатация бурового оборудования</Link>
                        </div>
                        <div style={{display: "flex"}}>
                        <Link to="/istoria" style={{borderRadius: "18px", marginTop: "5px", marginLeft: "5px"}}>Учебная практика</Link>
                        </div>
                    </div>
                </div>
                <div className="diw6">Организация работ по бурению, капитальному ремонту нефтяных и газовых скважин
                <div className="dropdown-content">
                        <div style={{display: "flex"}}>
                            <Link to="/istoria" style={{borderRadius: "18px", marginLeft: "5px"}}>	Основы организации и планирования производственных работ</Link>
                        </div>
                        <div style={{display: "flex"}}>
                        <Link to="/istoria" style={{borderRadius: "18px", marginTop: "5px", marginLeft: "5px"}}>Учебная практика</Link>
                        </div>
                    </div>
                </div>
                <div className="diw7">Выполнение работ по рабочей профессии: «Помощник бурильщика эксплуатационного и разведочного бурения скважин на нефть и газ»
                <div className="dropdown-content">
                        <div style={{display: "flex"}}>
                            <Link to="/istoria" style={{borderRadius: "18px", marginLeft: "5px"}}>	Эксплуатация скважин</Link>
                        </div>
                        <div style={{display: "flex"}}>
                        <Link to="/istoria" style={{borderRadius: "18px", marginTop: "5px", marginLeft: "5px"}}>Учебная практика</Link>
                        </div>
                    </div>
                </div>
                <div className="diw8">Проведение работ по капитальному ремонту нефтяных и газовых скважин
                <div className="dropdown-content">
                        <div style={{display: "flex"}}>
                            <Link to="/istoria" style={{borderRadius: "18px", marginLeft: "5px"}}>	Технология работ по капитальному ремонту скважин</Link>
                        </div>
                        <div style={{display: "flex"}}>
                        <Link to="/istoria" style={{borderRadius: "18px", marginTop: "5px", marginLeft: "5px"}}>Учебная практика</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bur