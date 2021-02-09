import axios from 'axios';

const dbAxios = axios.create({baseURL: "http://localhost:3000/"});

const dbLogin = (login, password) => {

    // let data = JSON.stringify({
    //     username: login,
    //     password: password
    // });
    dbAxios.post('/user/login', {
        username: login,
        password: password
    }).then(res => {
        console.log(res);
    }).catch(err => {
        console.error(err);
    });
}

export default dbLogin;