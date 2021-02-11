import React,{useEffect, useState} from "react";
import './SearchSite.css';
import searchAxios from "../../adapters/groceryaxios";
import Result from '../../components/result/Result';
import {useDispatch, useSelector} from "react-redux";
import {notFromSearchBtnAction, showSearchbarAction} from "../../context/reducers/showSearchbarReducer";


export default function SearchSite(){
    const [drinks, setDrinks] = useState([]);
    const fromSearchBtn = useSelector(state => state.showSearchbarReducer.fromSearchBtn);
    const frase = useSelector(state => state.fraseReducer.frase);
    const dispatch = useDispatch();
    const showSearchbar = () => dispatch(showSearchbarAction());
    const removeFromSearchBtn = () => dispatch(notFromSearchBtnAction());
    useEffect(()=>{
        const fetchSearch = async () =>{
            const request = await searchAxios.get(`search.php?s=${frase}`)
            setDrinks(request.data.drinks);
            return request;
        }
        fetchSearch();
    },[frase])

    useEffect(()=>{
        if(!fromSearchBtn) {
            showSearchbar();
            removeFromSearchBtn();
        }else removeFromSearchBtn();

    },[])


    return (
        <div className="main">
            {drinks == null ? <h3>Nie znaleziono drinka</h3> : drinks.map(drin =>(
                <Result key={drin.idDrink} drink={drin} />
            ))}

        </div>
    )
}