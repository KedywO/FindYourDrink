import axios from 'axios';

const dbAxios = axios.create({baseURL: "http://localhost:3001/"});

const dbLogin = (login, password, setter) => {
    // let data = JSON.stringify({
    //     username: login,
    //     password: password
    // });
    dbAxios.post('/user/login', {
        username: login,
        password: password
    }).then(res => {
        setter(res.data.token);
    }).catch(err => {
        console.error(err);
    });
}

const getUserById = (id, jwt) => {
    dbAxios.get(`/user/${id}`, {headers: {Authorization: `Bearer ${jwt}`}})
        .then(res => console.log(res))
        .catch(err => console.log(err));
}

export {getUserById, dbLogin};