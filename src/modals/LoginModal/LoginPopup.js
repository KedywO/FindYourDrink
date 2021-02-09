import React, {useState, useEffect} from "react";
import './LoginPopup.css';
import $ from 'jquery';
import dbLogin from "../../dbAxios";

const LoginPopup = ({showLogin, closeLogin}) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');


    useEffect(()=>{
        if(showLogin){
            $('#login-modal').addClass('show-login');
            $('#login-modal').removeClass('hide-login');
        }else {
            $('#login-modal').removeClass('show-login');
            $('#login-modal').addClass('hide-login');
        }
    },[showLogin])




    const onLogin = (e) => {
        e.preventDefault();
        console.log(login, password);
        dbLogin(login,password);
    }
    return (
        <div id='login-modal' className='main-login'>
            <form onSubmit={onLogin}>
                <input onChange={e => setLogin(e.target.value)} className='login-input input-anime' placeholder='Login' type='text' />
                <br/>
                <input onChange={e => setPassword(e.target.value)} className='password-input input-anime' placeholder='Password' type='password'/>
                <br />
                <button className='login-btn input-anime'>Login</button>
            </form>
        </div>
    )
}

export default LoginPopup;