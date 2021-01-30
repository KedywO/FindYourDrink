import React,{useState} from "react";
import {Link} from 'react-router-dom';
import './Searchbar.css';

export default function Searchbar({setFraseMain, show,setShow}){
    const [frase,setFrase] = useState("");


    return (
        <div className="searchbar" >
            <input id="inputS" autoFocus="true" onChange={(e) => {setFrase(e.target.value)}} type="text" />
            <Link to='/search'> <button id="searchB" type="button" onClick={()=>{setFraseMain(frase); setShow(!show)}}>Szukaj</button></Link>
        </div>
    )
}