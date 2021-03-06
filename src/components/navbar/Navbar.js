import React, {useState} from "react";
import './Navbar.css';
import {Link} from 'react-router-dom';
import Searchbar from "../searchbar/Searchbar";
import {useDispatch, useSelector} from "react-redux";
import {
    fromSearchBtnAction,
    hideSearchbarAction,
    notFromSearchBtnAction,
    showSearchbarAction
} from "../../context/reducers/showSearchbarReducer";
import LoginPopup from "../../modals/LoginModal/LoginPopup";
import {getUserById} from "../../dbAxios";



export default function Navbar(){
    const [loginModal, setLoginModal] = useState(false);
    const [firstLoad, setFirstLoad] = useState(false);
    const searchbar = useSelector(state => state.showSearchbarReducer.showSearchbar);
    const jwt = useSelector(state => state.jwtReducer.jwt);
    const dispatch = useDispatch();

    const showSearchbar = () => dispatch(showSearchbarAction());
    const hideSearchbar = () => dispatch(hideSearchbarAction());
    const fromSearchBtn = () => dispatch(fromSearchBtnAction());
    const notFromSearchBtn = () => dispatch(notFromSearchBtnAction());

    let searchShow;
    if(searchbar === true){
        searchShow = <Searchbar />;
    }else searchShow = null;

    const testAPI = () => {
        getUserById(1,jwt);
    }

    return (
        <header className="header">
            <nav className="nav">
                <Link to='/FindYourDrink' className="nav-a"><h3>drinkIT!</h3></Link>
                <Link to='/drinks' className="nav-a"><h3>Drinks</h3></Link>
                <Link to='#' className="nav-a" onClick={testAPI}><h3>Your drinks</h3></Link>
                <h3 onClick={()=>{showSearchbar();fromSearchBtn();}} className="searchBtn">Search</h3>
                <h3 onClick={()=>{setFirstLoad(true); setLoginModal(prevState => !prevState)}} className='searchBtn'>Login</h3>
            </nav>
            {searchShow}
            {searchbar ? <div className="fallBack" onClick={() => {hideSearchbar(); notFromSearchBtn();}} />: null}
            {firstLoad ? <LoginPopup closeLogin={setLoginModal} showLogin={loginModal}/> : null}
        </header>
    )
}


// export default function Navbar({setFrase}){
//     const [searchbar, setSearchbar] = useState(false);
//
//     let searchShow;
//     if(searchbar === true){
//         searchShow = <Searchbar show={searchbar} setShow={setSearchbar} setFraseMain={setFrase} />;
//     }else searchShow = null;
//
//     return (
//         <header className="header">
//             <nav className="nav">
//                 <Link to='/FindYourDrink' className="nav-a"><h3>drinkIT!</h3></Link>
//                 <Link to='/drinks' className="nav-a"><h3>Drinks</h3></Link>
//                 <Link className="nav-a"><h3>Your drinks</h3></Link>
//                 <h3 onClick={()=>{setSearchbar(!searchbar)}} id="searchBtn">Search</h3>
//             </nav>
//             {searchShow}
//             {searchbar? <div className="fallBack" onClick={() => setSearchbar(!searchbar)} />: null}
//         </header>
//     )
// }