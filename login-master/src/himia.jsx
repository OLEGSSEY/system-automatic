import React, { useState } from 'react'
import "./MainPage.css"
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'

const Himia = () => {

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [image, setImage] = useState(undefined)

    const role = useSelector((state) => state.auth.role)



    const handleFileChange = (e) => {
        setImage(e.target.files[0]);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('desc', desc);
            formData.append('image', image);
            formData.append('userId', userid)

            const response = await fetch('http://localhost:3000/newrequest', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                console.log("Данные успешно отправлены на сервер");

                setTitle('')
                setDesc('')
                setImage(undefined)
            } else {
                console.log("Ошибка при отправке данных на сервер");
            }
        } catch (error) {
            console.log("Ошибка при отправке данных ", error);
        }
    }

    return (
        <>
            <h2>
                Химия
            </h2>
            <p style={{ marginLeft: "350px" }}>
                Все специальности / Бурение нефтяных и газовых скважин / Химия
            </p>
            <div className="div3">
                <Link to="/bur">
                    <img src="arrow.png" height="68" width="68" />
                </Link>
            </div>
            <div>
                <h2 style={{ marginLeft: "-658px" }}>Раздел Химия</h2>
                <img style={{ marginLeft: "340px" }} src="line.png" />
            </div>
            <div>
                {
                    role === "ADMIN" ?
                        <form onSubmit={handleSubmit}>
                            <button className="zadan" type="submit" onClick={ e => (e.target.value) }>Добавить задание</button>
                            <input type="text" placeholder="Заголовок" value={title} onChange={e => setTitle(e.target.value)} required />
                            <input type="text" placeholder="Описание" value={desc} onChange={e => setDesc(e.target.value)} required />
                            <input type="file" placeholder="Выбрать файлы"  multiple onChange={handleFileChange} />
                        </form> : <p></p>
                }
                <img  src={`http://localhost:3000/${image}`} alt="" />
                <div>
                    <div style={{ marginLeft: "340px" }}>{title}</div>
                    <div style={{ marginLeft: "340px" }}>{desc}</div>
                    <div style={{ marginLeft: "340px" }}>{JSON.stringify(image)}</div>
                </div>
                </div>
        </>
            )
}
            export default Himia