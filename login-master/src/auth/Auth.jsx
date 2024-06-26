import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loginThunk } from '../redux/authSlice'
import { useNavigate } from 'react-router-dom'


const Log = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const authState = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    const nav = useNavigate()

    useEffect(() => {

    }, [authState])

    return (
        authState.error ? <p>{authState.error}</p> :
            authState.loading ? <p>Loading...</p> :
                <div className='form'>
                    <form className="login-form">
                        <input value={username}  onChange={(e) => {
                        setUsername(e.target.value)
                    }} type="text" placeholder="Логин"  />
                        <input value={password}  onChange={(e) => {
                        setPassword(e.target.value)
                    }} type="password" placeholder="Пароль" />
                        <button  onClick={() => {
                        dispatch(loginThunk({
                            username: username,
                            password: password
                        }))
                    }}>Войти</button>
                    </form>
                </div>
    )
}

export default Log