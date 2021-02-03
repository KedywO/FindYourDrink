import React, {useState} from "react";
import './Navbar.css';
import {Link} from 'react-router-dom';
import Searchbar from "./Searchbar";

export default function Navbar({setFrase}){
    const [searchbar, setSearchbar] = useState(false);

    let searchShow;
    if(searchbar === true){
        searchShow = <Searchbar show={searchbar} setShow={setSearchbar} setFraseMain={setFrase} />;
    }else searchShow = null;

    return (
        <header className="header">
            <nav className="nav">
                <Link to='/FindYourDrink' className="nav-a"><h3>drinkIT!</h3></Link>
                <Link to='/drinks' className="nav-a"><h3>Drinks</h3></Link>
                <Link className="nav-a"><h3>Your drinks</h3></Link>
                <h3 onClick={()=>{setSearchbar(!searchbar)}} id="searchBtn">Search</h3>
            </nav>
            {searchShow}
            {searchbar? <div className="fallBack" onClick={() => setSearchbar(!searchbar)} />: null}
        </header>
    )
}