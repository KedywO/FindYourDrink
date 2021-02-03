import React,{useState} from "react";
import {Link} from 'react-router-dom';
import './Searchbar.css';
import {useDispatch} from "react-redux";
import {hideSearchbarAction} from "../../context/reducers/showSearchbarReducer";
import {setFraseAction} from "../../context/reducers/fraseReducer";

export default function Searchbar(){
    const [frase,setFrase] = useState("");
    const dispatch = useDispatch();
    const hideSearchbar = () => dispatch(hideSearchbarAction());
    const setFraseState = fraseMain => dispatch(setFraseAction(fraseMain));

    return (
        <div className="searchbar" >
            <input id="inputS" autoFocus="true" onChange={(e) => {setFrase(e.target.value)}} type="text" />
            <Link to='/search'> <button id="searchB" type="button" onClick={()=>{setFraseState(frase); hideSearchbar()}}>Szukaj</button></Link>
        </div>
    )
}