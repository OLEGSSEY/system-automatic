import React, { useState, useEffect } from 'react';
import "./MainPage.css";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const Bjd = () => {

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [image, setImage] = useState(undefined);
    const [data, setData] = useState({});
    const [produc, setProduc] = useState([]);
    const role = useSelector((state) => state.auth.role);

    useEffect(() => {
        fetch("http://localhost:3000/request")
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.log("Ошибка при загрузке данных ", error));
    }, []);

    const handleFileChange = (e) => {
        setImage(e.target.file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('description', desc);
            formData.append('image', image);
            

            const response = await fetch('http://localhost:3000/newrequest', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                console.log("Данные успешно отправлены на сервер");
                setTitle('');
                setDesc('');
                setImage('');

                const responseData = await response.json();
                if (responseData.products) {
                    setProduc(responseData.products.map((elem) => (
                        <div key={elem.id}>
                            <div style={{ marginLeft: "340px" }}>{elem.title}</div>
                            <div style={{ marginLeft: "340px" }}>{elem.desc}</div>
                            <div style={{ marginLeft: "340px" }}><a href={`http://localhost:3000/uploads/${elem.image}`}>{elem.image}</a></div>
                            <input type="file" placeholder="Выбрать файлы для ответа" onChange={handleFileChange} />
                        </div>
                    )));
                }
            } else {
                console.log("Ошибка при отправке данных на сервер");
            }
        } catch (error) {
            console.log("Ошибка при отправке данных ", error);
        }
    };

    return (
        <>
            <h2>
                Основы безопасности жизнедеятельности
            </h2>
            <p style={{ marginLeft: "350px" }}>
                Все специальности / Бурение нефтяных и газовых скважин / Основы безопасности жизнедеятельности
            </p>
            <div className="div3">
                <Link to="/bur">
                    <img src="arrow.png" height="68" width="68" alt="arrow"/>
                </Link>
            </div>
            <div>
                <h2 style={{ marginLeft: "-658px" }}>Раздел Основы безопасности жизнедеятельности</h2>
                <img style={{ marginLeft: "340px" }} src="line.png" alt="line" />
            </div>
            <div>
                {role === "ADMIN" ? (
                    <form onSubmit={handleSubmit}>
                        <button className="zadan" type="submit">Добавить задание</button>
                        <input type="text" placeholder="Заголовок" value={title} onChange={e => setTitle(e.target.value)} required />
                        <input type="text" placeholder="Описание" value={desc} onChange={e => setDesc(e.target.value)} required />
                        <input type="file" placeholder="Выбрать файлы" onChange={handleFileChange} />
                    </form>
                ) : null}
                {produc}
            </div>
        </>
    );
};

export default Bjd;